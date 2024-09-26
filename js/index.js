document.addEventListener("DOMContentLoaded", function (){
    const input = document.getElementById("inputPokemon")
    const btn = document.getElementById("btnbuscar")    

    btn.addEventListener("click", function () {
        const pokemon = inputbuscar.value;
        const url = "https://pokeapi.co/api/v2/pokemon/";
        console.log(pokemon);
        fetch(url+pokemon)
            .then(response => {
                if(!response.ok) {
                    throw new Error("erro ao realizar API: ",response.status);
                    
                }
                return response.json();
            })
            .then(data =>{

                const todo = document.getElementById("todo");
                todo.classList.add("mostrar");

                console.log(data);
                const nome = document.getElementById("nome");
                nome.innerHTML = "";

                console.log(data);
                const imagem = document.getElementById("imagem");
                imagem.innerHTML = "";

                console.log(data);
                const peso = document.getElementById("peso");
                peso.innerHTML = "";

                console.log(data);
                const stats = document.getElementById("stats");
                stats.innerHTML = "";

                const divNome = document.createElement("div");
                divNome.classList.add("container-nome");
                divNome.innerHTML = `<h1 class="nome-pokemon">   ${data.name}</h1>`;
                nome.appendChild(divNome);

                const divImg = document.createElement("div");
                divImg.classList.add("container-imagem");
                divImg.innerHTML = `
                        <img class= "img" src="${data.sprites.other.dream_world.front_default}">`;
                    // <img src=    "${data.sprites.other.showdown.front_shiny}">`;
                imagem.appendChild(divImg);

                const divAltura = document.createElement("div");
                divAltura.classList.add("container-altura");
                divAltura.innerHTML = `<h2>Altura: ${data.height/10} m</h2>`;
                peso.appendChild(divAltura);

                const divPeso = document.createElement("div");
                divPeso.classList.add("container-peso");
                divPeso.innerHTML = `<h2>peso: ${data.weight/10} kg</h2>`;
                peso.appendChild(divPeso);

                data.stats.forEach(statusAtual => {
                        const divBase_stat = document.createElement("div");
                        divBase_stat.classList.add("container-base_stat");
                        divBase_stat.innerHTML = `<h3> ${statusAtual.stat.name}: ${statusAtual.base_stat}</h3>`;
                        stats.appendChild(divBase_stat);

                        
                });

            })
            .catch(error => {
                console.log("erro ao utilizar API: ",error);
            })
    });

});