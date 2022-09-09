async function obtener_usuarios(){

    let usuarios = await fetch('https://jsonplaceholder.typicode.com/users');

    let usuarios_definitivo = await usuarios.json();

    let items = [];
    usuarios_definitivo.forEach(element => {
       
        let item = `<li class="list-group-item">${element,username}<li>`;

        items.push(item);
    });
    document.getElementById('listausers').innerHTML=items.join("");
}

obtener_usuarios();