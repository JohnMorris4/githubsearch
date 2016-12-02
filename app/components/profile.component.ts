import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})

export class ProfileComponent { 
    user:any;
    repos:any[];
    username: string;
    
    constructor(private _githubService: GithubService){
        //Check to see if user is set
            this.user = false;


        //Change to user control 
        // this._githubService.getUser().subscribe(user => {
        //     this.user = user;
        // });
    

    
        // this._githubService.getRepos().subscribe(repos => {
        //     this.repos = repos;
        // });
    }
    searchUser(){

    	this._githubService.updateUser(this.username);
    	
    	this._githubService.getUser().subscribe(user => {
            this.user = user;
        });
    

    
        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }
}