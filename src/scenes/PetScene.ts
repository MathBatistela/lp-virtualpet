import Phaser from "phaser";
import PetController from "../petController";
import { IPet } from "../interfaces";
import State from "../petStates";

class PetScene extends Phaser.Scene {
  public petController!: PetController;
  private triggerTimer?: Phaser.Time.TimerEvent;


  constructor(key: string) {
    super(key);
  }

  init(pet: IPet) {
    this.petController = new PetController(this, pet);
  }

  public setTimer(ms: number) {
    this.triggerTimer = this.time.addEvent({
      callback: this.timerEvent,
      callbackScope: this,
      delay: ms, // 1000 = 1 second
      loop: true,
    });
  }

  public timerEvent(): void {
    const healthReference = 24 * 36;
    const hungerReference = 6 * 36;
    const happinessReference = 3 * 36;

    const deltaTime = (Date.now() - this.petController.pet.referenceTime) / 1000;

    if (this.petController.pet.state == State.NORMAL){
      this.petController.updateHealth(-(1/healthReference)*deltaTime);
    }
    else if (this.petController.pet.state == State.SICK){
      this.petController.updateHealth(-((1/healthReference)*deltaTime)*3);
    }
    
    this.petController.updateHunger(-(1/hungerReference)*deltaTime);
    this.petController.updateHappiness(-(1/happinessReference)*deltaTime);

    if (this.petController.pet.happiness <= 30){
      this.petController.pet.state = State.SAD;
    }

    if (this.petController.pet.health <= 30){
      this.petController.pet.state = State.SICK;
    }

    if (this.petController.pet.health <= 0){
      this.petController.pet.state = State.DEAD;
    }

    console.log(this.petController.pet.happiness);

    this.petController.setAnimation(
      this.petController.pet.state
    );
    this.petController.pet.referenceTime = Date.now();
  }
}

export default PetScene;
