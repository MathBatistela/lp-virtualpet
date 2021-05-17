import Phaser, { Input, NONE } from 'phaser';
import eventsCenter from '../eventsCenter';
import { IPet } from '../interfaces';
import { Pet } from '../apiInterface';
import Bedroom from './Bedroom';
import Kitchen from './Kitchen'

export default class UIScene extends Phaser.Scene {

  fundos:any;
  icons:any;
  private healthLabel!: Phaser.GameObjects.Text;
  private hungerLabel!: Phaser.GameObjects.Text;
  private happinessLabel!: Phaser.GameObjects.Text;
  private pet!:IPet;
  private actualScene!: string;

  public updateHealthLabel(value:string){
    this.healthLabel.text = `Saúde: ${value}`
  }

  public updateHungerLabel(value:string){
    this.hungerLabel.text = `Fome: ${value}`
  }

  public updateHappinessLabel(value:string){
    this.happinessLabel.text = `Felicidade: ${value}`
  }

  private addButton(ctx:any, x:any, y:any, image:any, scale:any, onClick:any){
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

  private showFundo(nome:string){
    for (const [key] of Object.entries(this.fundos)) {
      this.fundos[key].setVisible(false);
    }
    if(nome != 'none') this.fundos[nome].setVisible(true);
    this.showIcons('none', true);
  }

  private showIcons(nome:string, state:boolean){
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

  public switchScene(sceneKey:string){
    if (sceneKey != this.actualScene){
      Pet.getPet(this.pet.id).then((data) => {
        const sceneToChange = this.scene.get(this.actualScene);
        sceneToChange.scene.start(sceneKey,data.vpet);
        sceneToChange.scene.moveUp(this.scene.key);
        this.actualScene = sceneKey;
      })
    }
  }

  constructor() {
    super('ui');
    this.fundos = [];
    this.icons = [];
    
  }

  init(pet:IPet){
    this.pet = pet
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
    this.load.image('info', 'assets/icons/IconInfo.png');
    this.load.image('plus', 'assets/icons/IconPlus.png');
    this.load.image('game', 'assets/icons/IconGame.png');
    this.load.image('bath', 'assets/icons/IconBath.png');
    this.load.image('medicine', 'assets/icons/IconMedicine.png');
    this.load.image('back', 'assets/icons/IconBack.png');

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

  create() {
    
    this.add.rectangle(50,400,100,800,12895428);
    this.add.rectangle(950,400,100,800,12895428);

    this.scene.add('bedroom', Bedroom,false);
    this.scene.add('kitchen', Kitchen ,false);

    const { width, height } = this.scale;
    
    this.fundos['fundokitchen'] = this.add.sprite(width/2, height/2.7, 'kitchen');
    this.fundos['fundoBathroom'] = this.add.sprite(width/2, height/2, 'bathroom');
    this.fundos['fundoBedroom'] = this.add.sprite(width/2, height/2.7, 'bedroom');
    this.fundos['fundoPaisagem'] = this.add.sprite(width/2, height/2.7, 'paisagem').setScale(0.42);

    this.showFundo('none');

    // this.scene.run(this.pet.lastScene, this.pet);
    // const petScene = this.scene.get(this.pet.lastScene);
    // this.scene.moveDown(this.pet.lastScene)
    
    this.actualScene = this.pet.lastScene;
    
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
    ctx.switchScene('kitchen');
      
    // ctx.showFundo('fundokitchen');
      // ctx.showIcons('Fdrink', true);
      // ctx.showIcons('Fdrink2', true);     
     
    });

    var icon2 = this.addButton(this,icon1.x, icon1.y+100, 'food',3, function(ctx:any){
      ctx.switchScene('kitchen');
      // ctx.actualScene = "kitchen"
      // ctx.showIcons('Ibrocoli', true);
      // ctx.showIcons('Icarrot', true);
      // ctx.showIcons('Ibacon', true);      
      // ctx.showIcons('Ichicken', true); 
      // ctx.showIcons('Icake', true); 
      // ctx.showIcons('IiceCream', true); 
    });   

    var icon3 = this.addButton(this,icon2.x, icon2.y+120, 'sleep', 3, function(ctx:any){
      ctx.switchScene('bedroom')
      // ctx.actualScene = "bedroom"
    });
    
    var icon4 = this.addButton(this, icon3.x, icon3.y+120, 'affection', 3, function(ctx:any){
      ctx.showFundo('fundoPaisagem');
      ctx.showIcons('Iaffection', true);
    });

    this.addButton(this, icon4.x, icon4.y+120, 'info', 3, function(ctx:any){
      
    });    

    var icon5 = this.addButton(this, 950, 60, 'plus', 2, function(ctx:any){

    }); 

    var icon6 = this.addButton(this, icon5.x+10, icon5.y+90, 'game', 3, function(ctx:any){
      ctx.showIcons('Igame', true);
    });
    
    var icon7 = this.addButton(this, icon6.x, icon6.y+120, 'bath', 3, function(ctx:any){
      ctx.showIcons('Ibath', true);
    });
    
    var icon8 = this.addButton(this, icon7.x+5, icon7.y+120, 'medicine', 3, function(ctx:any){
      ctx.showIcons('Imedicine', true);
    });    

    this.addButton(this, icon8.x-15, icon8.y+140, 'back', 1.5, function(ctx:any){
      ctx.showFundo('fundokitchen');
    });   
      
    this.healthLabel = this.add.text(120, 16, 'Saúde: 0', { fontSize: '20px', color: '#000' } );// colocar essa fonte Dogica Pixel
    this.hungerLabel = this.add.text(this.healthLabel.x, this.healthLabel.y+25, 'Fome: 0', { fontSize: '20px', color: '#000' });
    this.happinessLabel=  this.add.text(this.healthLabel.x+400, this.healthLabel.y, 'Felicidade: 0', { fontSize: '20px', color: '#000' });

    eventsCenter.on('update-health', this.updateHealthLabel, this)
    eventsCenter.on('update-hunger', this.updateHungerLabel, this)
    eventsCenter.on('update-happiness', this.updateHappinessLabel, this)

      

    console.log(this.pet.id)
  
  }
}

