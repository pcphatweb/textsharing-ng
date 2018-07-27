import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { TextsharingService } from '../../service/textsharing.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-container-detail',
  templateUrl: './container-detail.component.html',
  styleUrls: ['./container-detail.component.css']
})
export class ContainerDetailComponent implements OnInit {

  urlPaste : string;

  userNamePaste : string;

  contentPaste : string;

  languagePaste : string;

  selectedEdit: boolean = false;

  notMarkDown: boolean = false;

  isMarkDown: boolean = false;

  isLoading: boolean = true;

  Loaded: boolean = false;

  userid : number;

  constructor( private textSharingService: TextsharingService , private route: ActivatedRoute, private _router:Router  ) {}

  ngOnInit() {
    this.getPaste();
  }


  getPaste(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userid = id;
    this.urlPaste = location.href;
    this.textSharingService.getDetail(id).subscribe((data) => {
      
      this.userNamePaste = data.Name;
      this.languagePaste = data.Language;
      this.contentPaste = data.Content;

      if(this.languagePaste == 'markdown')
        this.isMarkDown = true;
      else
        this.notMarkDown = true;

      console.log(data);

      this.isLoading = false;
      this.Loaded = true;

    }, (error) => {
      console.log(error);
    });
    // console.log("id la " + id);
  }

  onEdit(): void {
    this.selectedEdit = true;
  }
  
  onUpdatePaste(codeLanguage, contentUpdate): any {
    this.textSharingService.updatePaste(this.userid, codeLanguage, contentUpdate).subscribe((data) => {

    alert("Update Success");

    location.reload();
    

    }, (error) => {
      console.log(error);
    });

    return false;
  }

  copyInputURL(inputElement){
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 100);
  }

}
