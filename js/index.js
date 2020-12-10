const API_BASE = 'https://api.jikan.moe/v3/top';
let animeRecente = document.querySelector("#animes-recentes");
let animeNovo = document.querySelector("#animes-novos");
let mangaNovo = document.querySelector("#mangas-novos")


function homeAnimeRecente() {
    fetch(API_BASE + '/anime')
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(animes => {
            animes.top.forEach((anime, index) => {
                if (index <= 4) {
                    animeRecente.innerHTML += `
                        <div class="card" >
                            <div class="card-img-wrapper">
                                <img src=${anime.image_url} alt="imagemAnime"/>
                            </div>
                            <div class="card-info">
                                <h2>${anime.title}</h2>
                                <p>Conheça mais sobre esse grande sucesso clicando no botão abaixo!</p>
                                <a href="pagina-exemplo.html?anime&${anime.mal_id} " target="blank" style = "text-decoration: none"><button class="button-cards">Saiba Mais</button></a>
                            </div>
                        </div>`
                } else {
                    return
                }
            });
        })
}
homeAnimeRecente();

function homeAnimeNovo() {
    fetch(API_BASE + '/anime/1/airing')
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(animes => {
            animes.top.forEach((anime, index) => {
                if (index <= 4) {
                    animeNovo.innerHTML += `
                        <div class="card" >
                            <div class="card-img-wrapper">
                                <img src=${anime.image_url} alt="imagemAnime"/>
                            </div>
                            <div class="card-info">
                                <h2>${anime.title}</h2>
                                <p>Conheça mais sobre esse grande sucesso clicando no botão abaixo!</p>
                                <a href="pagina-exemplo.html?anime&${anime.mal_id}" target="blank" style = "text-decoration: none"><button class="button-cards">Saiba Mais</button></a>
                            </div>
                        </div>`
                } else {
                    return
                }
            });
        })
}
homeAnimeNovo();

function homeMangaNovo() {
    fetch(API_BASE + '/manga/1/novels')
        .then(response => {
            console.log(response)
            return response.json()
        })
        .then(mangas => {
            mangas.top.forEach((manga, index) => {
                if (index <= 4) {
                    mangaNovo.innerHTML += `
                        <div class="card" >
                            <div class="card-img-wrapper">
                                <img src=${manga.image_url} alt="imagemAnime"/>
                            </div>
                            <div class="card-info">
                                <h2>${manga.title}</h2>
                                <p>Conheça mais sobre esse grande sucesso clicando no botão abaixo!</p>
                                <a href="pagina-exemplo.html?manga&${manga.mal_id} " target="blank" style = "text-decoration: none"><button class="button-cards">Saiba Mais</button></a>
                            </div>
                        </div>`
                } else {
                    return
                }
            });
        })
}
homeMangaNovo();