import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';


export class CareerFair {
  constructor(
    private careerFairID : string,
    private name:string,
    private venue:string,
    private date:string){}
}

export class Companies {
  constructor(
    private companyname: string,
   ) { }
}

export class Attendee {
  constructor(
    public id: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public streetName: string,
    public city: string,
    public state: string,
    public zipCode: string,
    public password: string
  ) { }
}

export class AttendeeProfile {
  constructor(
    public major: string,
    public minor: string,
    public totalGPA: string,
    public bio: string,
    public certifications: string,
    public languages: string,
    public degree: string
  ) { }
}

export class ProfileViewModel {
  constructor(
    public attendee: Attendee,
    public attendeeProfile: AttendeeProfile
  ) { }
}


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient : HttpClient) { }


  getCareerFair(){
    console.log("Test Call");
    return this.httpClient.get<CareerFair[]>('http://localhost:8080/careerfairs/');
  }


  getCompanies() {
    console.log("Test Call");
    return this.httpClient.get<Companies[]>('http://localhost:8080/companies/');
  }


    // AUDRATODO -- the URL is hard-coded with "4" --- need to put the ID of the attendee here via Cookie
    addAttendeeProfile(FormGroup: FormGroup): Observable<any> {
      return this.httpClient.post<Attendee>('http://localhost:8080/attendees/4/profile',FormGroup.value);
      }

    // AUDRATODO -- the URL is hard-coded with "4" --- need to put the ID of the attendee here via Cookie
    getProfileViewModel(): Observable<ProfileViewModel> {
      return this.httpClient.get<ProfileViewModel>('http://localhost:8080/attendees/4/profile');
  
    }
  

}
