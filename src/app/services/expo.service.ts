import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Expo } from '../models/expo';
import { Route } from '../utils/route';
import { StandardRestService } from './standard-rest';

@Injectable({
  providedIn: 'root'
})
export class ExpoService extends StandardRestService<Expo> {

  constructor(
    protected override http: HttpClient
  ) {
    super(http, 'Expo')
  }

  backUrl = Route.EXPO_LIST

  read(): Observable<Expo[]> {
    return of(
      [
        {
          id: 1,
          registrationNumber: '1',
          city: 'Novi Sad',
          address: 'Jevrejska 53',
        },
        {
          id: 2,
          registrationNumber: '2',
          city: 'Beograd',
          address: 'Ruzveltova 12',
        },
        {
          id: 3,
          registrationNumber: '3',
          city: 'Zrenjanin',
          address: 'Mike Antica 24',
        }
      ]
    )
  }

  readOne(id: number) {
    return of(
      {
        id: 1,
        registrationNumber: '1',
        city: 'Novi Sad',
        address: 'Jevrejska 53',
      }
    )
  }
}
