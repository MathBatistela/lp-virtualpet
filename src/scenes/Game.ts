import Phaser from 'phaser';

export default class GameScene extends Phaser.Scene {
  constructor() {
    super('GameScene');
  }

  preload() {

  }

  create() {
    this.scene.launch('KitchenScene',{skin: "hybrid"});
    // this.scene.launch('ui');
  }
}

