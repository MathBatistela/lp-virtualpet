import Phaser from "phaser";
import IPet from "./petInterface";
import State from "./petStates";

export default class PetController {
  private sprite!: Phaser.GameObjects.Sprite;
  private scene: Phaser.Scene;
  private pet: IPet;

  constructor(scene: Phaser.Scene, pet: IPet) {
    this.scene = scene;
    this.pet = pet;
  }

  public petPreload() {
    const states = ["normal", "sick"];
    for (let animation of states){
      this.scene.load.spritesheet(
        `pet-${animation}`,
        `/assets/pet/${this.pet.skin}/${this.pet.skin}-${animation}-sheet.png`,
        { frameWidth: 128, frameHeight: 128, endFrame: 3 }
      );
    }
  }

  public petCreate(x:number,y:number) : Phaser.GameObjects.Sprite {
    this.sprite = this.scene.add.sprite(x,y,`pet-${this.pet.state}`);
    this.createAnimations();
    return this.sprite;
  }

  private createAnimations() {
    const framespttr =  {start: 0, end: 3,first: 0};
    const states = ["normal", "sick"];

    for (let animation of states){
      this.sprite.anims.create({
        key: `pet-${animation}`,
        frames: this.sprite.anims.generateFrameNumbers(`pet-${animation}`,framespttr),
        frameRate: 4,
        repeat: -1,
      });
    }
  }

  public setAnimation(state: State){
      this.sprite.play(`pet-${state}`)
  }
}

