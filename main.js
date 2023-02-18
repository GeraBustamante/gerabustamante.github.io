fetch('https://randomuser.me/api/?nat=es')
      .then(response => response.json())
      .then((data) => guardarDatos(data))
      .catch(err => console.log(err))

const guardarDatos = (data) => {
    let unHombre_unaMujer = "si veo esto es porque acerca de mi no se escribió correctamente";
    let p = {
        genero: "si veo esto es porque el genero no se guardo correctamente",
        nombre: "si veo esto es porque el nombre no se guardo correctamente",
        apellido: "si veo esto es porque el apellido no se guardo correctamente",
        foto: "Aca deberia ver la foto",
        cell: "El numero de telefono",
        edad: "La edad de la persona",
        email: "El correo Electronico",
        ciudad: "Aqui se guarda la ciudad"
    };
    p.genero = data.results[0].gender;
    p.nombre = data.results[0].name.first;    
    p.apellido = data.results[0].name.last;
    nombreYapellido = p.nombre + " " + p.apellido;
    p.foto = data.results[0].picture.large;
    p.cell = data.results[0].cell;
    p.edad = data.results[0].dob.age;
    p.email = data.results[0].email;
    p.ciudad = data.results[0].location.city;

    if (p.genero === "male") {
        unHombre_unaMujer = "un hombre"
    }
    else {
        unHombre_unaMujer = "una mujer"
    }



    console.log(data);
    console.log(p.nombre);
    console.log(p.foto);

    document.getElementById('fotoDePerfil').src=p.foto;
    document.getElementById('nombreApellido').innerHTML = `${nombreYapellido} <br> <span id="Profesion">${"VideoGames Developer"}</span>`;
    document.getElementById('telefonoINFO').innerHTML = p.cell;
    document.getElementById('emailINFO').innerHTML = p.email;
    document.getElementById('ciudadINFO').innerHTML = p.ciudad;

    document.getElementById('acercaDeMi').innerHTML = "Soy " + unHombre_unaMujer + " de " + p.edad + 
    " años, en busqueda de nuevas experiencias que me permitan desarrollar mis habilidades." + 
    " Soy una persona proactiva, con habilidades para resolver problemas," + 
    " y que vela siempre por el buen trato con mis compañeros y compañeras."

}