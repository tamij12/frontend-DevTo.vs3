
const URL_API = 'https://js-80023-default-rtdb.firebaseio.com/';
const image = document.querySelector('#image');
const titulo = document.querySelector('#titulo');
const tags = document.querySelector('#tags')
const descripcion = document.querySelector('#descripcion');
const publish = document.querySelector('#publish');


const createPost = async (post) => {
    const url = URL_API + '.json';
    const create = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(post)
    });
    if (create.status === 200) {

        //getinfo()

};
}

publish.addEventListener('click', async () => {
    const imageData = image.value;
    const tituloData = titulo.value;
    const tagsData = tags.value;
    const descripcionData = descripcion.value;
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const date = currentDate.getDate();
    const timestamp = month + '-' + date;

    const postData = {
        image: imageData,
        titulo: tituloData,
        tags: tagsData,
        descripcion: descripcionData,
        date: timestamp,
    };
     const response = await createPost(postData);
     if (response.ok) {
        window.location.href = "main_index.html";  // Pongan nombre de la pagina main
    } else {
        alert('Failed to create post');
    }
});