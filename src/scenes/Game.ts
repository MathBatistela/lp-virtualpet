import Phaser from 'phaser';
import State from "../petStates";
import { Pet, User } from "../apiInterface"
import { IPet } from '../interfaces'
import LoginScene from './Login';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {

  }

  create() {

    User.getUser(9).then(data => console.log(data.user))

    Pet.getPet(1).then( (data) => {
      this.scene.launch('LoginScene');
    });

    
    // this.scene.launch('ui');
  }
}

