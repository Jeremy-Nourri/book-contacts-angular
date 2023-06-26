import { Component, Input, OnInit } from '@angular/core';
import { Profile } from '../models/profile.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']

})
export class CardComponent implements OnInit {

  @Input() singleContact!: Profile;


constructor(private router : Router) {}

  ngOnInit(): void {
  };

  onViewCard() {
    this.router.navigateByUrl(`card/${this.singleContact.id}`);
  }
}

