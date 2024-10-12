let ota =document.getElementById('ota')

fetch('https://jsonplaceholder.typicode.com/todos/1')
.then((response) => response.json())
.then((dada) => getdata(data))

function getdata (params) {
    console.log(json);
    params.map((item) =>{
        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        let tel = document.createElement('p')
        h3.innerHTML = `Ism`+ item.name
        tel.innerHTML = `tel`+ item.phone
        div.appendChild(h3)
        ota.appendChild(div)
}