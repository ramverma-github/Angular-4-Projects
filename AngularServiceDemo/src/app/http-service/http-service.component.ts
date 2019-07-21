import { Component, OnInit } from '@angular/core';
import { HttpClientService } from 'src/app/http-client.service';
import { IClient } from 'src/app/iclient';

@Component({
  selector: 'app-root',
  templateUrl: './http-service.component.html',
  styleUrls: ['./http-service.component.css'],
  providers: [HttpClientService]
})
export class HttpServiceComponent implements OnInit {

  private clientList:IClient[];

  constructor(private _httpService: HttpClientService) { }

  ngOnInit() {
   this._httpService.getClient().subscribe(clientData => this.clientList = clientData);
  }

}
