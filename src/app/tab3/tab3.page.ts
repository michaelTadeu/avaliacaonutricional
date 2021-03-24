import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  opcao: any;
  proximaQuestao:number = 1;
  opcaoCorreta:string;
  constructor(public toastController: ToastController, public alertController: AlertController) {}


  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Parabéns!',
      message: 'Você concluiu nosso quiz!!',
      buttons: [
         {
          text: 'Ok',
          handler: () => {
            this.proximaQuestao = 1;
          }
        }
      ]
    });

    await alert.present();
  }

  async avisoAcertou() {
    const toast = await this.toastController.create({
      message: 'Certa Resposta !! :)',
      duration: 1000
    });
    toast.present();
  }

  async avisoErrou() {
    const toast = await this.toastController.create({
      message: 'Opa, opção errada, tente novamente.',
      duration: 2000
    });
    toast.present();
  }

  enviarResultado(opcaoMarcada,questao){
    switch (questao){
      case 'questao-1':
        this.opcaoCorreta = 'D';
        if (opcaoMarcada == this.opcaoCorreta){
          this.proximaQuestao = 2;
          this.avisoAcertou()
          this.opcao = null;
        }
        else{
          this.avisoErrou()
        }
        break;
        case 'questao-2':
          this.opcaoCorreta = 'D';
          if (opcaoMarcada == this.opcaoCorreta){
            this.proximaQuestao = 3;
            this.avisoAcertou()
            this.opcao = null;
          }
          else{
            this.avisoErrou()
          }
        break;
        case 'questao-3':
            this.opcaoCorreta = 'C';
            if (opcaoMarcada == this.opcaoCorreta){
              this.proximaQuestao = 4;
              this.avisoAcertou()
              this.opcao = null;
            }
            else{
              this.avisoErrou()
            }
        break;
        case 'questao-4':
            this.opcaoCorreta = 'A';
            if (opcaoMarcada == this.opcaoCorreta){
              this.proximaQuestao = 5;
              this.avisoAcertou()
              this.opcao = null;
            }
            else{
              this.avisoErrou()
            }
        break;
        case 'questao-5':
            this.opcaoCorreta = 'B';
            if (opcaoMarcada == this.opcaoCorreta){
              this.presentAlertConfirm();
              this.opcao = null;
            }
            else{
              this.avisoErrou()
            }
        break;
    }
  }
}
