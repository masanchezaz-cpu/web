let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const botones = document.querySelectorAll(".comprar");

botones.forEach(boton => {
    boton.addEventListener("click", agregarCarrito);
});

function agregarCarrito(e){

    e.preventDefault();

    const card = e.target.closest(".card");

    const producto = {

        id: card.dataset.id,
        nombre: card.dataset.nombre,
        precio: Number(card.dataset.precio),
        cantidad: 1

    };

    const existe = carrito.find(item => item.id === producto.id);

    if(existe){

        existe.cantidad++;

    }else{

        carrito.push(producto);

    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador();

    mostrarCarrito();

    console.log(carrito);

}

const abrir = document.getElementById("abrir-carrito");
const cerrar = document.getElementById("cerrar-carrito");
const panel = document.getElementById("carrito-panel");

abrir.addEventListener("click", function(e){

    e.preventDefault();

    panel.classList.add("activo");

    mostrarCarrito();

});

cerrar.addEventListener("click", function(){

    panel.classList.remove("activo");

});

function mostrarCarrito(){

    const lista = document.getElementById("lista-carrito");

    lista.innerHTML = "";

    carrito.forEach(producto => {

        lista.innerHTML += `
            <div class="producto-carrito">

                <p>
                    <strong>${producto.nombre}</strong><br>
                    Cantidad: ${producto.cantidad}<br>
                    Precio: S/. ${producto.precio}
                </p>

                <button class="eliminar" data-id="${producto.id}">
                    Eliminar
                </button>

                <hr>

            </div>
        `;

    });

    const botonesEliminar = document.querySelectorAll(".eliminar");

    botonesEliminar.forEach(boton => {

        boton.addEventListener("click", function(){

            eliminarProducto(this.dataset.id);

        });

    });

    // Calcular el total
    const total = carrito.reduce((acumulador, producto) => {

        return acumulador + (producto.precio * producto.cantidad);

    }, 0);

    document.getElementById("total-carrito").textContent =
        `Total: S/. ${total.toFixed(2)}`;

}

function eliminarProducto(id){

    const producto = carrito.find(item => item.id === id);

    if(producto.cantidad > 1){

        producto.cantidad--;

    }else{

        carrito = carrito.filter(item => item.id !== id);

    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    actualizarContador()

    mostrarCarrito();

}

function actualizarContador(){

    const contador = document.getElementById("contador-carrito");

    const totalProductos = carrito.reduce((acumulador, producto) => {

        return acumulador + producto.cantidad;

    }, 0);

    contador.textContent = totalProductos;

}

actualizarContador()

gsap.fromTo("#carrito-panel",
    {
        x: 400
    },
    {
        x: 0,
        duration: 0.5,
        ease: "power3.out"
    }
);




gsap.registerPlugin(ScrollTrigger);

gsap.from(".logo", {
    y: -20,
    opacity: 0,
    duration: 1
});

gsap.to(".logo", {
    y: -5,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "power1.inOut"
});

gsap.from("nav li", {
    y: -30,
    opacity: 0,
    duration: 0.6,
    stagger: 0.1,
    delay: 0.3
});

gsap.from(".hero h1", {
    y: 80,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
});

gsap.from(".descripcion", {
    y: 40,
    opacity: 0,
    duration: 1,
    delay: 0.4,
    ease: "power2.out"
});

gsap.fromTo(
    ".btn-principal",
    {
        opacity: 0,
        y: 20
    },
    {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
    }
);

gsap.from(".portada", {
    scale: 0.5,
    opacity: 0,
    duration: 1.3,
    ease: "power3.out"
});

gsap.from(".corazon1", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",

    onComplete: () => {

        gsap.to(".corazon1", {
            y: -12,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }
});

gsap.from(".corazon2", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    delay: 0.3,
    ease: "back.out(1.7)",

    onComplete: () => {

        gsap.to(".corazon2", {
            y: -20,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }
});

gsap.to(".brillo1", {
    scale: 1.6,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".brillo2", {
    scale: 1.8,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".brillo3", {
    scale: 1.7,
    duration: 2.1,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});


gsap.from(".logocorazon", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",

    onComplete: () => {

        gsap.to(".logocorazon", {
            y: -4,
            rotation: 3,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }
});


gsap.from(".titulo-hero2", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero2",
        start: "top 90%",
        toggleActions: "play none none none"
    }
});


gsap.from(".corazon-hero2", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".hero2",
        start: "top 80%"
    }
});

gsap.to(".corazon-hero2", {
    y: -5,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.from(".btn-catalogo", {
    opacity: 0,
    duration: 1,
    delay: 0.4,
    scrollTrigger: {
        trigger: ".hero2",
        start: "top 80%"
    }
});

gsap.from(".card", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".productos",
        start: "top 80%"
    }
});

gsap.from(".hero3-titulo", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero3-titulo",
        start: "top 85%"
    }
});

gsap.from(".brillo-izq", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".hero3",
        start: "top 80%"
    }
});

