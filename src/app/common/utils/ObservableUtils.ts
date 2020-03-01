import {Observable, ReplaySubject} from 'rxjs';

export namespace ObservableUtils {
  export function observableToReplaySubject<T = any>(observable: Observable<T>): ReplaySubject<T> {
    const subject = new ReplaySubject<T>();
    observable.subscribe(
      (x: T) => {
        subject.next(x);
      },
      (err: any) => {
        subject.error(err);
      },
      () => {
        subject.complete();
      }
    );
    return subject;
  }
}
