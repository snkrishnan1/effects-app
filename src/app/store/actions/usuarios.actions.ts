import { Action } from '@ngrx/store';
import { Usuario } from 'src/app/models/user.model';

export const CARGAR_USUARIOS = '[Usuarios] Cargar Usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar Usuarios FAIL';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar Usuarios SUCCESS';


export class CargarUsuarios implements Action{
  readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action{
  readonly type = CARGAR_USUARIOS_FAIL;
  constructor( public payload: any){
  }
}

  export class CargarUsuariosSuccess implements Action{
    readonly type = CARGAR_USUARIOS_SUCCESS;
    constructor( public usuarios: Usuario[]){
    }
}

export type usuariosAcciones = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;