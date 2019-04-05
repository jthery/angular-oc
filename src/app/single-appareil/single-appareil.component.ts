import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  // ce sera les détails attribué à chaque appareil, qu'on va reprendre dans le template
  name: string = 'Appareil';
  status: string = 'Statut';

  constructor(private appareilService: AppareilService,
    // ActivatedRoute contient toutes les informations de la route, et donc du fragment /:id
    private route: ActivatedRoute) { }



    // Donc là, single-appareil.component prend le id qui lui est passer comme paramètre et l'utilise pour résoudre le name et le status de l'appareil en question
  ngOnInit() {
    // snapshot permet de contenir les paramètres de l'URL, on l'accompagne de params, afin de sélectionner l'id.
    const id = this.route.snapshot.params['id'];
    // utilisation de la méthode getAppareilById qu'on a créer dans appareil.service.ts
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;

  }

}
