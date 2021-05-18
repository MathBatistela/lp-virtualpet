import Phaser from 'phaser';

export default class LoginScene extends Phaser.Scene {
  constructor() {
    super('cadastro');
  }

  preload() {
   // this.load.html('cadastroForm', 'assets/form.html');
    this.load.html('cadastroForm', 'assets/text/cadastroform.html');
    this.load.image('pic', 'assets/backgrounds/login.png');
    }

  create() {
    const { width, height } = this.scale;
    this.add.image(width/2, height/2, 'pic');
    var text = this.add.text(190, 80, 'Please register to play', { color: 'white', fontFamily: 'Dogica Pixel', fontSize: '32px '});
    var element = this.add.dom(width/2, height/2).createFromCache('cadastroForm');
    element.setPerspective(800);

    element.addListener('click');

    element.on('click', () => {
      var inputUsername = element.getChildByName('username');
      var inputPassword = element.getChildByName('password');
      console.log(inputUsername.value);
      console.log(inputPassword.value);
    });

  }
}

