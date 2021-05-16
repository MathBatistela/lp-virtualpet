import Phaser from 'phaser';
import State from "../petStates";
import { Pet, User } from "../apiInterface"
import { IPet } from '../interfaces'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {
    // this.pet = {
    //   "userId": 9,
    //   "name": "Kuak",
    //   "skin": "tailed",
    //   "state": State.NORMAL,
    //   "health": 100,
    //   "hunger": 100,
    //   "happiness": 100,
    //   "referenceTime": Date.now(),
    //   "lastScene": "Game"
    // }  
  }

  create() {

    User.getUser(9).then(data => console.log(data.user))

    Pet.getPet(18).then( (data) => {
      this.scene.launch('kitchen',data.vpet);
    });

    
    // this.scene.launch('ui');
  }
}

