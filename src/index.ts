import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';
import KitchenScene from './scenes/Kitchen'
import UIScene from './scenes/UIScene';

new Phaser.Game(
  Object.assign(config, {
    //scene: [GameScene,KitchenScene,UIScene]
    scene: [UIScene]
  })
);
