import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/assignment';
import { HttpServiceService } from 'src/app/http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[HttpServiceService]
})
export class HomeComponent implements OnInit {
 
  private assigmntList:Assignment[];

  constructor(private _httpService: HttpServiceService) { }

  ngOnInit() {
    this._httpService.getAssignmentList().subscribe(clientData => this.assigmntList = clientData);
  }


}
