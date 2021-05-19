import PetScene from "./PetScene";
import eventsCenter from "../eventsCenter";
import State from "../petStates";

class Bedroom extends PetScene {

  constructor() {
    super("bedroom");
  }

  private isSleep!:boolean;

  preload() {
    this.load.image("bedroom-background", "assets/backgrounds/bedroom.png");
    this.petController.petPreload();
    this.objController.objPreload();
    this.setTimer(1000);
    if (this.petController.pet.state == State.SLEEPING){
      this.isSleep = true;
    }
    else {
      this.isSleep = false;
    }
  }

  // private checkSleeping(p: Phaser.GameObjects.Sprite, x:number,y:number){
  //   if ( this.petController.pet.state == State.SLEEPING){
  //     p.x = x;
  //     p.y = y;
  //     return true;
  //   }
  //   else {
  //     return false;
  //   }
  // }

  create() {
    const { width, height } = this.scale;

    this.add.image(width / 2, height / 2, "bedroom-background");

    const pet = this.petController.petCreate(width/2, height/2 -50);
    pet.scale = 4;
    // this.checkSleeping(pet,width/2+280,height/2 -50);
    eventsCenter.on('add-animation',(params: {animation:string; duration:number}) => {
        this.temporaryAnimationManager(params.animation,params.duration,pet.x+40,pet.y+150);
    });

    eventsCenter.on('add-sleep', (animation:string) => {
      if (animation == State.SLEEPING){
        // const check = this.checkSleeping(pet,width/2+280,height/2 -50);
        if(this.isSleep){
          this.petController.pet.state = State.NORMAL;
        }
        else {
          this.petController.pet.state = State.SLEEPING;
        }
      }
    });
  }

}

export default Bedroom;
