const form = document.querySelector("form");
const newItem = document.getElementById("new-item");
const shoppingList = document.getElementById("shopping-list");
const msgAlert = document.querySelector(".alert");
const closeAlert = document.getElementById("close-alert");

form.onsubmit = (event) => {
    event.preventDefault();
    if (newItem.value === "")
        return alert("Digite um item!")

    addNewItem(newItem.value);
}

closeAlert.addEventListener("click", () => {
    msgAlert.classList.add("opacity-0");
})

/**
 * Add item in shopping list
 * @param {String} item 
 */
function addNewItem(item) {
    const newLiItem = document.createElement("li");
    const newDiv = document.createElement("div");
    const newInnerDiv = document.createElement("div");
    const newInput = document.createElement("input");
    const newLabel= document.createElement("label");
    const newSpan= document.createElement("span");
    const newImg= document.createElement("img");

    newImg.setAttribute("src", "./assets/icons/Frame.svg");
    newImg.setAttribute("alt", "Lata de lixo");
    newImg.setAttribute("for", item);
    newInnerDiv.classList.add("flex", "align-items-center");
    newDiv.classList.add("flex", "align-items-center", "box-style");
    newLabel.textContent = item;
    newLabel.setAttribute("for", item);
    newInput.setAttribute("type", "checkbox");
    newInput.setAttribute("name", item);
    newInput.setAttribute("id", item);
    newInput.setAttribute("value", item);
    newSpan.append(newImg);
    newInnerDiv.append(newInput, newLabel);
    newDiv.append(newInnerDiv, newSpan);
    newLiItem.append(newDiv);
    shoppingList.append(newLiItem);

    newImg.addEventListener("click",() => deleteItemList(newLiItem));
}

function deleteItemList(item) {
    item.remove();
    msgAlert.classList.remove("opacity-0");
    setTimeout(() => {
        msgAlert.classList.add("opacity-0");
    }, 2000);
}