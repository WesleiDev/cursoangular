import { Injectable, LOCALE_ID } from '@angular/core';

@Injectable()
export class SettingsService {

  constructor() { }

  getLocale(){
    return 'pt-BR';
  }

}
