import Phaser from 'phaser';
import State from "../petStates";
import { Pet, User } from "../apiInterface"
import { IPet } from '../interfaces'

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {

  }

  create() {

    Pet.getPet(1).then( (data) => {
      this.scene.launch('ui',data.vpet);
    });
    // this.scene.launch('ui');
  }
}

