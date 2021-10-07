import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { ExecFileSyncOptionsWithBufferEncoding } from 'child_process';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

////////////////////
class Persona {

  constructor(
    public Nombre: string,
    public Apellidos: string = ""
  ) { 

  }

}

class Heroe extends Persona {

  constructor(
    public Nombre: string,
    public Apellidos: string,
    public Nick: string,
    public Poder: string
  ) {
    super(Nombre, Apellidos);

  }

  Info(): string {
    let valor = "";
    valor = this.Nick + " es " + this.Nombre + " " + this.Apellidos;
    return valor;
  }

}



const personaje: Heroe = new Heroe("Peter", "Parker", "Spiderman", "Aracnido");

console.log(personaje);
console.log(personaje.Info());
//Fin