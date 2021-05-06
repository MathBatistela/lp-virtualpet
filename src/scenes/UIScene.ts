import Phaser, { Input, NONE } from 'phaser';


export default class UIScene extends Phaser.Scene {
  fundos:any;
  constructor() {
    super('ui');
    this.fundos = [];
    
  }

  preload() {
    //fundos
    this.load.image("kitchen", "assets/backgrounds/kitchen.png");
    this.load.image("bathroom", "assets/backgrounds/bathroom.png");
    this.load.image("bedroom", "assets/backgrounds/bedroom.png");
    this.load.image("paisagem", "assets/backgrounds/paisagem.png");

    //icons
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

  addButton(ctx:any, x:any, y:any, image:any, scale:any, onClick:any){
    var icon1 = this.add.sprite(x, y, image).setInteractive().setScale(scale);
      icon1.on('pointerdown', function () {
        icon1.setTint(0xff0000);
      });
      icon1.on('pointerout', function () {
        icon1.clearTint();
      });
      icon1.on('pointerup', function () {
        icon1.clearTint();
       onClick(ctx);
      });
      return icon1;
  }

  sayHi(){
    console.log('hi');
  }

  showFundo(nome:string){
    for (const [key] of Object.entries(this.fundos)) {
      this.fundos[key].setVisible(false);
    }
    if(nome != 'none') this.fundos[nome].setVisible(true);
  }
  create() {
    // Fazer aqui
    // fazer função com todas as telas e abilitar quando clicar no icon

    this.add.rectangle(50,400,100,800,12895428);
    this.add.rectangle(950,400,100,800,12895428);
   
    const { width, height } = this.scale;

    this.fundos['fundokitchen'] = this.add.sprite(width/2, height/2.7, 'kitchen');
    this.fundos['fundoBathroom'] = this.add.sprite(width/2, height/2, 'bathroom');
    this.fundos['fundoBedroom'] = this.add.sprite(width/2, height/2.7, 'bedroom');
    this.fundos['fundoPaisagem'] = this.add.sprite(width/2, height/2.7, 'paisagem').setScale(0.42);
    // acrescemtar todos os fundos aqui
    this.showFundo('none');
    
    
   var icon1 = this.addButton(this, 60, 50, 'drink', 3, function(ctx:any){
      ctx.showFundo('fundokitchen');
    });

    var icon2 = this.addButton(this,icon1.x, icon1.y+100, 'food',3, function(ctx:any){
      ctx.showFundo('fundokitchen');
    });   

    var icon3 = this.addButton(this,icon2.x, icon2.y+120, 'sleep', 3, function(ctx:any){
      ctx.showFundo('fundoBedroom');
    });
    
    var icon4 = this.addButton(this, icon3.x, icon3.y+120, 'affection', 3, function(ctx:any){
      ctx.showFundo('fundoPaisagem');
    });

    this.addButton(this, icon4.x, icon4.y+120, 'info', 3, function(ctx:any){

    });    

    var icon5 = this.addButton(this, 950, 60, 'plus', 2, function(ctx:any){

    }); 

    var icon6 = this.addButton(this, icon5.x+10, icon5.y+90, 'game', 3, function(ctx:any){

    });
    
    var icon7 = this.addButton(this, icon6.x, icon6.y+120, 'bath', 3, function(ctx:any){

    });
    
    var icon8 = this.addButton(this, icon7.x+5, icon7.y+120, 'medicine', 3, function(ctx:any){

    });    

    this.addButton(this, icon8.x-15, icon8.y+140, 'back', 1.5, function(ctx:any){
      ctx.showFundo('fundokitchen');
    });   
      
      var text = this.add.text(120, 16, 'Felicidade:', { fontSize: '20px', color: '#000' } );// colocar essa fonte Dogica Pixel
      var text2 = this.add.text(text.x, text.y+25, 'Fome:', { fontSize: '20px', color: '#000' });
      this.add.text(text.x+400, text.y, 'Energia:', { fontSize: '20px', color: '#000' });
      this.add.text(text2.x+400, text2.y, 'Saúde:', { fontSize: '20px', color: '#000' }); 

  }
}

