import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class CredentialsService {
  private url = environment.apiUrl + "/api/pub/";
  constructor(private http: HttpClient) {}

  public postLogin(credential): Observable<any> {
    return this.http.post(this.url + "login", credential);
  }

  public postRegistration(credential) {
    return this.http.post(this.url + "registration", credential);
  }
}