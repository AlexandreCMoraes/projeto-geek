const API_BASE = 'https://api.jikan.moe/v3';
let sobre = document.querySelector('#sobre')
let rodape = document.querySelector("#rodape");

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
            
            let generos = "";
            console.log(res.genres)
            
            for(var i=0; i<res.genres.length; i++){
                console.log(res.genres)
                if(i == res.genres.length - 1){
                    generos+= res.genres[i].name
                }
                else{
                    generos+= res.genres[i].name + ", "
                }
            }
            sobre.innerHTML += `
                <div class="col-md-3">
                    <img src="${res.image_url}" class="card-img" alt="${res.title}" style = "width:20vw">
                </div>
                <div class="col-md-9">
                    <div class="card-body">
                        <h5 class="card-title">${res.title} (${res.title_japanese})</h5>
                        <p class="card-text">${res.synopsis}</p>
                        <p class="card-text">Nota: ${res.score}/10</p>
                        <p class="card-text">Popularidade: ${res.popularity}</p>
                        <p class="card-text">Generos: ${generos}</p>
                    </div>
                </div>`

            if (parametros[0] == 'anime') {
                let trailer = document.querySelector("#trailer")
                trailer.innerHTML += `
                    <span>
                    <H5>TRAILER OFICIAL DE ${res.title.toUpperCase()}</H5>
                    </span>
                <!-- TRAILER PARA ALGUNS ANIMES DISPONIVEIS RESPONSIVO -->
                <div class="row no-gutters">
                    <div class="col lg-3"></div>
                    <div class="col-lg-6 embed-responsive embed-responsive-16by9 mb-4">
                        <iframe class="embed-responsive-item" src="${res.trailer_url}"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                    <div class="col lg-3"></div>
                    <!-- PODE SER DESCRIÇÃO OU IMAGENS DE ONDE ASSISTIR, PLATAFORMAS DE STREAMING -->
                    
                </div>
                <div >
                        <p class="ml-5 ">Saiba mais clicando <a href="${res.url}" target="blank" style = " color:black" >Aqui</a></p>
                    </div>
                `
                
                rodape.insertAdjacentHTML("afterend",`<footer class="mt-5 container-fluid bg-dark">
                <div class="row">
                    <div class="col-12">
                        <p class="text-center mt-3 text-light" style=" letter-spacing: 0.04em">&copy;Copyright GEEK World</p>
                    </div>
                </div>
            </footer>`)

            }
            else{
                rodape.insertAdjacentHTML("afterend",`<footer class="mt-5 container-fluid bg-dark footer">
                <div class="row">
                    <div class="col-12">
                        <p class="text-center mt-3 text-light" style=" letter-spacing: 0.04em">&copy;Copyright GEEK World</p>
                    </div>
                </div>
            </footer>`)
            }
        })
}
carregarMangas();