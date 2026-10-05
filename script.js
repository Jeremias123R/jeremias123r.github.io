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
        "Dashboard interactivo para analizar estudios de neurodiagnóstico mediante filtros, indicadores y gráficos.",
            
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
        "Sitio web editorial para una cafetería, diseñado para presentar su ambiente, menú y reservas de forma clara.",
            
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
        "Sitio web responsive para una tienda deportiva, con catálogo de productos y contacto directo.",
            
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
        "Aplicación web para gestionar reservas, horarios y estados de citas desde una interfaz sencilla.",
            
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