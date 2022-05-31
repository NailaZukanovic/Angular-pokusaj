import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export abstract class StandardRestService<T> {
  constructor (protected http: HttpClient, protected apiUrl: string) {
      this.apiUrl = `${environment.apiUrl}/${apiUrl}`
  }

  read () {
    return this.http.get<T[]>(this.apiUrl,{
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  readOne (id: number) {
    return this.http.get<T>(`${this.apiUrl}/${id}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    })
  }

  create (data: T) {
    console.log(JSON.stringify(data));
    return this.http.post<number>(this.apiUrl, JSON.stringify(data),
    {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
    }
    )
  }

  update (id: number, data: T) {
    return this.http.put<null>(`${this.apiUrl}`, JSON.stringify(data),{
      headers: { 'content-type': 'application/json'},
    })
  }

  delete (id: number) {
    return this.http.delete<null>(`${this.apiUrl}/${id}`)
  }

  abstract get backUrl(): string;
  
}
