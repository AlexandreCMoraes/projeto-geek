const API_BASE = 'https://api.jikan.moe/v3/top';
let animeRow = document.querySelector('#container-cards')
var contador = 0;

function carregarAnimes() {

    fetch(API_BASE + '/anime/' + contador)
        .then(response => {
console.log(response)
            return response.json()

        })
        .then(animes => {

            animes.top.forEach(anime => {
                animeRow.innerHTML += `
                <section class="col-lg-4">
                <div class="card" style="width: 100%;">
                    <img src="${anime.image_url}" class="card-img-top" alt="pokemon">
                    <div class="card-body">
                        <h5 class="card-title text-center">${anime.title}</h5>
                        <a href="pagina-exemplo.html?anime&${anime.mal_id}" target="blank"><button type="button"
                                class="btn btn-outline-secondary btn-block">Ver mais</button></a>
                    </div>
                </div>
            </section>`


            });

        })


}
carregarAnimes();