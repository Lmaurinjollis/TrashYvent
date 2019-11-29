import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.page.html',
  styleUrls: ['./edit.page.scss'],
})
export class EditPage implements OnInit {
  croppedImagepath = '';
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 3,
    quality: 50
  };

  constructor( private router: Router) { }

  ngOnInit() {
  }

  redirectHome() {
    this.router.navigateByUrl('/homepage');
  }
}
