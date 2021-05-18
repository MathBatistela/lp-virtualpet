import Phaser from "phaser";


export default class Login extends Phaser.Scene{
    constructor() {
        super('login');
      }
        preload ()
        {
            this.load.html('nameform', 'assets/text/loginform.html');
            this.load.image('pic', 'assets/backgrounds/login.png');
        }
        
        create ()
        {
          const { width, height } = this.scale;
          this.add.image(width/2, height/2, 'pic');
          var text = this.add.text(190, 50, 'Welcome to virtual-pet', { color: 'white', fontFamily: 'Dogica Pixel', fontSize: '32px '});
        
            var element = this.add.dom(width/2, 600).createFromCache('nameform');
        
            element.setPerspective(800);
        
            element.addListener('click');
        
            element.on('click', function (event:any) {
                
                if (event.target.name === 'loginButton')
                {
                    var inputUsername = event.getChildByName('username');
                    var inputPassword = event.getChildByName('password');
        
                    //  Have they entered anything?
                    if (inputUsername.value !== '' && inputPassword.value !== '')
                    {
                        //  Turn off the click events
                        event.removeListener('click');
        
                        //  Tween the login form out
                        event.scene.tweens.add({ targets: element.rotate3d, x: 1, w: 90, duration: 3000, ease: 'Power3' });
        
                        event.scene.tweens.add({ targets: element, scaleX: 2, scaleY: 2, y: 700, duration: 3000, ease: 'Power3',
                            onComplete: function ()
                            {
                                element.setVisible(false);
                            }
                        });
        
                        //  Populate the text with whatever they typed in as the username!
                        text.setText('Welcome ' + inputUsername.value);
                    }
                    else
                    {
                        //  Flash the prompt
                        event.scene.tweens.add({ targets: text, alpha: 0.1, duration: 200, ease: 'Power3', yoyo: true });
                    }
                }
        
            });
        
            this.tweens.add({
                targets: element,
                y: 300,
                duration: 3000,
                ease: 'Power3'
            });
        }
}

