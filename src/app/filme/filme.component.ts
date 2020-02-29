import { Component, OnInit } from '@angular/core';
import { Filme } from './filme.model';
import { FilmeService } from './filme.service';

@Component({
  selector: 'app-filme',
  templateUrl: './filme.component.html',
  styleUrls: ['./filme.component.css']
})
export class FilmeComponent implements OnInit {

  Filmes: Filme[];

  constructor(private filmeService: FilmeService) { }

  ngOnInit(){
    this.getFilmes();
  }

  getFilmes(){
    this.filmeService.getFilmes().subscribe(res =>{
      console.log(res);
      this.Filmes = res['data']
    })
  }
}
