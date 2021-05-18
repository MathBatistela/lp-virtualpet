import Phaser from 'phaser';
import { IPet } from './interfaces'

export default {
  type: Phaser.AUTO,
  parent: 'game',
  backgroundColor: '#F4894C',
  pixelArt: true,
  zoom: 5,
  dom: {
    createContainer: true
  },
  scale: {
    width: 1000,
    height: 600,
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  pet: null
};
