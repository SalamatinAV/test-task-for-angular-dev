import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GithubService {
  constructor(private http: HttpClient) {}

  public getRepos(userName: string) {
    return this.http.get(`https://api.github.com/users/${userName}/repos`);
  }
}
