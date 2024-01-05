const bookF = document.querySelector("#book")
const tabbody = document.querySelector("#book-list")
const containerDiv = document.querySelector(".container")


function createBookObject(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

bookF.addEventListener("submit", function (event) {
    event.preventDefault();
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const isbn = document.querySelector("#isbn");

    if (!title.value || !author.value || !isbn.value) {
        alert("Kindly, Add Required Options! ")
        return
    }

    const obj = new createBookObject(title.value, author.value, isbn.value)
    const varUI = new UI()
    varUI.addBook(obj)
    varUI.showAlert("Book Aded Succesfully")

    title.value = "";
    author.value = "";
    isbn.value = "";

})

tabbody.addEventListener
function UI() { }
UI.prototype.addBook = function(obj){
    const tableRow = document.createElement("tr");
    tableRow.innerHTML = `
    <td>${obj.title}</td>
    <td>${obj.author}</td>
    <td>${obj.isbn}</td>
    <td><i  class="update fa-solid fa-pencil"></i></td>
    <td><i class="delete fa-solid fa-trash"></i></td>
    `;
    tabbody.append(tableRow);
}

tabbody.addEventListener("click", function (event) {
    event.preventDefault();
    const curElem = event.target;
    if (curElem.classList.contains("delete") && confirm("Do You Want To  Delete")) {
        const varUI = new UI()
        varUI.removeBook(curElem)
        varUI.showAlert("Book Removed Succesfully","error")
    }
})

tabbody.addEventListener("click", function (event) {
    event.preventDefault();
    const curElem = event.target;
    if (curElem.classList.contains("update") && confirm("Do You Want To update? ")) {
        const tit = prompt("Add Title")
        const authh = prompt("Add Author")
        const asbnn = prompt("Add ISBN")

        const varUI = new UI()
        varUI.removeBook(curElem)
        varUI.showAlert("Book Removed Upated","error")
        const tableRow = document.createElement("tr");
        tableRow.innerHTML = `
        <td>${tit}</td>
        <td>${authh}</td>
        <td>${asbnn}</td>
        <td><i  class="update fa-solid fa-pencil"></i></td>
        <td><i class="delete fa-solid fa-trash"></i></td>
        `;
        tabbody.append(tableRow);
       
    }
})

UI.prototype.removeBook = function(curElem){
    curElem.parentElement.parentElement.remove();
}

UI.prototype.showAlert = function(message = "", className="success"){
    const divElement = document.createElement("div");
    divElement.className = `alert${className}`;
    divElement.innerText = message;

    containerDiv.insertBefore(divElement,bookF);
    setTimeout(function(){
        divElement.remove();
    },2000)
}
