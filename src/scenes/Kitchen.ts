import State from "../petStates";
import PetScene from "./PetScene";

class Kitchen extends PetScene {
  constructor() {
    super("kitchen");
  }

  preload() {
    this.load.image("background", "assets/backgrounds/kitchen.png");

  }

  create() {
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, "background");

    const pet = this.petController.petCreate(width * 0.5, height * 0.6);
    pet.scale = 4;

    this.petController.setAnimation(State.NORMAL);
  }

}

export default Kitchen;
