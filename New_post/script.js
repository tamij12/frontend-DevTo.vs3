
//elementos del aside

function create_aside_element(id, tittle, parrafo, marginTop) {
    // Crear un elemento div con la clase 'tittle_info_tool'
    const divElement = document.createElement('div');
    divElement.className = 'tittle_info_tool';

    // Crear un título h3
    const h3Element = document.createElement('h3');
    h3Element.textContent = tittle;

    // Crear un párrafo
    const pElement = document.createElement('p');
    pElement.textContent = parrafo;

    // Aplicar el estilo de margen superior (marginTop) al divElement
    divElement.classList.add(marginTop);

    // Agregar el título y el párrafo al div
    divElement.appendChild(h3Element);
    divElement.appendChild(pElement);

    const aside_rigth = document.getElementById('aside_rigth');

    // Insertar el nuevo div en el DOM
    aside_rigth.appendChild(divElement);

    // Agregar un event listener al elemento tittle_post (campo de entrada) para eliminar el divElement en caso de 'blur'
    document.getElementById(id).addEventListener("blur", (event) => {
        divElement.remove();
    });
}

const tittle_post = document.getElementById("tittle_post");

tittle_post.addEventListener("focus", (event) => {
    create_aside_element (
        'tittle_post',
        'Writing a Great Post Title',
        'Think of your post title as a super short (but compelling!) description — like an overview of the actual post in one short sentence. Use keywords where appropriate to help ensure people can find your post by search.',
        'tittle_mt'
    )
});


const tags_input = document.getElementById('tags_input');

tags_input.addEventListener('focus', () => {
    create_aside_element (
        'tags_input',
        'Tagging Guidelines',
        'Tags help people find your post. Think of tags as the topics or categories that best describe your post. Add up to four comma-separated tags per post. Combine tags to reach the appropriate subcommunities. Use existing tags whenever possible. Some tags, such as “help” or “healthydebate”, have special posting guidelines.',
        'tags_mt'
    )
    // Crear un elemento div con la clase 'card'
const cardElement = document.createElement('div');
cardElement.className = 'card';

// Crear un elemento div con la clase 'card-header'
const cardHeaderElement = document.createElement('div');
cardHeaderElement.className = 'card-header';

// Crear un elemento h5 con la etiqueta 'strong' dentro del card-header
const h5Element = document.createElement('h5');
const strongElement = document.createElement('strong');
strongElement.textContent = 'Tags';
h5Element.appendChild(strongElement);
cardHeaderElement.appendChild(h5Element);

// Crear un elemento div con la clase 'card-body'
const cardBodyElement = document.createElement('div');
cardBodyElement.className = 'card-body';

// Crear un elemento blockquote con la clase 'blockquote' y 'tags_card_div'
const blockquoteElement = document.createElement('blockquote');
blockquoteElement.className = 'blockquote mb-0 tags_card_div';

// Crear un párrafo dentro del blockquote
const pElement = document.createElement('p');
pElement.textContent = '#AyotziVive';

// Crear un elemento footer con la clase 'blockquote-footer' dentro del blockquote
const footerElement = document.createElement('footer');
footerElement.className = 'blockquote-footer';
footerElement.textContent = 'Nos faltan 43';

// Agregar el párrafo y el footer al blockquote
blockquoteElement.appendChild(pElement);
blockquoteElement.appendChild(footerElement);

// Agregar el card-header y el blockquote al card-body
cardBodyElement.appendChild(blockquoteElement);

// Agregar el card-header y el card-body al card
cardElement.appendChild(cardHeaderElement);
cardElement.appendChild(cardBodyElement);

// Agregar el card al DOM (por ejemplo, al body)
const card_div = document.getElementById('card_container')
card_div.appendChild(cardElement);

// Agregar un event listener 'blur' al párrafo para eliminar el card al perder el foco
tags_input.addEventListener("blur", (event) => {
    cardElement.remove();
});

})

//------------------------------------------------------

//proceso de datos
document.addEventListener("DOMContentLoaded", function elements () {
    const form = document.getElementById("post_form");
    const coverImageInput = document.getElementById("cover_image");
    const tagsInput = document.getElementById("tags_input");
    const contentInput = document.getElementById("post_area");
    const titleInput = document.getElementById("tittle_post");

    form.addEventListener("submit", async function (event) {
    
    event.preventDefault();
    window.location.href = "./main.html";

    const postData = {
        title: titleInput.value,
        content: contentInput.value,
        tags: tagsInput.value.split(","),
        urlCoverImage: coverImageInput.value,
        };

    try {
        const response = await fetch("http://127.0.0.1:5500/post/new_post/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json", 
            },
          body: JSON.stringify(postData), // Convierte el objeto en formato JSON
        });

        if (response.ok) {
          // La publicación se creó con éxito
          const data = await response.json();
          console.log("Publicación creada:", data);
          // Puedes redirigir al usuario a una página de confirmación o realizar otras acciones aquí
        } else {
          // Manejar errores de la solicitud, por ejemplo:
          console.error("Error al crear la publicación");
        }
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    });
  });
  

//prueba de conexión
    document.getElementById('pruebaBoton').addEventListener('click', function () {
      fetch('http://localhost:3000/prueba')  
        .then((response) => {
          if (response.ok) {
            // Si la solicitud fue exitosa, verifica el tipo de contenido de la respuesta
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('text/plain')) {
              return response.text();
            } else {
              throw new Error('La respuesta no es de tipo texto plano.');
            }
          } else {
            throw new Error('Error en la solicitud.');
          }
        })
        .then((jsCode) => {
        
          eval(jsCode);
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error);
        });
    });


