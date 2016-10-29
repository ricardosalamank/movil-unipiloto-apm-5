import {Component, OnInit} from '@angular/core';
import { User } from '../model/user';
import {UserService} from "../service/user.service";
import {Router} from "@angular/router";

@Component({
    selector: 'user-list-app',
    templateUrl: 'app/templates/user-list.html',
    providers: [UserService]
})
export class UserListComponent implements OnInit {
    title: string = "los usuarios";

    selected: User;

    users: User[];

    constructor(private router: Router, private userService: UserService) {

    }

    getUsers() {
        this.userService.getUsers().then(users => this.users = users);
    }

    ngOnInit(): void {
        this.getUsers();
    }


}
