const collares = [
    //defino la constante de los articulos (collares) que tenemos en 2 formatos, con 3 diseños y 2 anchuras//
	{
		tipo: 'martingale',
		ancho: 4,
		diseño: 'circulos',
		precio: '2500',
        foto: 'mg4circulos.jpeg',
	},
	{ 
		tipo: 'hebilla clip',
		ancho: 4,
		diseño: 'circulos',
        precio: '2500',
        foto: 'hc4circulos.jpeg',
    },
    {
		tipo: 'martingale',
		ancho: 4,
		diseño: 'serpiente',
		precio: '2500',
        foto: 'mg4serpiente.jpeg',
	},
	{ 
		tipo: 'hebilla clip',
		ancho: 4,
		diseño: 'serpiente',
		precio: '2500',
        foto: 'hc4serpiente.jpeg',
    },
    {
		tipo: 'martingale',
		ancho: 4,
		diseño: 'trenza',
		precio: '2500',
        foto: 'mg4trenza.jpeg',
	},
	{ 
		tipo: 'hebilla clip',
		ancho: 4,
		diseño: 'trenza',
		precio: '2500',
        foto: 'hc4trenza.jpeg',
    },
    {
		tipo: 'martingale',
		ancho: 2.5,
		diseño: 'militar',
		precio: '2000',
        foto: 'mg25militar.jpeg'
	},
	{ 
		tipo: 'hebilla clip',
		ancho: 2.5,
		diseño: 'militar',
		precio: '2000',
        foto: 'hc25militar.jpeg'
    },
    {
		tipo: 'martingale',
		ancho: 2.5,
		diseño: 'estrellas',
		precio: '2000',
        foto: 'mg25estrellas.jpeg'
	},
	{ 
		tipo: 'hebilla clip',
		ancho: 2.5,
		diseño: 'estrellas',
		precio: '2000',
        foto: 'hc25estrellas.jpeg'
    },
    {
		tipo: 'martingale',
		ancho: 2.5,
		diseño: 'animal print',
		precio: '2000',
        foto: 'mg25animal.jpeg'
	},
	{ 
		tipo: 'hebilla clip',
		ancho: 2.5,
		diseño: 'animal print',
		precio: '2000',
        foto: 'hc25animal.jpeg'
    }
];

const correas = [
    //defino la constante de los articulos (correas) que tenemos en 2 longitudes, con 3 diseños y 2 anchuras tambien//
	{
		longitud: 1.5,
		ancho: 4,
		diseño: 'circulos',
		precio: '2500',
        foto: 'correa4circulos.jpeg',
	},
	{
		longitud: 3,
		ancho: 4,
		diseño: 'circulos',
		precio: '2500',
        foto: 'correa4circulos.jpeg',
	},
    {
		longitud: 1.5,
		ancho: 4,
		diseño: 'serpiente',
		precio: '2500',
        foto: 'correa4serpiente.jpeg',
	},
	{ 
		longitud: 3,
		ancho: 4,
		diseño: 'serpiente',
		precio: '2500',
        foto: 'correa4serpiente.jpeg',
    },
    {
		longitud: 1.5,
		ancho: 4,
		diseño: 'trenza',
		precio: '2500',
        foto: 'correa4trenza.jpeg',
	},
	{ 
		longitud: 3,
		ancho: 4,
		diseño: 'trenza',
		precio: '2500',
        foto: 'correa4trenza.jpeg',
    },
    {
		longitud: 1.5,
		ancho: 2.5,
		diseño: 'militar',
		precio: '2000',
        foto: 'correa25militar.jpeg',
	},
	{ 
		longitud: 3,
		ancho: 2.5,
		diseño: 'militar',
		precio: '2000',
        foto: 'correa25militar.jpeg',
    },
    {
		longitud: 1.5,
		ancho: 2.5,
		diseño: 'estrellas',
		precio: '2000',
        foto: 'correa25estrellas.jpeg',
	},
	{ 
		longitud: 3,
		ancho: 2.5,
		diseño: 'estrellas',
		precio: '2000',
        foto: 'correa25estrellas.jpeg',
    },
    {
		longitud: 1.5,
		ancho: 2.5,
		diseño: 'animal print',
		precio: '2000',
        foto: 'correa25animal.jpeg',
	},
	{ 
		longitud: 3,
		ancho: 2.5,
		diseño: 'animal print',
		precio: '2000',
        foto: 'correa25animal.jpeg',
    }
]

