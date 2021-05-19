import Phaser from "phaser";
import PetController from "../petController";
import ObjController from "../petObjectsController";
import { IPet } from "../interfaces";
import State from "../petStates";
import Obj from "../petObjects";
import { Pet } from "../apiInterface"
import eventsCenter from "../eventsCenter";

class PetScene extends Phaser.Scene {
  public petController!: PetController;
  public objController!: ObjController;
  private triggerTimer?: Phaser.Time.TimerEvent;

  constructor(key: string) {
    super(key);
  }

  init(pet: IPet) {
    this.petController = new PetController(this, pet);
    this.objController = new ObjController(this);
  }

  public setTimer(ms: number) {
    this.triggerTimer = this.time.addEvent({
      callback: this.timerEvent,
      callbackScope: this,
      delay: ms, // 1000 = 1 second
      loop: true,
    });
  }

  public temporaryAnimationManager(animation:string, duration:number, width:number, height:number){
    const states = <any>Object.values(State);
    const objs = <any>Object.values(Obj);
    if (states.includes(animation)){
      this.petController.setTemporaryAnimation(animation,duration);
    }
    else if (objs.includes(animation)){
      this.objController.objPlayAnimation(width,height,animation);
    }
  }

  public timerEvent(): void {
    const healthReference = 24 * 36;
    const hungerReference = 6 * 36;
    const energyReference = 6 * 36;
    const dirtyReference = 4 * 36;
    const happinessReference = 3 * 36;

    const deltaTime = (Date.now() - this.petController.pet.referenceTime) / 1000;

    if (this.petController.pet.state == State.SICK){
      this.petController.updateHealth(-((1/healthReference)*deltaTime)*3);
    }
    else {
      this.petController.updateHealth(-(1/healthReference)*deltaTime);
    }

    this.petController.updateHunger(-(1/hungerReference)*deltaTime);
    this.petController.updateHappiness(-(1/happinessReference)*deltaTime);
    this.petController.updateEnergy(-(1/energyReference)*deltaTime);
    this.petController.updateDirty(-(1/dirtyReference)*deltaTime);

    if (this.petController.pet.health <= 0){
      this.petController.pet.state = State.DEAD;
    }
    else if (this.petController.pet.state == State.SLEEPING){
      this.petController.updateEnergy(((1/energyReference)*deltaTime)*3);
    }
    else if (this.petController.pet.hunger > 110 || this.petController.pet.health > 120){
      this.petController.pet.state = State.SICK;
      this.petController.updateHunger(-((1/hungerReference)*deltaTime)*3);
    }
    else if (this.petController.pet.health <= 30){
      this.petController.pet.state = State.SICK;
    }
    else if (this.petController.pet.energy <= 30){
      this.petController.pet.state = State.TIRED;
    }
    else if (this.petController.pet.dirty <= 30){
      this.petController.pet.state = State.DIRTY;
    }
    else if (this.petController.pet.happiness <= 30){
      this.petController.pet.state = State.SAD;
    }
    else {
      this.petController.pet.state = State.NORMAL;
    }

    if (this.petController.animate){
      if (this.petController.forceState){
        this.petController.setAnimation(
          this.petController.forceState
        );
      }
      else {
        this.petController.setAnimation(
          this.petController.pet.state
        );
      }
    }

    this.petController.pet.referenceTime = Date.now();
    Pet.updatePet(this.petController.pet,this.petController.pet.id)
  }
}

export default PetScene;
