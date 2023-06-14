
const objetos = [
    {
        imagen: "https://www.akademus.es/blog/wp-content/uploads/2018/07/java.png",
        titulo: "javascrip",
        descripcion: " Lorem ipsum dolor sit amet.",
    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png",
        titulo: "python",
        descripcion: " Lorem ipsum dolor sit amet."
    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/800px-ISO_C%2B%2B_Logo.svg.png",
        titulo: "c++",
        descripcion: " Lorem ipsum dolor sit amet."
    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png",
        titulo: "java",
        descripcion: " Lorem ipsum dolor sit amet."
    },
    {
        imagen: "https://w7.pngwing.com/pngs/980/847/png-transparent-ruby-on-rails-logo-programming-language-rubygems-ruby-angle-design-ruby.png",
        titulo: "ruby",
        descripcion: " Lorem ipsum dolor sit amet."
    },
    {
        imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png",
        titulo: "c#",
        descripcion: " Lorem ipsum dolor sit amet."
    }
]

const seccion = document.getElementById("cartas")

seccion.innerHTML+=objetos.map((objeto)=>{
    return `
    <div class="card p-5" style="width: 18rem;">
    <img src="${objeto.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${objeto.titulo}</h5>
      <p class="card-text">${objeto.descripcion}</p>
    </div>
  </div>`
}).join("");