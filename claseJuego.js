class Juego{

    constructor(nombre,id,imagen,puntosFide=0){
        this.img = imagen
        this.id = id
        this.name = nombre
        this.valorLicencia = Math.floor(Math.random()*1000000)
        this.pFide = puntosFide
    }

}

export{Juego}