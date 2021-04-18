import Phaser from 'phaser';

export default class UIScene extends Phaser.Scene {
  constructor() {
    super('ui');
  }

  preload() {
    this.load.image('drink', 'assets/icons/IconDrink.png');
    this.load.image('food', 'assets/icons/IconEat.png');
    this.load.image('sleep', 'assets/icons/IconLights.png');
    this.load.image('affection', 'assets/icons/IconPet.png');
    this.load.image('info', 'assets/icons/Iconinfo.png');
    this.load.image('plus', 'assets/icons/IconPlus.png');
    this.load.image('game', 'assets/icons/IconGame.png');
    this.load.image('bath', 'assets/icons/IconBath.png');
    this.load.image('medicine', 'assets/icons/IconMedicine.png');
    this.load.image('back', 'assets/icons/IconBack.png');
   //this.load.bitmapFont('400', '300', 'Dogica Pixel', '10', 16)
  }

  create() {
    // Fazer aqui
    this.add.rectangle(50,400,100,800,12895428);
    this.add.rectangle(950,400,100,800,12895428);
    var icon1 = this.add.image(60,50, 'drink').setScale(3);
    var icon2 = this.add.image(icon1.x, icon1.y+100, 'food').setScale(3);
    var icon3 = this.add.image(icon2.x, icon2.y+120, 'sleep').setScale(3);
    var icon4 = this.add.image(icon3.x, icon3.y+120, 'affection').setScale(3);
    this.add.image(icon4.x, icon4.y+120, 'info').setScale(3);
    var icon5 = this.add.image(950, 60, 'plus').setScale(2);
    var icon6 = this.add.image(icon5.x+10, icon5.y+90, 'game').setScale(3);
    var icon7 = this.add.image(icon6.x, icon6.y+120, 'bath').setScale(3);
    var icon8 = this.add.image(icon7.x+5, icon7.y+120, 'medicine').setScale(3);
    this.add.image(icon8.x-15, icon8.y+140, 'back').setScale(1.5);
    var text = this.add.text(120, 16, 'Felicidade:', { fontSize: '20px', color: '#000' });// colocar essa fonte Dogica Pixel
    var text2 = this.add.text(text.x, text.y+25, 'Fome:', { fontSize: '20px', color: '#000' });
    this.add.text(text.x+400, text.y, 'Energia:', { fontSize: '20px', color: '#000' });
    this.add.text(text2.x+400, text2.y, 'Saúde:', { fontSize: '20px', color: '#000' });
  }
}
