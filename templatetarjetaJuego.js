function hacerTemplate(ob){
    const tarjeta = `<div class="card" style="width: 18rem;">
    <img src="${ob.img}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${ob.name}</h5>
      <p class="card-text">Valor: ${ob.valorLicencia}</p>
    </div>
    <ul class="list-group list-group-flush" id="listaGeneros${ob.id}">
      
    </ul>
    <div class="card-body">
      <a href="#" class="card-link" onclick= "eliminarJuego(${ob.id})">Card link</a>
      <a href="#" class="card-link">Another link</a>
    </div>
    </div>`
    return tarjeta
}

export {hacerTemplate}