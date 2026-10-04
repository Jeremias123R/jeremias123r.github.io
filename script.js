const proyectos = [
    {
        nombre: "Inventario de farmacia",
        descripcion:
            "Sistema de inventario con alertas de vencimiento, reposición de stock, lotes e historial de movimientos.",
        tecnologias:
            "JavaScript · Supabase · Python · GitHub Actions",
        demo:
            "https://jeremias123r.github.io/Farmacia-demo/",
        codigo:
            "https://github.com/jeremias123r/Farmacia-demo"
    },

    {
        nombre: "Pulso",
        descripcion:
            "Dashboard para analizar datos ficticios de estudios de neurodiagnóstico mediante filtros e indicadores.",
        tecnologias:
            "HTML · CSS · JavaScript · Chart.js",
        demo:
            "https://jeremias123r.github.io/Pulso/",
        codigo:
            "https://github.com/jeremias123r/Pulso"
    },

    {
        nombre: "Café Alma",
        descripcion:
            "Sitio web editorial para una cafetería enfocada en café, lectura y reservas por WhatsApp.",
        tecnologias:
            "HTML · CSS · JavaScript",
        demo:
            "https://jeremias123r.github.io/Cafe-alma/",
        codigo:
            "https://github.com/Jeremias123R/Cafe-Alma"
    },

    {
        nombre: "La Casa del Tenis",
        descripcion:
            "Página web para una tienda deportiva especializada en productos relacionados con el tenis.",
        tecnologias:
            "HTML · CSS · JavaScript",
        demo:
            "https://jeremias123r.github.io/Casa-del-tenis/",
        codigo:
            "https://github.com/Jeremias123R/Casa-del-tenis"
    },

    {
        nombre: "Reservas Clínica",
        descripcion:
            "Sistema de demostración para registrar y gestionar reservas de una clínica.",
        tecnologias:
            "HTML · CSS · JavaScript · LocalStorage",
        demo:
            "https://jeremias123r.github.io/Reserva-clinicas/",
        codigo:
            "https://github.com/Jeremias123R/Reserva-clinicas"
    }
];


const listaProyectos =
    document.querySelector("#listaProyectos");


proyectos.forEach(function(proyecto) {

    const tarjeta =
        document.createElement("article");


    tarjeta.className = "proyecto";


    tarjeta.innerHTML = `

        <h3>
            ${proyecto.nombre}
        </h3>


        <p>
            ${proyecto.descripcion}
        </p>


        <span>
            ${proyecto.tecnologias}
        </span>


        <div class="enlaces-proyecto">

            <a
                href="${proyecto.demo}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver proyecto
            </a>


            <a
                href="${proyecto.codigo}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Código
            </a>

        </div>

    `;


    listaProyectos.appendChild(
        tarjeta
    );

});    