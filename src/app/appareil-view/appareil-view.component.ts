import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {
  isAuth = false;
  
  lastUpdate = new Date(); 

  appareils: any[];
  appareilSubscription: Subscription;

  //  ce tableau a été déplacé dans le service appareil
  // appareils = [
  //   {
  //     name: 'Machine à laver',
  //     status: 'éteint'
  //   },
  //   {
  //     name: 'Télévision',
  //     status: 'allumé'
  //   },
  //   {
  //     name: 'Ordinateur',
  //     status: 'éteint'
  //   }
  // ]

  // elles sont été transformé en un tableau (ci-dessu)
  // appareilOne = 'Machine à laver';
  // appareilTwo = 'Télévision';
  // appareilThree = 'Ordinateur';
  
  constructor(private appareilService: AppareilService) {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }


  ngOnInit() {
    this.appareilSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }


  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    if(confirm('Etes-vous sûr de vouloir éteindre tous vos appareils ?')) {
      this.appareilService.switchOffAll();
    } else {
      return null;
    }
  }

}
