// your code here


let btn = document.getElementById("button");



let name = document.getElementById("name");

let year = document.getElementById("year");

btn.addEventListener("click", (e) => {

    e.preventDefault();

    let h1TagData = document.getElementById("url");


    if (name.value != "")
        h1TagData.innerText += `?name=${name.value}`;

    if (year.value != "")
        h1TagData.innerText += `&year=${year.value}`;
})




