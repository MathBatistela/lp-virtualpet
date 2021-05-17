import Phaser from 'phaser';
import config from './config';
import GameScene from './scenes/Game';
import UIScene from './scenes/UIScene';

new Phaser.Game(
  Object.assign(config, {
    scene: [GameScene,UIScene]
    // scene: [UIScene]
  })
);
