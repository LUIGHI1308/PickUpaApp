
export interface RespuestaBackend {
    Usuarios: Usuario[];
  }

  export interface Usuario {
    name: string;
    email: string;
    rol: string;
    password: string;
}  
  
