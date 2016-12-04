import {Component} from "angular2/core";
import {PeliculasListComponent} from "./components/peliculas-list.components";
import {PeliculasFooterComponent} from "./components/peliculas-footer.component";
import {ContactoComponent} from "./components/contacto.component";
import {CrearPeliculaComponent} from "./components/crear-pelicula.component";
import {ROUTER_DIRECTIVES, RouteConfig, Router} from "angular2/router";

@Component({
	selector: "mi-app",
	templateUrl: "app/view/peliculas.html",
  directives: [PeliculasListComponent, PeliculasFooterComponent, ContactoComponent, CrearPeliculaComponent,ROUTER_DIRECTIVES]
})

@RouteConfig([
	{path: "/peliculas", name: "Peliculas", component: PeliculasListComponent, useAsDefault: true},
	{path: "/contacto", name: "Contacto", component: ContactoComponent},
  {path: "/crear-pelicula", name: "CrearPelicula", component: CrearPeliculaComponent},
  {path: "/crear-pelicula/:titulo/:director/:anio", name: "CrearPeliculaBasadaEnOtra", component: CrearPeliculaComponent}
])

export class AppComponent{
	public titulo: string = "Peliculas desde Angular 2";

}
