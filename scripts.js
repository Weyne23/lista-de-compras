const form = document.querySelector("form");
const newItem = document.getElementById("new-item");
const listaCompras = document.getElementById("buy-list");

form.onsubmit = (event) => {
    event.preventDefault();
    if (newItem.value === ""){
        return alert("Escreva ")
    }
    newItem.value = "TESTE";
    console.log(newItem.value);
}

function addNewItem() {

}