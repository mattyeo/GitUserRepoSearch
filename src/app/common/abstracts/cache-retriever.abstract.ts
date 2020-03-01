import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export abstract class CacheRetriever<Req, Res> {
  cache: Map<string, Observable<Res>>;
  constructor(private httpClient: HttpClient) {
    this.cache = new Map<string, Observable<Res>>();
  }

  doRequest(url: string): Observable<Res> {
    if (this.hasKey(url)) {
      return this.getCache(url);
    }
    const res$ = this.httpClient.get<Res>(url);
    this.setCache(url, res$);
    return res$;
  }

  getCache(key: string): Observable<Res> {
    return this.cache.get(key);
  }

  setCache(key: string, value: Observable<Res>) {
    this.cache.set(key, value);
  }

  hasKey(key: string): boolean {
    return this.cache.has(key);
  }
}
