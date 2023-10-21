import { Juego } from "./claseJuego.js"
import { hacerTemplate } from "./templatetarjetaJuego.js"

async function peticionJuegos(url){
    let response = await fetch(url)
    let data = await response.json()
    let results = data.results
    let juegosEliminados = ""
    if (JSON.parse(localStorage.getItem("juegosEliminados"))){
        juegosEliminados = JSON.parse(localStorage.getItem("juegosEliminados"))
    }
    else{
        juegosEliminados = []
        localStorage.setItem("juegosEliminados", JSON.stringify(juegosEliminados))
    }

    results.forEach(elem => {
        if(!juegosEliminados.includes(elem.id)){

        }
        let juego = new Juego(elem.name,elem.id,elem.background_image)
        let teamplateJuego = hacerTemplate(juego)
        document.getElementById("containerVideojuegos").insertAdjacentHTML("beforeend", teamplateJuego)
        
        let generos = elem.genres
        generos.forEach(element => {
            let genero = `<li class="list-group-item">${element.name}</li>`
            document.getElementById("listaGeneros" + elem.id).insertAdjacentHTML("beforeend", genero)
        });

    });
    

}

export{peticionJuegos}