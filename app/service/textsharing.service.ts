import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from '../../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class TextsharingService {

  // private registerURL = 'http://localhost:8888/textsharing/text-sharing-php/register.php';
  // private pasteURL = 'http://localhost:8888/textsharing/text-sharing-php/paste.php';
  // private detailURL = 'http://localhost:8888/textsharing/text-sharing-php/detail.php';
  // private updateURL = 'http://localhost:8888/textsharing/text-sharing-php/update.php';

  private registerURL = 'https://pcphat.000webhostapp.com/textsharing/register.php';
  private pasteURL = 'https://pcphat.000webhostapp.com/textsharing/paste.php';
  private detailURL = 'https://pcphat.000webhostapp.com/textsharing/detail.php';
  private updateURL = 'https://pcphat.000webhostapp.com/textsharing/update.php';


  constructor( private http: HttpClient ) { }

  addGuest (registerData): Observable<any> {
    return this.http.post(this.registerURL, registerData);
  }

  addPaste (pasteData): Observable<any> {
    return this.http.post(this.pasteURL, pasteData);
  }

  getDetail (id): Observable<any> {
    return this.http.get(this.detailURL + '?id=' + id);
  }
  
  updatePaste (id, language, content): Observable<any> {
    let updateFormData: {} = {
      "id" : id,
      "language" : language,
      "content"  : content
    } ;
    console.log(updateFormData);
    return this.http.post(this.updateURL, updateFormData);
  }

}
