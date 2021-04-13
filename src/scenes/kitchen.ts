import Phaser from 'phaser'

export default class Kitchen extends Phaser.Scene {

    constructor() {
        super('KitchenScene');
      }
    
      preload() {
        this.load.image('background', 'assets/backgrounds/kitchen.png');
        this.load.atlas('stand-player','/assets/Level1Stand1-sheet.png', 'assets/Level1Stand1.json' );
        this.load.spritesheet("player", "/assets/Level1Stand1-sheet.png", { frameWidth: 128, frameHeight: 128, endFrame: 3 });
      } 
       
      create() {
        const width = this.scale.width
        const height = this.scale.height
        this.add.image(0, 0, 'background').setOrigin(0, 0);
        this.anims.create({
          key: 'stand-player',
          frames: this.anims.generateFrameNumbers('player', { start: 0, end: 3, first: 3 }),
          frameRate: 4,
          repeat: -1
        })

        const boom = this.add.sprite(width*0.5, height*0.6, 'player')
        boom.scale = 4;

        boom.anims.play('stand-player')
      }

}

