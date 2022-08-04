import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'
import { playerCard } from '../models/player';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  private apiUrl = 'http://localhost:3000/soccerPlayer'

  constructor(private http: HttpClient) { }

  getall(): Observable<playerCard[]>{
    return this.http.get<playerCard[]>(this.apiUrl)
  }

  getById(id: number): Observable<playerCard>{
    return this.http.get<playerCard>(`${this.apiUrl}/${id}`)
  } 

  addPlayer(request: playerCard): Observable<playerCard>{
    return this.http.post<playerCard>(this.apiUrl, request);
  }

  deletePlayer(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }

  uptadePlayer(request: playerCard, id: number): Observable<playerCard>{
    return this.http.put<playerCard>(`${this.apiUrl}/${id}`, request)
  }
}
