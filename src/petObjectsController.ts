import Phaser from "phaser";
import { IPet } from "./interfaces";
import Obj from "./petObjects";
import eventsCenter from "./eventsCenter"

export default class PetObjectsController {
  private sprite!: Phaser.GameObjects.Sprite;
  private scene: Phaser.Scene;

  constructor(scene: Phaser.Scene) {
    this.scene = scene;
  }

  public objPreload() {
    const states = Object.values(Obj);
    for (let animation of states){
      this.scene.load.spritesheet(
        `obj-${animation}`,
        `/assets/objects/${animation}-sheet.png`,
        { frameWidth: 80, frameHeight: 120, endFrame: 5 }
      );
    }
  }

  public objPlayAnimation(x:number,y:number,name:string){
    const framespttr =  {start: 0, end: 5,first: 0};
    this.sprite = this.scene.add.sprite(x,y,`obj-${name}`);
    this.sprite.anims.create({
      key: `obj-${name}`,
      frames: this.sprite.anims.generateFrameNumbers(`obj-${name}`,framespttr),
      frameRate: 4,
      hideOnComplete: true
    });
    this.sprite.play(`obj-${name}`);
    this.sprite.once(Phaser.Animations.Events.ANIMATION_COMPLETE, () => {
      this.sprite.destroy();
    });
    return this.sprite;
  }
  
}