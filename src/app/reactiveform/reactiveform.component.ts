import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  login = new FormControl('yy', [Validators.required, Validators.minLength(3)])
  pwd = new FormControl('')
  fg = new FormGroup({
    cin: new FormControl('', [Validators.pattern('[0-9]*')]),
    name: new FormControl('', [Validators.required, Validators.minLength(3)]),
    surname: new FormControl('', [Validators.minLength(3)]),
    email: new FormControl('', [Validators.email])

  })
  showLogin() {
    console.log(this.login)
  }
  afficheForm() {
    console.log(this.fg)
  }
  get cinstatus() {
    return this.fg.get('cin')
  }
  constructor(private fb: FormBuilder) {
  }
  formb = this.fb.group({
    age: ['', [Validators.required]],
    adresse: ['', [Validators.minLength(3)]]
  })
}
