function renderCards(array) {
    const ul = document.querySelector(".cards");
    array.map(element => {
        ul.append(createCard(element));
    })
}

function renderAsideCards(array) {
    const ul = document.querySelector(".cards-selected");
    const message = document.querySelector(".none-selected");
    ul.innerHTML = "";
    if(array.length > 0) {
        array.map(element => {
            ul.append(createAsideCard(element));
        })
        message.style.display = "none";
        removeApply();
        newLocalStorage();
    } else { 
        message.style.display = "block";
        message.innerText = "Você ainda não aplicou para nenhuma vaga";
    }
}

renderCards(jobsData);
addApply();
renderAsideCards(candidacies);
