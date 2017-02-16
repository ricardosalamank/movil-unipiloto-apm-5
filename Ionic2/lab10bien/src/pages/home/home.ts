import { Component } from '@angular/core';
import { Dialogs } from 'ionic-native';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  loadAlert() {
    Dialogs.alert('este es un mensaje con ventana nativa', 'Alert!', 'Entendido');
  }

  loadConfirm() {
    Dialogs.confirm('Mensaje que requiere confirmacion', 'COnfirm', ['Entendido', 'Cancelar'])
      .then((options) => console.log(options), (error) => console.log(error));
  }

  loadPrompt() {
    Dialogs.prompt('Ventana con prompt', 'Prompt', ['Aceptar', 'Cancelar'], 'Ingrese id')
      .then(results => console.log(results.buttonIndex, results.input1), error => console.log(error));
  }
}
