import Phaser from "phaser";

interface Player {
  skin: string;
}

class Kitchen extends Phaser.Scene {
  private player:Player;

  constructor(data: Player) {
    super("KitchenScene");
    this.player = data;
    this.init(data);
    
  }

  init(data:Player){
    this.player = data;
  }

  private playerLoads(player:Player): void {
    this.load.spritesheet(
      "player-stand",
      `/assets/player/${this.player.skin}/${this.player.skin}-stand-sheet.png`,
      { frameWidth: 128, frameHeight: 128, endFrame: 3 }
    );
  }

  preload() {
    this.load.image("background", "assets/backgrounds/kitchen.png");
    // this.load.atlas('stand-player','/assets/Level1Stand1-sheet.png', 'assets/Level1Stand1.json' );
    this.playerLoads(this.player);
  }

  create() {
    const { width, height } = this.scale;

    this.add.image(width/2, height/2, "background");
    var rectangle = this.add.rectangle(950,400,100,800,12895428);
    var rectangle = this.add.rectangle(50,400,100,800,12895428);
    this.anims.create({
      key: "player-stand",
      frames: this.anims.generateFrameNumbers("player-stand", {
        start: 0,
        end: 3,
        first: 3,
      }),
      frameRate: 4,
      repeat: -1,
    });

    const boom = this.add.sprite(width * 0.5, height * 0.6, "player-stand");
    boom.scale = 4;

    boom.anims.play("player-stand");
  }
}

export default Kitchen;