console.log(collares)
console.log(correas)

let producto = prompt("¿Qué producto buscas? Ingrese collar o correa")
//genero un condicional para que el usuario realice una busqueda mas precisa//

if (producto == 'collar'){

let tipo = prompt("¿Qué tipo de collar buscas? (Ingrese: martingale o hebilla clip)") 
let ancho = Number(prompt("¿Qué ancho buscas? (Ingrese: 4 o 2.5)"))

const datosBusqueda = {
    tipo: tipo,
    ancho: ancho,
    diseño: '',
    precio: '',
}

function mostrarCollares(collares){
    collares.forEach( collar => {
        console.log(`tipo: ${collar.tipo} - ancho: ${collar.ancho} - diseño: ${collar.diseño} - precio: ${collar.precio}`)
         document.write( ` <div class="card"> <img src="./img/${collar.foto}"></div>`)
    })
}

function filtrarCollar(){
    const resultado = collares.filter(filtrarTipo).filter(filtrarAncho).filter(filtrarDiseño).filter(filtrarPrecio);
    if(resultado.length){
        mostrarCollares(resultado);
    }else {
        console.log("sin resultado");
    }
}

function filtrarTipo(collar){
    if(datosBusqueda.tipo){
        return collar.tipo === datosBusqueda.tipo;
    }
    return collar;
}

function filtrarAncho(collar){
    if(datosBusqueda.ancho){
        return collar.ancho === datosBusqueda.ancho;
    }
    return collar;
}

function filtrarDiseño(collar){
    if(datosBusqueda.diseño){
        return collar.diseño === datosBusqueda.diseño;
    }
    return collar;
}

function filtrarPrecio(collar){
    if(datosBusqueda.precio){
        return collar.precio === datosBusqueda.precio;
    }
    return collar;
}

filtrarCollar(collares)
}
else{

    let ancho = Number(prompt("¿Qué ancho buscas? (Ingrese: 4 o 2.5)"))
    let longitud = Number(prompt("¿Qué longitud de correa buscas? (Ingrese: 1.5 o 3)")) 
    
    
    const datosBusqueda = {
        longitud: longitud,
        ancho: ancho,
        diseño: '',
        precio: '',
    }
    
    function mostrarCorreas(correas){
        correas.forEach( correa => {
            console.log(`longitud: ${correa.longitud} - ancho: ${correa.ancho} - diseño: ${correa.diseño} - precio: ${correa.precio}`)
            document.write( ` <div class="card"><img src="./img/${correa.foto}"></div>`)
        })
    }
    
    function filtrarCorrea(){
        const resultado = correas.filter(filtrarLongitud).filter(filtrarAncho).filter(filtrarDiseño).filter(filtrarPrecio);
        if(resultado.length){
            mostrarCorreas(resultado);
        }else {
            console.log("sin resultado");
        }
    }
    
    function filtrarLongitud(correa){
        if(datosBusqueda.longitud){
            return correa.longitud === datosBusqueda.longitud;
        }
        return correa;
    }
    
    function filtrarAncho(correa){
        if(datosBusqueda.ancho){
            return correa.ancho === datosBusqueda.ancho;
        }
        return correa;
    }
    
    function filtrarDiseño(correa){
        if(datosBusqueda.diseño){
            return correa.diseño === datosBusqueda.diseño;
        }
        return correa;
    }
    
    function filtrarPrecio(correa){
        if(datosBusqueda.precio){
            return correa.precio === datosBusqueda.precio;
        }
        return correa;
    }
    
    filtrarCorrea(correas)
    }
    //el codigo esta diseñado para mostrar las imagenes de collares o correas que mejor se adaptan a la solicitud del usuario//