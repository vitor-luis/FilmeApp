import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmeService } from '../filme.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { Filme } from '../filme.model';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  filme: any;

  constructor(public filmeService: FilmeService) { }

  ngOnInit(): void {
    this.filme = {};
  }

  postFilme(form: FormGroup){
    this.filmeService.postFilmes(this.filme).subscribe(res =>{
      console.log(res);
      form.reset();
    })
  }

}
