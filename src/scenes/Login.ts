import Phaser from "phaser";
import { Pet, User } from "../apiInterface";

export default class Login extends Phaser.Scene {
  constructor() {
    super("login");
  }
  preload() {
    // Pet.getPet(1).then((data) => {
    //   this.scene.start("ui", data.vpet);
    //   console.log(data);
    // })
    this.load.image("pic", "assets/backgrounds/login.png");
    this.load.html("nameform", "assets/text/loginform.html");
  }

  create() {
    const { width, height } = this.scale;
    this.add.image(width / 2, height / 2, "pic");
    var text = this.add.text(190, 50, "Bem-vindo ao virtual-pet", {
      color: "white",
      fontFamily: "Dogica Pixel",
      fontSize: "50px ",
    });

    var element = this.add.dom(width / 2, 600).createFromCache("nameform");

    element.setPerspective(800);

    element.addListener("click");

    element.on("click", () => {
      console.log(element)
      var inputUsername = element.getChildByName("email");
      var inputPassword = element.getChildByName("password");
      if (inputUsername.value !== "" && inputPassword.value !== "") {
        User.login({
          email: inputUsername.value,
          password: inputPassword.value,
        }).then((res) => {
          User.getUser(res.id).then((users) => {
            Pet.getPet(users.user.pets[0].id).then((vpets) => {
              element.removeListener("click");
              this.tweens.add({
                targets: element.rotate3d,
                x: 1,
                w: 90,
                duration: 3000,
                ease: "Power3",
              });
              this.tweens.add({
                targets: element,
                scaleX: 2,
                scaleY: 2,
                y: 700,
                duration: 3000,
                ease: "Power3",
                onComplete: () => {
                  element.setVisible(false);
                  this.scene.start("ui", vpets.vpet);
                },
              });
            });
          });
        });
      } else {
        this.tweens.add({
          targets: text,
          alpha: 0.1,
          duration: 200,
          ease: "Power3",
          yoyo: true,
        });
      }
    });
    this.tweens.add({
      targets: element,
      y: 300,
      duration: 3000,
      ease: "Power3",
    });
  }
}