gsap.to(".brillo-izq", {
    scale: 1.5,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.from(".brillo-der", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".hero3",
        start: "top 80%"
    }
});

gsap.to(".brillo-der", {
    scale: 1.5,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.from(".hero3-corazon", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".hero3",
        start: "top 80%"
    }
});

gsap.to(".hero3-corazon", {
    y: -4,
    rotation: 3,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.from(".oso", {
    scale: 0.3,
    opacity: 0,
    duration: 1.3,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".oso-container",
        start: "top 80%"
    }
});


gsap.from(".izquierda .beneficio", {
    x: -80,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero3-contenido",
        start: "top 80%"
    }
});

gsap.from(".derecha .beneficio", {
    x: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero3-contenido",
        start: "top 80%"
    }
});

gsap.from(".estrella-naranja", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".oso-container",
        start: "top 80%"
    }
});

gsap.to(".estrella-naranja", {
    rotation: -360,
    duration: 12,
    repeat: -1,
    ease: "none"
});

gsap.from(".estrella-morada", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".oso-container",
        start: "top 80%"
    }
});

gsap.to(".estrella-morada", {
    rotation: 360,
    duration: 12,
    repeat: -1,
    ease: "none"
});

gsap.from(".logo-hero4", {
    scale: 0.5,
    opacity: 0,
    duration: 3,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".hero4",
        start: "top 80%"
    }
});

gsap.to(".logo-hero4", {
    y: -5,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.from(".linea1, .linea2, .linea3", {
    scaleX: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out",
    scrollTrigger: {
        trigger: ".hero4",
        start: "top 80%"
    }
});

gsap.from(".testimonio", {
    y: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".hero4",
        start: "top 75%"
    }
});

const corazones = document.querySelectorAll(".corazon-testimonio");

corazones.forEach(corazon => {

    const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 1
    });

    tl.to(corazon, {
        scale: 1.2,
        duration: 0.15
    })
    .to(corazon, {
        scale: 1,
        duration: 0.15
    })
    .to(corazon, {
        scale: 1.15,
        duration: 0.15
    })
    .to(corazon, {
        scale: 1,
        duration: 0.15
    });

});


gsap.from("#conejo-principal", {
    scale: 0.5,
    opacity: 0,
    duration: 1.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".hero5",
        start: "top 80%"
    }
});

gsap.to("#conejo-principal", {
    y: -8,
    duration: 2.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.from(".izquierda .color-selector", {
    x: -50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".personalizador",
        start: "top 80%"
    }
});

gsap.from(".derecha .color-selector", {
    x: 50,
    opacity: 0,
    duration: 0.8,
    stagger: 0.15,
    scrollTrigger: {
        trigger: ".personalizador",
        start: "top 80%"
    }
});

gsap.to(".brillo4", {
    scale: 1.6,
    duration: 1.5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".brillo5", {
    scale: 1.8,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".figura3, .figura31", {
    rotation: 360,
    duration: 20,
    repeat: -1,
    ease: "none"
});

gsap.to(".figura1, .figura11", {
    rotation: -360,
    duration: 20,
    repeat: -1,
    ease: "none"
});

gsap.from(".card-producto", {
    y: 80,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
        trigger: ".card-producto",
        start: "top 85%"
    }
});


const conejo = document.getElementById("conejo-principal");

document.querySelectorAll(".color-selector").forEach(color => {
    color.addEventListener("mouseenter", () => {
        const nuevaImg = color.dataset.conejo;

        gsap.to(conejo, {
            scale: 0.95,
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                conejo.src = nuevaImg;

                gsap.to(conejo, {
                    scale: 1,
                    opacity: 1,
                    duration: 0.2
                });
            }
        });
    });
});

gsap.to(".corazon-footer", {
    y: -6,
    duration: 1.8,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.utils.toArray(".footer-redes img").forEach(icon => {
    icon.addEventListener("mouseenter", () => {
        gsap.to(icon, { scale: 1.15, duration: 0.2 });
    });

    icon.addEventListener("mouseleave", () => {
        gsap.to(icon, { scale: 1, duration: 0.2 });
    });
});