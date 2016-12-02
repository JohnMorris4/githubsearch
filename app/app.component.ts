import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
    selector: 'my-app',
    template: `
    <nav class="navbar navbar-light bg-faded">
    <div class="container">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Github Search</a>
    </div>  
      <ul class="nav navbar-nav">
        
      </ul>
    </div>  
    </nav>

    <br>
    <div class="container"> 
    <profile></profile>
    </div>`,
    providers: [GithubService]
})
export class AppComponent { }
