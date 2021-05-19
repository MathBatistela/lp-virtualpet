import Phaser from "phaser";
import { IPet } from "./interfaces";
import State from "./petStates";
import eventsCenter from "./eventsCenter"

export default class PetController {
  private sprite!: Phaser.GameObjects.Sprite;
  private scene: Phaser.Scene;
  public forceState?: string;
  public animate: boolean;
  public pet: IPet;

  constructor(scene: Phaser.Scene, pet: IPet) {
    this.scene = scene;
    this.pet = pet;
    this.animate = true;
    eventsCenter.on('update-happiness', this.updateHappiness, this);
    eventsCenter.on('update-health', this.updateHealth, this);
    eventsCenter.on('update-hunger', this.updateHunger, this);
    eventsCenter.on('update-energy', this.updateEnergy, this);
    eventsCenter.on('update-dirty', this.updateDirty, this);
    eventsCenter.on('force-state', this.setForceState, this);
  }

  public petPreload() {
    const states = Object.values(State);
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
    const states = Object.values(State);

    for (let animation of states){
      this.sprite.anims.create({
        key: `pet-${animation}`,
        frames: this.sprite.anims.generateFrameNumbers(`pet-${animation}`,framespttr),
        frameRate: 4,
      });
    }
  }

  public setAnimation(state: string){
    this.sprite.play(`pet-${state}`);
  }

  public setForceState(state: string){
    if (state != this.pet.state){
      this.forceState = state;
    }
    if (state == 'none'){
      this.forceState = undefined
    }
  }

  public setTemporaryAnimation(state:string,time?:number){
    this.animate = false;
    this.setAnimation(state);
    setTimeout(()=>{
      this.animate = true;
    },time);
  }

  public updateHealth(amount: number){
    this.pet.health = this.pet.health + amount;
    if ( this.pet.health <= 0 ){
      this.pet.hunger = 0;
    }
    eventsCenter.emit('update-health-label', this.pet.health.toFixed(1).toString());
  }

  public updateHunger(amount: number){
    this.pet.hunger = this.pet.hunger + amount;
    if ( this.pet.hunger <= 0 ){
      this.pet.hunger = 0;
    }
    eventsCenter.emit('update-hunger-label', this.pet.hunger.toFixed(1).toString());
  }

  public updateHappiness(amount: number){
    this.pet.happiness = this.pet.happiness + amount;
    if ( this.pet.happiness <= 0 ){
      this.pet.happiness = 0;
    }
    else if ( this.pet.happiness >= 100 ){
      this.pet.happiness = 100;
    }
    eventsCenter.emit('update-happiness-label', this.pet.happiness.toFixed(1).toString());
  }
  
  public updateEnergy(amount: number){
    this.pet.energy = this.pet.energy + amount;
    if ( this.pet.energy <= 0 ){
      this.pet.energy = 0;
    }
    else if ( this.pet.energy >= 100 ){
      this.pet.energy = 100;
    }
    eventsCenter.emit('update-energy-label', this.pet.energy.toFixed(1).toString());
  }

  public updateDirty(amount: number){
    this.pet.dirty = this.pet.dirty + amount;
    if ( this.pet.dirty <= 0 ){
      this.pet.dirty = 0;
    }
    else if ( this.pet.dirty >= 100 ){
      this.pet.dirty = 100;
    }
  }
  

}

