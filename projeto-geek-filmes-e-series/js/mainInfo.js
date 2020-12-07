const API_BASE = 'https://api.jikan.moe/v3';
let sobre = document.querySelector('#sobre')
var contador = 0;

function carregarMangas() {

    let url = window.location.href
    let parametro = url.split('?')
    let parametros = parametro[1].split('&')
    console.log(parametro)
    console.log(parametros)
    fetch(API_BASE + `/${parametros[0]}/${parametros[1]}`)
        .then(response => {
            return response.json()

        })
        .then(res => {
            console.log(res)
            sobre.innerHTML += `
                <div class="col-md-4">
                    <img src="${res.image_url}" class="card-img" alt="pokemon">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${res.title}</h5>
                        <p class="card-text">${res.synopsis}</p>
                    </div>
                </div>`

            if (parametros[0] == 'anime') {
                let trailer = document.querySelector("#trailer")
                trailer.innerHTML += `
                    <span>
                    <H5>TRAILER OFICIAL DE ${res.title.toUpperCase()}</H5>
                    </span>
                <!-- TRAILER PARA ALGUNS ANIMES DISPONIVEIS RESPONSIVO -->
                <div class="row">
                    <div class="col-lg-6 embed-responsive embed-responsive-16by9">
                        <iframe class="embed-responsive-item" src="${res.trailer_url}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <!-- PODE SER DESCRIÇÃO OU IMAGENS DE ONDE ASSISTIR, PLATAFORMAS DE STREAMING -->
                    <div class="col-lg-6">
                        <p>Saiba mais em: ${res.url}</p>
                    </div>
                </div>`

            }
        })
}
carregarMangas();