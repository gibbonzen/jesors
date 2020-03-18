import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  has(key: string): boolean {
    let item = localStorage.getItem(key)
    return item == undefined || item == null
  }

  get<T>(key: string, defaultValue: T): T {
    let item = localStorage.getItem(key)
    if(item == undefined || item == null) return defaultValue
    return JSON.parse(item)
  }

  put<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value))
  }

  remove<T>(key: string) {
    localStorage.removeItem(key)
  }
  
}
