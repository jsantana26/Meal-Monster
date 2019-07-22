import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  route: string;

  constructor(private router: Router) {
    this.router.events.subscribe(val => {
      this.route = this.router.url;
    });
  }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    let input: string = form.value.search;
    this.router.navigate(['/recipes/search/', input]);
  }

}
