import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{
    private username:string;
    private client_id = '2d36a82141c8caad1205';
    private client_secret = '5ac8970db74c843e225a779cd12e405f88f2f115';

constructor(private _http: Http){
    console.log('Github service is ready...');
    this.username = 'JohnMorris4';
}

getUser(){
        return this._http.get('https://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }

getRepos(){
        return this._http.get('https://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }  

 updateUser(username:string){
     this.username = username;   
 }     

}