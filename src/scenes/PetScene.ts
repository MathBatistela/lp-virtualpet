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

  create() {
    eventsCenter.on('align-pet-animation', (object:string) =>{
      // this.objController.objPlayAnimation(width * 0.55,height * 0.9,object);
      this.petController.setTemporaryAnimation(State.AFFECTION,5000);
    }, this);
  }

  public temporaryAnimationManager(params: {animation:string; duration:number; width:number; height:number}){
    const states = <any>Object.values(State);
    const objs = <any>Object.values(Obj);
    if (states.includes(params.animation)){
      this.petController.setTemporaryAnimation(params.animation,params.duration);
    }
    else if (objs.includes(params.animation)){
      this.objController.objPlayAnimation(params.width,params.height,params.animation);
    }
  }

  public timerEvent(): void {
    const healthReference = 24 * 36;
    const hungerReference = 6 * 36;
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

    if (this.petController.pet.health <= 0){
      this.petController.pet.state = State.DEAD;
    }
    else if (this.petController.pet.health <= 30){
      this.petController.pet.state = State.SICK;
    }
    else if (this.petController.pet.happiness <= 30){
      this.petController.pet.state = State.SAD;
    }
    else {
      this.petController.pet.state = State.NORMAL;
    }
    console.log(this.petController.pet.health);

    if (this.petController.animate){
      this.petController.setAnimation(
        this.petController.pet.state
      );

    }
    this.petController.pet.referenceTime = Date.now();
    Pet.updatePet(this.petController.pet,this.petController.pet.id)
  }
}

export default PetScene;
