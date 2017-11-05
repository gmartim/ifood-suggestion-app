import { Component, OnInit } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ifood-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  healthy: boolean;

  version: string;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.healthy = false;

    this.httpClient
      .get(`/ifood-suggestion-api/actuator/health`)
      .subscribe(health => {
        if (health['status'] === 'UP') {
          this.healthy = true;
        }
      });

    this.version = 'v0.1';
  }
}
