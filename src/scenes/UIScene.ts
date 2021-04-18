import Phaser from 'phaser';

export default class UIScene extends Phaser.Scene {
  constructor() {
    super('ui');
  }

  preload() {
    //Icone aqui
  }

  create() {
    // Fazer aqui
    var rec1 = this.add.rectangle(50,400,100,600,12895428);
    var rec2 = this.add.rectangle(950,400,100,600,12895428);
    // this.add.rectangle(950,300,100,600,12895428);
  }
}
