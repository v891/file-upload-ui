import {Component} from '@angular/core';
import {UploadService} from "./upload.service";
import {FileMetaData} from "./file-meta-data.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'File Uploader';
  files: any[] = [];
  metaData: FileMetaData[] = [];
  message:string = "";

  constructor(private service: UploadService) {

  }

  onUpload(event) {
    //debugger;
    this.files = event.srcElement.files;
  }

  onFileSubmit() {
    //debugger;
    this.service.uploadFile(this.files[0]).subscribe((response) => {
      debugger;
      console.log(response);
      this.message = response['_body'];
      this.getFileMetaData();
    }, (error) => {
      console.log(error);
      this.message = error["message"];
    });
  }

  getFileMetaData() {
    this.service.getFilesMetaData().subscribe((response) => {
      this.metaData = response;
    }, (error) => {
      console.log(error);
    });
  }
}
