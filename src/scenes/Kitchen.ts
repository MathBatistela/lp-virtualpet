import State from "../petStates";
import PetScene from "./PetScene";
import { Pet } from "../apiInterface"
import eventsCenter from "../eventsCenter";

class Kitchen extends PetScene {
  constructor() {
    super("kitchen");
  }

  preload() {
    this.load.image("kit-background", "assets/backgrounds/kitchen.png");
    this.petController.petPreload();
    this.objController.objPreload();
    this.setTimer(1000);
  }

  

  create() {
    const { width, height } = this.scale; 
    this.add.image(width / 2, height / 2, "kit-background");

    const pet = this.petController.petCreate(width/2, height/2 -50);
    pet.scale = 4;
    eventsCenter.on('add-animation',(params: {animation:string; duration:number}) => {
      this.temporaryAnimationManager(params.animation,params.duration,pet.x+40,pet.y+150);
    });


  }

}

export default Kitchen;
