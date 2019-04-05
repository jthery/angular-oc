//  à chaque observable sera associé un observeur, qui est un block de code qui sera exécuté à chaque fois que l'observable émettra une information
import { Component, OnInit, OnDestroy } from '@angular/core';
// pour avoir accés au observable
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
// pour avoir accés à la Subscription
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {


  // pour observer notre observable ci-dessous
  secondes: number;
  // pour éviter les bugs de comportement infinie
  counterSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    // observable : création du compteur
    const counter = Observable.interval(1000);
    // il faut observer le compteur pour  changer le nombre de secondes.
    // subscribe est une méthode qui permet de souscrire à une observable et de réagir à ces changements, il peut prendre jusqu'à trois arguments
    this.counterSubscription = counter.subscribe(
      //  le premier est celui qui reçoit les données
      (value) => {
        this.secondes = value;
    },
    // si il y a une erreur émise par l'observable
    (error) => {
      console.log('Uh-oh, an error occurred! : ' + error);
    },
    // si jamais l'observable est complétée
    () => {
      console.log('Observable complete!');
    });
  }

  // pour permettre de détruire la subscription pour éviter les comportements infinie
  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

}

