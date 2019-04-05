// importation, car on utilise l'observable Subject
import { Subject } from 'rxjs/Subject';

export class AppareilService {

  //
  appareilsSubject = new Subject<any[]>();

    // Tableau qui comprend le status et le nom des appareils
    // le "private" a été ajouté pour l'utilisation de l'observable Subject
  private appareils = [
        {
          id: 1,
          name: 'Machine à laver',
          status: 'éteint'
        },
        {
          id: 2,
          name: 'Télévision',
          status: 'allumé'
        },
        {
          id: 3,
          name: 'Ordinateur',
          status: 'éteint'
        }
      ];


      // méthode qui va nous permettre d'émettre depuis le subject
      emitAppareilSubject() {
        this.appareilsSubject.next(this.appareils.slice());
      }

      // permettre de retourner l'objet appareil par son identifiant
      // à savoir que le find permet d'aller chercher l'id qui est dans l'array appareils
      getAppareilById(id: number) {
        const appareil = this.appareils.find(
          (s) => {
            return s.id === id;
          }
        );
        return appareil;
      }

      // afin d'éteindre d'allumer tous les appareils en un coup
      switchOnAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'allumé';
          // émettre le subject
          this.emitAppareilSubject();
        }
      }
    
      switchOffAll() {
        for(let appareil of this.appareils) {
          appareil.status = 'éteint';
          // émettre le subject
          this.emitAppareilSubject();
        }
      }

      // afin de pouvoir éteindre et allumer les appareils individuellement
      switchOnOne(index: number) {
        this.appareils[index].status = 'allumé';
        // émettre le subject
        this.emitAppareilSubject();
      }

      switchOffOne(index: number) {
        this.appareils[index].status = 'éteint';
        // émettre le subject
        this.emitAppareilSubject();
      }

}