import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { Profile } from '../models/profile.model';
import { CardService } from '../services/card.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contactForm!: FormGroup;
  cardPreview$!: Observable<Profile>;
  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private service: CardService,
    private router: Router
  ) {  }

  ngOnInit(): void {

    // Regex to check if the user inserts URL
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;

    this.contactForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      mobile: [null, [Validators.required]],
      email: [null, [Validators.required]],
      status: [null, [Validators.required]],
      picture: ["", {
        validators: [Validators.required, Validators.pattern(this.urlRegex)],
        updateOn: 'blur'
      }]
    });

    this.cardPreview$ = this.contactForm.valueChanges.pipe(
      map(formValue => ({
        firstName: formValue.firstName,
        lastName: formValue.lastName,
        mobile: formValue.mobile,
        email: formValue.email,
        status: formValue.status,
        picture: formValue.picture,
        id: this.service.getNexId()
      })
      )
    )
  }

  onSubmitForm() {
    this.service.addNewCard(this.contactForm.value);
    this.router.navigateByUrl("");
  }
}
