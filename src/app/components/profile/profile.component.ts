import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  currentUser: User;
  isDataLoaded: boolean;

  constructor(private userservice: UserService) { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser() {
      this.userservice.getCurrentUser().subscribe(data => {
        this.currentUser = data;
        this.isDataLoaded = true;
        sessionStorage.setItem("email", this.currentUser.email);
    });
  }
}
