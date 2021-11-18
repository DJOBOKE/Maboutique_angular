import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  @Input()cont: number| undefined;
  @Input()desc: string | undefined;

  affichage=false;
  contenu="voir+";






  affich()
  {
    if(this.affichage == false)
    {
      this.affichage=true;
      this.contenu="voir-";
      setTimeout(
        () => {
        this.affichage=false;
        this.contenu="voir+";
      }, 5000
      );
    }else{
      this.affichage=false;
      this.contenu="voir+";

    }
  }



  constructor() { }

  ngOnInit(): void {
  }

}
