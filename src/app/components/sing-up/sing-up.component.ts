import { Component, OnInit } from '@angular/core';
import {AutenticarService} from '../../services/autenticar.service'
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.css']
})
export class SingUpComponent implements OnInit {

  user ={
    usuario:'',
    contrasena:''
  }

  constructor(private autenticarService:AutenticarService,
    private router:Router,
    private toast:NgToastService) { }

  ngOnInit(): void {
  }

  signIn(){
    this.autenticarService.signUp(this.user).subscribe(
    
      res=>{
        console.log(res)
        if(res.mensaje==='Autenticación correcta.'){
        this.toast.success({detail:"OK",summary:"Usuario encontrado"})
        console.log("usuario:"+this.user.usuario);
        console.log("contrasema:"+this.user.contrasena);
        localStorage.setItem('token',res.token); /// guardamos el token en el localstorage
        this.router.navigate(['/private']);

      }
      },
      err => console.log(err)
    )
   
  }
  
}
