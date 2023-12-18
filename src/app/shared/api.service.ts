import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'




@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postData(data: any) {
    return this.http.post<any>("http://localhost:3000/posts", data)
      .pipe(map((res: any) => {
        return res
      }))
  }

  getData() {
    return this.http.get<any>("http://localhost:3000/posts")
      .pipe(map((res: any) => {
        return res
      }))
  }

  updateData(data: any, id: number) {
    return this.http.put<any>("http://localhost:3000/posts/" + id, data)
      .pipe(map((res: any) => {
        return res
      }))
  }

  deleteData(id: number) {
    return this.http.delete<any>("http://localhost:3000/posts/" + id)
      .pipe(map((res: any) => {
        return res
      }))
  }


  state() {
    return [
      {
        id: 1,
        name: "India"
      },
      {
        id: 2,
        name: "USA"
      },
    ]
  }

  city() {
    return [
      {
        id: 1,
        name: "Tamilnadu"
      },
      {
        id: 1,
        name: "Kerala"
      },
      {
        id: 2,
        name: "Las vegas"
      },
      {
        id: 2,
        name: "Texas"
      }
    ]
  }



}
