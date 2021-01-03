import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-universite',
  templateUrl: './gestion-universite.component.html',
  styleUrls: ['./gestion-universite.component.css']
})
export class GestionUniversiteComponent implements OnInit {



  public universites: any[] = [
    {
      id: 1,
      name: "ITBS",
      fraisInscription: 400,
      url: "https://itbs.tn/",
      lieu:"Av. Dali Jezi, 8062 Nabeul, Tunisie",
      tel:"99102302",
      image :"https://i0.wp.com/itbs.tn/hojoseq/2020/04/logo_itbs_134x50.png?fit=134%2C50&ssl=1",
    },

    {
      id: 2,
      name: "esprit",
      fraisInscription: 500,
      url: "https://esprit.tn/",
      lieu:"Kalaa Sghira 4021 – sousse Tunisie.",
      tel:"99200301",
      image :"https://d7ieeqxtzpkza.cloudfront.net/wp-content/uploads/2018/03/image_news_get-1.jpg",

      
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }


  deleteUniversite(universite: any): void
   {
    let indice = this.universites.indexOf(universite.name)
    this.universites.splice(indice, 1)
  }

}