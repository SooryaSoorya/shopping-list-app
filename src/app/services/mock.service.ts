import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {
  mockRequest<T>(dataToReturn: T, timeToWait = 1000): Observable<T> {
    const request = new ReplaySubject<T>(1);

    setTimeout(() => {
      request.next(dataToReturn);
      request.complete();
    }, timeToWait);

    return request;
  }
}
