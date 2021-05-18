import Phaser from 'phaser';
import config from './config';
import Cadastro from './scenes/Cadastro';
import GameScene from './scenes/Game';
import Login from './scenes/Login';
import UIScene from './scenes/UIScene';

const game = new Phaser.Game(
  Object.assign(config, {
    scene: [Login, UIScene]
   // scene: [Cadastro]
  })
);

