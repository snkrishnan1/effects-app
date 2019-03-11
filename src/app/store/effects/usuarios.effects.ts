import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuariosActions from '../actions';
import { of } from 'rxjs';
import { mergeMap, map, switchMap, catchError } from 'rxjs/Operators';
import { UsuarioService } from 'src/app/services/usuario.service';


@Injectable()
export class usuariosEffects{

  constructor( 
    private actions$: Actions, public usuarioService: UsuarioService

  ){}

  /*
@Effect({ dispatch: false })
  cargarUsuarios$ = this.actions$
    .pipe(ofType(usuariosActions.CARGAR_USUARIOS), 
      map(action => {
        this.service.getUsers()
            console.log(action);
            return  ;
  })
  );
  */


 @Effect()
 cargarUsuarios$ = this.actions$
   .pipe(ofType(usuariosActions.CARGAR_USUARIOS),
   switchMap( () => 
   {
     return this.usuarioService.getUsers()
        .pipe(
          map( users => new usuariosActions.CargarUsuariosSuccess(users)),
          catchError( error => of(new usuariosActions.CargarUsuariosFail(error))
        ));
   })
   );


}