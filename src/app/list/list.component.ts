import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']

})
export class ListComponent implements OnInit {

  contacts!: Profile[];

  constructor(private service: CardService) { }

  ngOnInit(): void {
    this.contacts = this.service.getAllCards();
  }

}
