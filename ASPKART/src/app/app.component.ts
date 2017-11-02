import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DropdownService } from './service/dropdown.service';

import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
}
