import { Component, Input, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {
  // appareilName = 'Machine à laver';
  @Input() appareilName: string;
  // appareilStatus = 'éteint';
  @Input() appareilStatus: string;
  // pour faire communiquer les components entre eux (ex: cela va nous permettre d'éteindre ou d'allumer individuellement nos apppareils)
  @Input() indexOfAppareil: number;
  // pour faire afficher dans le template nos détails d'appareil
  @Input() id: number;

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }
  
  getStatus () {
    return this.appareilStatus;
  }

  // Pour faire apparaitre en vert ou rouge les appareils en fonction de leurs status
  getColor() {
    if(this.appareilStatus === 'allumé') {
      return 'green';
    } else if(this.appareilStatus === 'éteint') {
      return 'red';
    }
  }

  onSwitchOn() {
    this.appareilService.switchOnOne(this.indexOfAppareil);
  }

  onSwitchOff() { 
    this.appareilService.switchOffOne(this.indexOfAppareil);
  }

}
