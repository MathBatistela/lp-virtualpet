import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  private pet = {
    "id": 3,
    "userId": 9,
    "name": "Virgie",
    "skin": "tailed",
    "state": "normal",
    "health": 100,
    "hunger": 100,
    "happiness": 70,
    "referenceTime": "00:00:00",
    "lastScene": "home"
}

  preload() {

  }

  create() {
    this.scene.launch('kitchen',this.pet);
    // this.scene.launch('ui');
  }
}

