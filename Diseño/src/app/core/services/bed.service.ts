import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr";
import { Observable, EMPTY } from "rxjs";
import { take, catchError, map } from "rxjs/operators";
import { BedResponse } from "../interfaces/bed";

@Injectable({
  providedIn: "root",
})
export class BedService {
  private readonly _URL = "assets/mockapi/";
  private readonly _BEDS = "bed.json";

  constructor(private _http: HttpClient, private _toastr: ToastrService) {}

  getBeds(): Observable<BedResponse> {
    return this._http.get<BedResponse>(this._URL + this._BEDS).pipe(
      take(1),
      catchError((error) => {
        this.errorHandle(error);
        return EMPTY;
      }),
      map((Response: BedResponse) => {
        return Response;
      })
    );
  }

  deleteBed(id: Number): Observable<any> {
    return this._http.delete(this._URL + id).pipe(
      take(1),
      catchError((error) => {
        this.errorHandle(error);
        return EMPTY;
      }),
      map((Response: any) => {
        return Response;
      })
    );
  }

  createBed(id: Number): Observable<any> {
    return this._http.delete(this._URL + id).pipe(
      take(1),
      catchError((error) => {
        this.errorHandle(error);
        return EMPTY;
      }),
      map((Response: any) => {
        return Response;
      })
    );
  }

  errorHandle(error: HttpErrorResponse) {
    this._toastr.error(error.statusText, error.status.toString());
  }
}
