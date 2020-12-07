const API_BASE = 'https://api.jikan.moe/v3/top';
let mangaRow = document.querySelector('#container-cards')
var contador = 0;

function carregarMangas() {

    fetch(API_BASE + '/manga/' + contador)
        .then(response => {
            return response.json()

        })
        .then(mangas => {

            mangas.top.forEach(manga => {
                mangaRow.innerHTML += `
                <section class="col-lg-3">
                    <div class="card text-white bg-warning mb-3" style="width: 100%;">
                        <img src="${manga.image_url}" class="card-img-top" alt="pokemon">
                        <div class="card-body">
                            <h5 class="card-title text-center">${manga.title}</h5>
                            <a href="pagina-exemplo.html?manga&${manga.mal_id}" target="blank"><button type="button"
                                    class="btn btn-block btn-danger">Ver mais</button></a>
                        </div>
                    </div>
                </section>`

            });

        })


}
carregarMangas();