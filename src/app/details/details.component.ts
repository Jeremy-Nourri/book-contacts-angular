import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../services/card.service';
import { Profile } from '../models/profile.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  @Input() contact!: Profile;

  constructor(private service: CardService,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      const cardId = +this.route.snapshot.params['id'];
      this.contact = this.service.getCardById(cardId);
    }

}
