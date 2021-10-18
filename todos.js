const btn = document.querySelector('.btn')
const myList = document.querySelector('.myList')
const inputz = document.querySelector('.icnputz')

btn.addEventListener("click", addNewItem);
inputz.addEventListener("keyup", onEnterKey);
myList.addEventListener('click', deleteItem);

function deleteItem(e) {
    const clicked = e.target;

    if(clicked.classList.contains('fa-trash-alt')){
        clicked.parentElement.parentElement.remove();
    }
}

function onEnterKey(e) {    
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById("btnX").click();
    }
}

function addNewItem(e) {
    e.preventDefault();

    if (inputz.value === "") {
        alert("Please add a new to do")
    }

    else {
        const li = document.createElement("li");
        const div = document.createElement("div")
        const span = document.createElement('span')
        const ahref = document.createElement("a")
        li.innerText = inputz.value;
        myList.appendChild(div);
        div.appendChild(li)
        div.appendChild(span)
        span.classList = "spane"
        li.classList = "myLi"
        span.innerHTML = '<i class="fas fa-trash-alt"></i>'
        div.classList = "item-colon"
        inputz.value = ""
    }
}


