import { Component } from '@angular/core';
import AFRIKA from '../app/data/Afrika.json';
import ASIA from '../app/data/Asia.json';
import EUROPA from '../app/data/Europa.json';
import SUDAMERIKA from '../app/data/Sudamerika.json';
import { Tier } from './tierInterface';
import { TiereContinent } from './tierInterface';

@Component({
  selector: 'ne4-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  afrikaData: TiereContinent = AFRIKA;
  asiaData: TiereContinent = ASIA;
  europaData: TiereContinent = EUROPA;
  sudamerikaData: TiereContinent = SUDAMERIKA;

  selectedContinentData: TiereContinent = AFRIKA;
  continentName: string = '';

  newTierName: string = '';
  
  // constructor() {
    // this.loadData();
  // }

  // loadData() {
  //   this.afrikaData = AFRIKA;
  //   this.asiaData = ASIA;
  //   this.europaData = EUROPA;
  //   this.sudamerikaData = SUDAMERIKA;
  // }

  selectContinent() {
    let selectContinentName = this.continentName;
    switch(selectContinentName) {
      case 'Afrika':
        this.selectedContinentData = this.afrikaData;
        break;
      case 'Asia':
        this.selectedContinentData = this.asiaData;
        break;
      case 'Europa':
        this.selectedContinentData = this.europaData;
        break;
      case 'Sudamerika':
        this.selectedContinentData = this.sudamerikaData;
        break;
      default:
        console.log('Falsche Eingabe!');
        return;
    }
  }

  addNewTier(continent: string) {
    let data: TiereContinent;
    if (this.newTierName) {
      const newTier: Tier = { name: this.newTierName };
      this.selectedContinentData.tiere.push(newTier);
      this.newTierName = '';
    }
  }
  // addNewTier(continent: string) {
  //   let data: TiereContinent;

  //   switch(continent) {
  //     case 'Afrika':
  //       data = this.afrikaData;
  //       break;
  //     case 'Asia':
  //       data = this.asiaData;
  //       break;
  //     case 'Europa':
  //       data = this.europaData;
  //       break;
  //     case 'Sudamerika':
  //       data = this.sudamerikaData;
  //       break;
  //     default:
  //       console.log('Falsche Eingabe!');
  //       return;
  //   }
  //   if (this.newTierName) {
  //     const newTier: Tier = { name: this.newTierName };
  //     data.tiere.push(newTier);
  //     this.newTierName = '';
  //   }
  // }

  downloadData(continent: string) {
    const fileName = `${continent}_data.json`
    const fileContent = JSON.stringify(this.selectedContinentData, null, 2);
    const blob = new Blob([fileContent], {type: 'application/json'});
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    link.click();

    window.URL.revokeObjectURL(url);
  }

  // downloadData(continent: string) {
  //   let data: TiereContinent;

  //   switch(continent) {
  //     case 'Afrika':
  //       data = this.afrikaData;
  //       break;
  //     case 'Asia':
  //       data = this.asiaData;
  //       break;
  //     case 'Europa':
  //       data = this.europaData;
  //       break;
  //     case 'Sudamerika':
  //       data = this.sudamerikaData;
  //       break;
  //     default:
  //       console.log('Falsche Eingabe!');
  //       return;
  //   }
  //   const fileName = `${continent}_data.json`
  //   const fileContent = JSON.stringify(data, null, 2);
  //   const blob = new Blob([fileContent], {type: 'application/json'});
  //   const url = window.URL.createObjectURL(blob);

  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = fileName;
  //   link.click();

  //   window.URL.revokeObjectURL(url);
  // }


  // generateContinentSection(continentData: TiereContinent, continentName: string): string {
  //   if (!continentData) {
  //     return '';
  //   }
  //   return `
  //     <div>
  //       <h2>${continentName} Daten</h2>
  //       <ul>
  //         <li *ngFor="let tier of ${continentName.toLowerCase()}Data.tiere">{{tier.name}}</li>
  //       </ul>
  //       <form (submit)="addNewTier('${continentName}')">
  //         Neues Tier: <input [(ngModel)]="newTierName" name="newTierName">
  //         <button type="submit">Hinzufügen</button>
  //         <button (click)="downloadData('${continentName}')">Daten herunterladen</button>
  //       </form>
  //     </div>
  //     <hr>
  //   `;
  // }
}
