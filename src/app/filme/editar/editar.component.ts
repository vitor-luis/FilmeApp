import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FilmeService } from '../filme.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  private id;
  nome: String ='';
  descricao: String = '';

  filmeForm: FormGroup

  constructor(
    private filmeService: FilmeService,
    private route: ActivatedRoute,
    private formBiulder: FormBuilder,
    private router : Router
  ) { }

  ngOnInit(): void{
    this.id = this.route.snapshot.params.id;

    this.filmeForm = this.formBiulder.group({
      'id': [null],
      'nome': [null,[Validators.required]],
      'descricao': [null,[Validators.required]]
    })

    this.getFilmesById(this.id)
  }

  getFilmesById(id: number): void{
    this.filmeService.getFilmesById(id).subscribe(res =>{
      console.log(res)
      this.filmeForm.patchValue({
        id: res['data']['id'],
        nome: res['data']['nome'],
        descricao: res['data']['descricao']
      })
    })
  }

  putFilme(form): void{
    this.filmeService.putFilme(this.id, form).subscribe(res =>{
      console.log(res)
    })
    this.router.navigate(['/filmes'])
  }
}
