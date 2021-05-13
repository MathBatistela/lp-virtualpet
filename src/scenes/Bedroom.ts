import State from "../petStates";
import PetScene from "./PetScene";

class Bedroom extends PetScene {
  constructor() {
    super("bedroom");
    console.log("con bedroom")
  }

  preload() {
    this.load.image("background", "assets/backgrounds/bedroom.png");
    this.petController.petPreload();
    this.setTimer(1000);
  }

  create() {
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, "background");

    const pet = this.petController.petCreate(width * 0.5, height * 0.6);
    pet.scale = 4;

    this.petController.setAnimation(State.NORMAL);
  }

}

export default Bedroom;