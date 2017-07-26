import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map"
import {Http, RequestOptionsArgs} from "@angular/http";
import {FileMetaData} from "./file-meta-data.model";

@Injectable()
export class UploadService {

  constructor(private http: Http) {

  }

  uploadFile(file: File): Observable<any> {
   // debugger;

    let formData = new FormData();
    formData.append('file', file);
    return this.http.post("http://localhost:8080/file-manager/upload", formData).map(response => {
       return response;
    });
  }

  getFilesMetaData():Observable<FileMetaData[]> {
    return this.http.get("http://localhost:8080/file-manager/files").map(response => {
      return response.json();
    })
  }
}
