import Phaser, { Input } from 'phaser';
import Kitchen from './Kitchen';


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
    // fazer função com todas as telas e abilitar quando clicar no icon

    this.add.rectangle(50,400,100,800,12895428);
    this.add.rectangle(950,400,100,800,12895428);
   
    /* this.input.once('pointerdown', () =>{
      this.scene.add('kitchen', Kitchen, true, {x:400, y: 300});
    }, this); */
    var icon1 = this.add.sprite(60, 50, 'drink').setInteractive().setScale(3);
      icon1.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      icon1.on('pointerout', function (pointer) {
        this.clearTint();
      });
      icon1.on('pointerup', function (pointer) {
          this.clearTint();
      });

    var icon2 = this.add.sprite(icon1.x, icon1.y+100, 'food').setInteractive().setScale(3);
      icon2.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      icon2.on('pointerout', function (pointer) {
        this.clearTint();
      });
      icon2.on('pointerup', function (pointer) {
        this.clearTint();
      });

    var icon3 = this.add.sprite(icon2.x, icon2.y+120, 'sleep').setInteractive().setScale(3);
      icon3.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      icon3.on('pointerout', function (pointer) {
        this.clearTint();
      });
      icon3.on('pointerup', function (pointer) {
        this.clearTint();
      });

    var icon4 = this.add.sprite(icon3.x, icon3.y+120, 'affection').setInteractive().setScale(3);
      icon4.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      icon4.on('pointerout', function (pointer) {
        this.clearTint();
      });
      icon4.on('pointerup', function (pointer) {
        this.clearTint();
      });

    var info = this.add.sprite(icon4.x, icon4.y+120, 'info').setInteractive().setScale(3);
      info.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      info.on('pointerout', function (pointer) {
        this.clearTint();
      });
      info.on('pointerup', function (pointer) {
        this.clearTint();
      });

    var icon5 = this.add.sprite(950, 60, 'plus').setInteractive().setScale(2);
      icon5.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      icon5.on('pointerout', function (pointer) {
        this.clearTint();
      });
      icon5.on('pointerup', function (pointer) {
        this.clearTint();
      });

    var icon6 = this.add.sprite(icon5.x+10, icon5.y+90, 'game').setInteractive().setScale(3);
      icon6.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      icon6.on('pointerout', function (pointer) {
        this.clearTint();
      });
      icon6.on('pointerup', function (pointer) {
        this.clearTint();
      });

    var icon7 = this.add.sprite(icon6.x, icon6.y+120, 'bath').setInteractive().setScale(3);
      icon7.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      icon7.on('pointerout', function (pointer) {
        this.clearTint();
      });
      icon7.on('pointerup', function (pointer) {
        this.clearTint();
      });
    
    var icon8 = this.add.sprite(icon7.x+5, icon7.y+120, 'medicine').setInteractive().setScale(3);
      icon8.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      icon8.on('pointerout', function (pointer) {
        this.clearTint();
      });
      icon8.on('pointerup', function (pointer) {
        this.clearTint();
      });

    var icon9 = this.add.sprite(icon8.x-15, icon8.y+140, 'back').setInteractive().setScale(1.5); 
      icon9.on('pointerdown', function (pointer) {
        this.setTint(0xff0000);
      });
      icon9.on('pointerout', function (pointer) {
        this.clearTint();
      });
      icon9.on('pointerup', function (pointer) {
        this.clearTint();
      });


    /* var icon1 = this.add.image(60,50, 'drink').setScale(3);
    var icon2 = this.add.image(icon1.x, icon1.y+100, 'food').setScale(3); //Button
    var icon3 = this.add.image(icon2.x, icon2.y+120, 'sleep').setScale(3);
    var icon4 = this.add.image(icon3.x, icon3.y+120, 'affection').setScale(3);
    this.add.image(icon4.x, icon4.y+120, 'info').setScale(3);
    var icon5 = this.add.image(950, 60, 'plus').setScale(2);
    var icon6 = this.add.image(icon5.x+10, icon5.y+90, 'game').setScale(3);
    var icon7 = this.add.image(icon6.x, icon6.y+120, 'bath').setScale(3);
    var icon8 = this.add.image(icon7.x+5, icon7.y+120, 'medicine').setScale(3);
    this.add.image(icon8.x-15, icon8.y+140, 'back').setScale(1.5); */
    var text = this.add.text(120, 16, 'Felicidade:', { fontSize: '20px', color: '#000' } );// colocar essa fonte Dogica Pixel
    var text2 = this.add.text(text.x, text.y+25, 'Fome:', { fontSize: '20px', color: '#000' });
    this.add.text(text.x+400, text.y, 'Energia:', { fontSize: '20px', color: '#000' });
    this.add.text(text2.x+400, text2.y, 'Saúde:', { fontSize: '20px', color: '#000' }); 
    //fazer a numeração mudar conforme evento 0-100
    //this.tick = time;
    /* this.time.addEvent
    this.time.addEvent.length.valueOf(); */

    /* this.update(Math.floor(1000 - timer.getElapsed()))
    {
        info.setText('Alive: ' + alive + '\nTime: ' + Math.floor(10000 - timer.getElapsed()));
    } */

  }
}

