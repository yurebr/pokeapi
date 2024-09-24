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
                console.log(data);
                const visor = document.getElementById("visor");
                visor.innerHTML = "";

                const divNome = document.createElement("div");
                divNome.classList.add("container-nome");
                divNome.innerHTML = `<h1>   ${data.name}</h1>`;
                visor.appendChild(divNome);

                const divImg = document.createElement("div");
                divImg.classList.add("container-imagem");
                divImg.innerHTML = `
                        <img src=    "${data.sprites.other.showdown.front_default}">
                    <img src=    "${data.sprites.other.showdown.front_shiny}">`;
                visor.appendChild(divImg);

                const divAltura = document.createElement("div");
                divAltura.classList.add("container-altura");
                divAltura.innerHTML = `<h2>Altura: ${data.height/10} m</h2>`;
                visor.appendChild(divAltura);

                const divPeso = document.createElement("div");
                divPeso.classList.add("container-peso");
                divPeso.innerHTML = `<h2>peso: ${data.weight/10} kg</h2>`;
                visor.appendChild(divPeso);

                data.stats.forEach(statusAtual => {
                        const divBase_stat = document.createElement("div");
                        divBase_stat.classList.add("container-base_stat");
                        divBase_stat.innerHTML = `<h3> ${statusAtual.stat.name}: ${statusAtual.base_stat}</h3>`;
                        visor.appendChild(divBase_stat);

                        
                });

            })
            .catch(error => {
                console.log("erro ao utilizar API: ",error);
            })
    });

});