import State from "../petStates";
import PetScene from "./PetScene";
import { Pet } from "../apiInterface"

class Bathroom extends PetScene {
  constructor() {
    super("bathroom");
  }

  preload() {
    this.load.image("bathroom-background", "assets/backgrounds/bathroom.png");
    this.petController.petPreload();
    this.setTimer(1000);
  }

  create() {
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, "bathroom-background");

    const pet = this.petController.petCreate(width * 0.5, height * 0.6);
    pet.scale = 4;

  }

}

export default Bathroom;
