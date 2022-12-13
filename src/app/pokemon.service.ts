import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPoke } from './Ipoke';
import { list } from './cantpoke'; 
 

@Injectable({
  providedIn: 'root'

})
export class PokemonService {
  private apiUrlBase = "https://pokeapi.co/api/v2/"
constructor(private httpcliente: HttpClient){}
//CRUD
private HttpOptions = {
headers: new HttpHeaders({"Content-Type":
"application/json"})



}
getpoke(id: number| string){
  return this.httpcliente.get<list>(`${this.apiUrlBase}pokemon/?limit=${id}`)
}
getpokemons(): Observable<IPoke > {
return this.httpcliente.get<IPoke>(`${this.apiUrlBase}pokemon/1`)
}
getlistpoke(limite: number=150): Observable<list > {
  return this.httpcliente.get<list>(`${this.apiUrlBase}pokemon/?limit=${limite}`)
  }

// errores(){
  
// }
}
