import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/app/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import * as usuariosActions from '../../store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  //constructor(public usuarioService: UsuarioService) { }
  constructor( private store: Store<AppState>) { }

  ngOnInit() {

    /* //Invocacion del sevicio para obtener los usuarios por medio del servicio
    this.usuarioService.getUsers().subscribe(users => {
      console.log(users);
      this.usuarios = users;
    });
    */

    this.store.dispatch( new usuariosActions.CargarUsuarios());
    this.store.select('usuarios').subscribe(
      usuarios =>{
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
      }
    );
  }

  
  

}
