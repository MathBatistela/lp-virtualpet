import Phaser from 'phaser';
import PetScene from "./PetScene";


export default class UIScene extends PetScene {
  private actualScene!:string;
  icons:any;
  constructor() {
    super('ui');   
    this.icons = [];
    // this.actualScene = 'bedroom'
  }

  preload() {
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

   //food
    this.load.image('juice', 'assets/icons/DrinkJuice1.png');
    this.load.image('milkShake', 'assets/icons/DrinkMilkShake1.png');
    this.load.image('bacon', 'assets/icons/FoodBacon1.png');
    this.load.image('brocoli', 'assets/icons/FoodBrocoli1.png');
    this.load.image('cake', 'assets/icons/FoodCake1.png');
    this.load.image('carrot', 'assets/icons/FoodCarrot1.png');
    this.load.image('chicken', 'assets/icons/FoodChicken1.png');
    this.load.image('iceCream', 'assets/icons/FoodIceCream1.png');

  }

  // private swapScene(scene:string) {
  //   if (scene != this.actualScene) {
  //     this.scene.remove(this.actualScene)
  //     this.scene.launch(scene,this.petController.pet)
  //     this.actualScene = scene
  //   }
  // }

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


  showIcons(nome:string, state:boolean){
    if(nome == 'none' && state == true) {
      for (const [key] of Object.entries(this.icons)) {
        this.icons[key].setVisible(false);       
      }      
    } else if(nome == 'none' && state == false) {
      for (const [key] of Object.entries(this.icons)) {
        this.icons[key].setVisible(true);       
      }
    } else {
      this.icons[nome].setVisible(state);
    }
 
  }

  create() {
    this.add.rectangle(50,400,100,800,12895428);
    this.add.rectangle(950,400,100,800,12895428);
    

    const { width, height } = this.scale;
    
    this.icons['Fdrink'] = this.addButton(this, 550,530,'juice', 1, function(ctx:any){

    });
    this.icons['Fdrink2'] = this.addButton(this, 450,530,'milkShake', 0.9, function(ctx:any){

    });
    this.icons['Imedicine'] = this.addButton(this, width/2, 530,'medicine', 4, function(ctx:any){
    
    });
    this.icons['Isleep'] = this.addButton(this, width/2, 530,'sleep', 4, function(ctx:any){
    
    });
    this.icons['Iaffection'] = this.addButton(this, width/2, 530,'affection', 4, function(ctx:any){
    
    });
    this.icons['Igame'] = this.addButton(this, width/2, 530,'game', 4, function(ctx:any){
    
    });
    this.icons['Ibath'] = this.addButton(this, width/2, 530,'bath', 4, function(ctx:any){
    
    });
    this.icons['Ibrocoli'] = this.addButton(this, 175, 530,'brocoli', 1, function(ctx:any){
    
    });
    this.icons['Icarrot'] = this.addButton(this, 308, 530,'carrot', 1, function(ctx:any){
    
    });
    this.icons['Ichicken'] = this.addButton(this, 441, 530,'chicken', 1, function(ctx:any){
    
    });
    this.icons['Ibacon'] = this.addButton(this, 574, 530,'bacon', 1, function(ctx:any){
    
    });
    this.icons['Icake'] = this.addButton(this, 707, 530,'cake', 1, function(ctx:any){
    
    });
    this.icons['IiceCream'] = this.addButton(this, 840, 530,'iceCream', 1, function(ctx:any){
    
    });

    this.showIcons('none', true);
    


   var icon1 = this.addButton(this, 60, 50, 'drink', 3, function(ctx:any){
      ctx.scene.remove('bedroom')
      ctx.scene.launch('kitchen',ctx.petController.pet)
      ctx.showIcons('none', true);
      ctx.showIcons('Fdrink', true);
      ctx.showIcons('Fdrink2', true);     
     
    });

    var icon2 = this.addButton(this,icon1.x, icon1.y+100, 'food',3, function(ctx:any){
      ctx.showIcons('none', true);
      ctx.showIcons('Ibrocoli', true);
      ctx.showIcons('Icarrot', true);
      ctx.showIcons('Ibacon', true);      
      ctx.showIcons('Ichicken', true); 
      ctx.showIcons('Icake', true); 
      ctx.showIcons('IiceCream', true); 
    });   

    var icon3 = this.addButton(this, icon2.x, icon2.y+120, 'sleep', 3, function(ctx:any){
      ctx.scene.launch('bedroom',ctx.petController.pet)
      ctx.showIcons('none', true);
      ctx.showIcons('Isleep', true);
    });
    
    var icon4 = this.addButton(this, icon3.x, icon3.y+120, 'affection', 3, function(ctx:any){
      ctx.showIcons('none', true);
      ctx.showIcons('Iaffection', true);
    });

    this.addButton(this, icon4.x, icon4.y+120, 'info', 3, function(ctx:any){
      ctx.showIcons('none', true);
    });    

    var icon5 = this.addButton(this, 950, 60, 'plus', 2, function(ctx:any){
      ctx.showIcons('none', true);
    }); 

    var icon6 = this.addButton(this, icon5.x+10, icon5.y+90, 'game', 3, function(ctx:any){
      ctx.showIcons('none', true);
      ctx.showIcons('Igame', true);
    });
    
    var icon7 = this.addButton(this, icon6.x, icon6.y+120, 'bath', 3, function(ctx:any){
      ctx.showIcons('none', true);
      ctx.showIcons('Ibath', true);
    });
    
    var icon8 = this.addButton(this, icon7.x+5, icon7.y+120, 'medicine', 3, function(ctx:any){
      ctx.showIcons('none', true);
      ctx.showIcons('Imedicine', true);
    });    

    this.addButton(this, icon8.x-15, icon8.y+140, 'back', 1.5, function(ctx:any){
      ctx.showIcons('none', true);
    });   
      
      var text = this.add.text(120, 16, 'Felicidade:', { fontSize: '20px', color: '#000' } );// colocar essa fonte Dogica Pixel
      var text2 = this.add.text(text.x, text.y+25, 'Fome:', { fontSize: '20px', color: '#000' });
      this.add.text(text.x+400, text.y, 'Energia:', { fontSize: '20px', color: '#000' });
      this.add.text(text2.x+400, text2.y, 'Saúde:', { fontSize: '20px', color: '#000' }); 
  }
}