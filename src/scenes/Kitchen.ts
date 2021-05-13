import State from "../petStates";
import PetScene from "./PetScene";

class Kitchen extends PetScene {
  constructor() {
    super("kitchen");
    console.log("con kitchen")
  }

  preload() {
    this.load.image("background", "assets/backgrounds/kitchen.png");
    this.petController.petPreload();
    this.setTimer(1000);
    // this.scene.run('ui',this.petController.pet)

  }

  create() {
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, "background");

    const pet = this.petController.petCreate(width * 0.5, height * 0.6);
    pet.scale = 4;

    this.petController.setAnimation(State.SICK);
  }

}

export default Kitchen;