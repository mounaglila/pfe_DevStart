import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { saveAs } from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(private http: HttpClient) {}

  downloadFile() {
    const fileUrl = 'http://localhost:5000/downloads/project.zip';
    this.http.get(fileUrl, {
      responseType: 'blob',
    }).subscribe((response) => {
      saveAs(response, 'project.zip');
    }, error => {
      console.error('Download error:', error);
    });
  }
}

