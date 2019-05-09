import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemUrl = 'assets/config.json';

  getConfig(){
    return this.http.get(this.itemUrl);
  }

  constructor(private http: HttpClient) { }
}
