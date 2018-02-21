import { Component, OnInit, Input } from '@angular/core';
import { HttpsService } from '../../services/https.service';
// import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  public loading = false;
  updateStudent : Object = {};
  students : Object [];

  firstName: string;
  lastName: string;
  username: string;
  age : number;
  phone : number;
  emergencyNo : number;
  fee : number;

  constructor( 
    private httpsService : HttpsService,
    // private spinnerService: Ng4LoadingSpinnerService
   ) { 
    this.students = [];
    this.updateStudent = {};
  }

  ngOnInit() {
    this.httpsService.get( '/students' ).subscribe( data => {
      
            this.students = data;
            this.loading = false;
        },error => {
            this.loading = false;
            alert('Something went wrong');
        }) 
  }

  addStudent(){

     this.loading = true;
        //  this.spinnerService.show();
    if( (this.firstName 
    && this.lastName 
    && this.username
    && this.age
    && this.phone
    && this.emergencyNo
    && this.fee)){
        this.httpsService.post( '/students', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          age : this.age,
          phone : this.phone,
          emergencyNo : this.emergencyNo,
          fee : this.fee,
        }).subscribe( data => {
            
            this.students.push(data);
            this.loading = false;
        },error => {
            this.loading = false;
            alert('Something went wrong');
        }) 
     } else {
      this.loading = false;
    }
  } 

  editStudent( student ){
    debugger
     this.loading = true;
        //  this.spinnerService.show();
  
      debugger
        this.httpsService.post( '/students/updateStudent', {
          firstName: 'student.firstName',
          lastName: "student.lastName",
          username: 'student.username',
          age : 'student.age',
          phone : 'student.phone',
          emergencyNo : 'student.emergencyNo',
          fee : 'student.fee',
          id : 'student._id',
        }).subscribe( data => {
            
            this.ngOnInit();
            this.loading = false;
        },error => {
            this.loading = false;
            alert('Something went wrong');
        }) 
  
  } 

}
