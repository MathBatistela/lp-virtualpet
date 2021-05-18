import Phaser from 'phaser';

export default class LoginScene extends Phaser.Scene {
  constructor() {
    super('login');
  }

  preload() {
    this.load.html('loginForm', 'assets/form.html');
  }

  create() {
    const { width, height } = this.scale;
    var element = this.add.dom(width/2, height/2).createFromCache('loginForm');
    element.setPerspective(800);

    element.addListener('click');

    element.on('click', () => {
      var inputUsername = element.getChildByName('username');
      var inputPassword = element.getChildByName('password');
      console.log(inputUsername.value);
    })

  }
}

