import { Component, OnInit } from '@angular/core';
import { TextsharingService } from '../../service/textsharing.service';
import {Router, ActivatedRoute} from '@angular/router';
import { error } from '../../../../node_modules/@angular/compiler/src/util';

@Component({
  selector: 'app-container-home',
  templateUrl: './container-home.component.html',
  styleUrls: ['./container-home.component.css']
})
export class ContainerHomeComponent implements OnInit {

  id : number;
  constructor(private textSharingServer: TextsharingService, private _router:Router ) { }

  ngOnInit() {
  }

  onClickPaste(username, codelanguage, content) {
    
    let pasteFormData: {} = {
      "username" : username,
      "language" : codelanguage,
      "content"  : content
    } ;
    this.textSharingServer.addPaste(pasteFormData).subscribe((data) => {

      this.id = data;
      this._router.navigate(['detail' , data ]);
      console.log(data);

    }, (error) => {
      console.log(error);
    });

    return false;
  }

}
