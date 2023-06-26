import { Injectable } from '@angular/core';
import { Profile } from '../models/profile.model';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor() { }


  listOfContacts: Profile[] = [
    {
      id: 1,
      firstName: "Barack",
      lastName: "Obama",
      mobile: "0700000000",
      email: "barack.obama@example.com",
      picture: "https://is4-ssl.mzstatic.com/image/thumb/Purple114/v4/59/f5/03/59f503fd-620e-c4c4-954b-3f644e7cc6a3/source/256x256bb.jpg",
      status: "provider",
    },
    {
      id: 2,
      firstName: "Donald",
      lastName: "Trump",
      mobile: "0700000000",
      email: "donald@example.com",
      picture: "https://cms.groupeditors.com/img/ghnw20160922-102313-150.jpg?w=400&h=400&mode=crop",
      status: "customer",
    },
    {
      id: 3,
      firstName: "Joe",
      lastName: "Biden",
      mobile: "0700000000",
      email: "biden@example.com",
      picture: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/wyecyeryzewkm3ksffgu",
      status: "customer",
    },
    {
      id: 4,
      firstName: "Kamala",
      lastName: "Harris",
      mobile: "0700000000",
      email: "kamal@example.com",
      picture: "https://www.womenshistory.org/sites/default/files/styles/4_up_card/public/images/2021-04/Kamala-Harris-Square.png?itok=5woy-FPE",
      status: "provider",
    },
    {
      id: 5,
      firstName: "Nancy",
      lastName: "Pelosi",
      mobile: "0700000000",
      email: "nancy@example.com",
      picture: "https://www.philanthropyforum.org/storage/nancy_pelosi.png",
      status: "provider",
    },
    {
      id: 6,
      firstName: "Alexandria",
      lastName: "Ocasio-Cortez",
      mobile: "0700000000",
      email: "alexandria@example.com",
      picture: "https://pbs.twimg.com/profile_images/1665407155405479938/idA8g3l-_400x400.jpg",
      status: "customer",
    }
  ]

  getAllCards(): Profile[] {
    return this.listOfContacts;
  }

  getCardById(cardId: number): Profile {
    const card = this.listOfContacts.find(card => card.id === cardId);
    if (card) {
      return card;
    }
    throw new Error(`Card with id ${cardId} not found`);
  }

  getNexId(): number {
    const lastId = this.listOfContacts.length;
    return lastId + 1;
  }

  addNewCard(formValue: { firstName: string, lastName: string, mobile: string, email: string, picture: string, status: string }): void {
    const singleCard = {
        ...formValue,
        id: this.getNexId(),
    };
    this.listOfContacts.push(singleCard)
    console.log(this.listOfContacts);

  }

}
