import { Component, OnInit } from '@angular/core';
import { DropdownService } from '../service/dropdown.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  categorys: string[];
  constructor(private dropdownService: DropdownService, public auth: AuthService,
    private router: Router) {
    auth.handleAuthentication();
  }
  ngOnInit(): void {
    this.dropdownService.getCategorys().then(categorys => this.categorys = categorys);

  }


  gotoProducts(category: string): void {

    this.router.navigate(['/products'], { queryParams: { category: category } });

  }


}