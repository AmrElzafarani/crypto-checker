import { Component } from '@angular/core';
import { CurrencyService } from './services/currency.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crypto-checker';
  selectedCurrency: string = 'EGP';

  constructor(private currency: CurrencyService) { }

  sendCurrency(event: string) {
    console.log(event);
    this.currency.setCurrency(event)
  }
}
