import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'app-lazy-component',
  templateUrl: './lazy-component.component.html',
  styleUrls: ['./lazy-component.component.scss']
})
export class LazyComponent implements OnInit {
  @Input() source: string;

  configUrl = 'assets/config.json';
  response: {};
  isLoading = true;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get(this.configUrl)
      .pipe(
        delay(1000)
      )
      .subscribe((response) => {
        this.isLoading = false;
        this.response = response;
      });
  }

}
