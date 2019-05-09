import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Config } from 'protractor';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  config : Config;
  itemsUrl: string;
  textfile: string;
  constructor(private itemService: ItemService) { }

  ngOnInit() {
  }

  showConfig(){
    this.itemService.getConfig()
    .subscribe((data: Config) => this.config = {
      itemsUrl: data['itemsUrl'],
      textfile: data['textfile']
    });
  }

}
