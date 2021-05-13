import Phaser from "phaser";
import PetController from "../petController";
import IPet from "../petInterface";
import State from "../petStates";

class PetScene extends Phaser.Scene {
  public petController!: PetController;
  private triggerTimer?: Phaser.Time.TimerEvent;

  private lastms: number = 1618784618708;

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
    // console.log(Date.now());
    // Create your new object here.
    console.log(Date.now() - this.lastms);
    this.lastms = Date.now();
  }
}

export default PetScene;