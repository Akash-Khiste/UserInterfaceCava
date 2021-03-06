import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormGroup, FormControl } from '@angular/forms';
import { AttendeecareerfairComponent } from '../attendeecareerfair/attendeecareerfair.component';


export class CareerFair {
  constructor(
    private careerFairID: string,
    private name: string,
    private venue: string,
    private date: string) { }
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

export class RegisteredAttendeesViewModel {
  constructor(
    public attendeeProfileViewModel: ProfileViewModel[]
  ) { }
}

export class Employer {
  constructor(
    public id: string,
    public companyID: string,
    public companyName: string,
    public email: string,
    public password: string) { }
}

export class Administrator {
  constructor(
    public id: string,
    public employeeID: string,
    public firstName: string,
    public lastName: string,
    public email: string,
    public password: string,
  ) { }
}

export class CompanyInformation {
  constructor(
    public careerFairId : string,
    public id: string,
    public companyname: string,
    public domain: string,
    public positions: string
  ) { }
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {


  constructor(private httpClient: HttpClient) { }


  getCareerFairs() {
   return this.httpClient.get<CareerFair[]>('http://localhost:8080/careerfairs/');
  }



  getCompanies(careerFairId: string) {
    //console.log(careerFairId);
    return this.httpClient.get<Companies[]>('http://localhost:8080/careerfair/' + careerFairId + '/companies');
  }


  // method for getting company information for a career fair
  getCompanyInformation(careerFairId: string) {
    console.log('id mila kya '+careerFairId);
    return this.httpClient.get<CompanyInformation[]>('http://localhost:8080/careerfair/careerfairdetails/' + careerFairId + '/companyinformationdisplay');
    
  }

  addAttendeeProfile(formGroup: FormGroup, userId: string): Observable<any> {
    return this.httpClient.post<Attendee>('http://localhost:8080/attendees/' + userId + '/profile', formGroup.value);
  }
  registerAttendee(userId: string, careerFairId: string): Observable<any> {
    return this.httpClient.post<Attendee>('http://localhost:8080/careerfair/register/'+ careerFairId, userId);
  }
  RegisterdIdEmployeeViewModel(userId: string): Observable<any> {
    return this.httpClient.post<CareerFair>('http://localhost:8080/attendeecareerfair/' + userId , {});
  }

  getProfileViewModel(userId: string): Observable<ProfileViewModel> {
    return this.httpClient.get<ProfileViewModel>('http://localhost:8080/attendees/' + userId + '/profile');
  }

  employerLogin(formGroup: FormGroup): Observable<Employer> {
    return this.httpClient.post<Employer>('http://localhost:8080/validateEmployer', formGroup.value);
  }

  attendeeLogin(formGroup: FormGroup): Observable<Attendee> {
    return this.httpClient.post<Attendee>('http://localhost:8080/validateAttendee', formGroup.value);
  }

  adminLogin(formGroup: FormGroup): Observable<Administrator> {
    return this.httpClient.post<Administrator>('http://localhost:8080/validateAdministrator', formGroup.value);
  }

  getRegisteredAttendeeViewModel(careerFairId: string): Observable<RegisteredAttendeesViewModel> {
    return this.httpClient.get<RegisteredAttendeesViewModel>('http://localhost:8080/careerfair/careerfairdetails/' + careerFairId + '/attendees');
  }



}
