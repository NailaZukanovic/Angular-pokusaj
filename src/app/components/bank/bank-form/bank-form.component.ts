import { Component } from '@angular/core';
import { BankService } from 'src/app/services/bank.service';
import { ClientService } from 'src/app/services/client.service';
import { ExpoService } from 'src/app/services/expo.service';
import { FormConfig, FormStyle } from 'src/app/utils/form';

@Component({
  selector: 'app-bank-form',
  template: `<app-form title="Bank Form" [config]="config" [style]="style" [service]="bankService"></app-form>`
})
export class BankFormComponent {

  constructor(
    public bankService: BankService,
    public clientService: ClientService,
    public expoService: ExpoService
  ) { }

  pending = false;
  config: FormConfig = {
    ClientId: {
      validation: 'positive-integer'
    },
    ExpoId: {
      validation: 'positive-integer'
    },
    AccountType: {
      validation: 'positive-integer',
    },
    CurrencyType: {
      validation: 'positive-integer',
    },
    Balance: {
      validation: 'positive-integer'
    }
  }
  style: FormStyle = {
    width: '500px',
    'margin-top': '200px'
  }

}
