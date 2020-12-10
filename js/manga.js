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
                <section class="col-lg-3 d-flex">
                    <div class="card text-white bg-warning mb-3" style="width: 100%; display: flex; justify-content:center;align-itens:center"">
                        <img src="${manga.image_url}" class="card-img-top" alt="pokemon"  style = "height:60vh; margin-top:2vh; padding-left:3%; padding-right:3%">
                        <div class="card-body d-flex" style="flex-direction: column; justify-content: space-between">
                            <h5 class="card-title text-center">${manga.title}</h5>
                            <a href="detalhes.html?manga&${manga.mal_id}" target="blank" style = "text-decoration: none"><button type="button"
                                    class="btn btn-block btn-danger">Ver mais</button></a>
                        </div>
                    </div>
                </section>`
            });

        })

 
}
carregarMangas();