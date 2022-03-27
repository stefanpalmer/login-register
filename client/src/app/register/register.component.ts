import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model: any = {}

  constructor(private accountService: AccountService, 
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.accountService.register(this.model).subscribe(response => {
      this.router.navigate(['../register-confirm'], {relativeTo: this.route});
    }, error => {
      console.log(error);
    })
  }

  cancel() {
    this.router.navigate(['../home'], {relativeTo: this.route});
  }

}
