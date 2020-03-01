import {HttpClient} from '@angular/common/http';
import {Observable, ReplaySubject} from 'rxjs';
import {ObservableUtils} from '../utils/ObservableUtils';

export abstract class CacheRetriever<Req, Res> {
  cache: Map<string, ReplaySubject<Res>>;
  constructor(protected httpClient: HttpClient) {
    this.cache = new Map<string, ReplaySubject<Res>>();
  }

  doRequest(url: string): Observable<Res> {
    console.log('url', url);
    console.log('hasKey', this.hasKey(url));
    if (this.hasKey(url)) {
      console.log(this.getCache(url));
      return this.getCache(url);
    } else {
      const res$ = this.httpClient.get<Res>(url);
      this.setCache(url, ObservableUtils.observableToReplaySubject(res$));
      return this.getCache(url);
    }
  }

  getCache(key: string): Observable<Res> {
    return this.cache.get(key);
  }

  setCache(key: string, value: ReplaySubject<Res>) {
    this.cache.set(key, value);
  }

  hasKey(key: string): boolean {
    return this.cache.has(key);
  }
}
