document.addEventListener("DOMContentLoaded", function (){
    const input = document.getElementById("inputPokemon")
    const btn = document.getElementById("btnbuscar")    

    btn.addEventListener("click", function () {
        const pokemon = input.value;
        console.log(pokemon);
        alert(pokemon); /*receber*/
    });

});