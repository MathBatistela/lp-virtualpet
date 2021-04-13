import Phaser from 'phaser';
import config from './config';
// import GameScene from './scenes/Game';
import KitchenScene from './scenes/kitchen'

new Phaser.Game(
  Object.assign(config, {
    scene: [KitchenScene]
  })
);
