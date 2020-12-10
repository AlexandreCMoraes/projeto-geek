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
                <section class="col-lg-4 d-flex">
                <div class="card" style="width: 100%; display: flex; justify-content:center;align-itens:center">
                    <img src="${anime.image_url}" class="card-img-top" alt="pokemon" style = "height:60vh; margin-top:2vh; padding-left:2%; padding-right:2%">
                    <div class="card-body d-flex" style="flex-direction: column; justify-content: space-between">
                        <h5 class="card-title text-center">${anime.title}</h5>
                        <a href="detalhes.html?anime&${anime.mal_id}" target="blank"  style = "text-decoration: none"><button type="button"
                               class="btn btn-danger btn-block">Ver mais</button></a>
                    </div>
                </div>
            </section>`
            });
        })
}
carregarAnimes();