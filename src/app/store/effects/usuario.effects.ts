import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as usuarioActions from '../actions';
import { of } from 'rxjs';
import { mergeMap, map, switchMap, catchError } from 'rxjs/Operators';
import { UsuarioService } from '../../services/usuario.service';


@Injectable()
export class usuarioEffects{

  constructor( 
    private actions$: Actions, public usuarioService: UsuarioService

  ){}


 @Effect()
 cargarUsuario$ = this.actions$
   .pipe(ofType(usuarioActions.CARGAR_USUARIO),
   switchMap( (action: usuarioActions.CargarUsuario) => 
   {
     return this.usuarioService.getUserById(action.id)
        .pipe(
          map( user => new usuarioActions.CargarUsuarioSuccess(user)),
          catchError( error => of(new usuarioActions.CargarUsuarioFail(error))
        ));
   })
   );
}