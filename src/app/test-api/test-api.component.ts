import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { Subject, of } from 'rxjs';
import { catchError, tap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-test-api',
  templateUrl: './test-api.component.html',
  styleUrls: ['./test-api.component.css']
})
export class TestApiComponent implements OnInit {

  unsubscribe$: Subject<null> = new Subject();

  constructor(private backendService: BackendService) { }

  ngOnInit() {
  }
  ping() {
    this.backendService.ping()
      .pipe(
        catchError(err => {
          return of(null);
        }),
        tap((result) => {
          if (result) console.log(result);
        }),
        takeUntil(this.unsubscribe$)
      )
      .subscribe(_ => { })

  }
  protected() {
    this.backendService.protected()
      .pipe(
        catchError(err => {
          return of(null);
        }),
        tap((result) => {
          if (result) console.log(result);
        })
        ,
        takeUntil(this.unsubscribe$)
      ).subscribe(_ => { });
  }



}
