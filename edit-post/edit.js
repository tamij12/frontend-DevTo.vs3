//alert('Hola')
const URL_FIREBASEPOST = 'https://crud-js28g-default-rtdb.firebaseio.com/';
//1. Obtener el search: 
const search = window.location.search;
const url = new URLSearchParams(search);
const IDARTICLE = url.get('id');

const inputImg = document.querySelector('#coverImg');
const inputTitle = document.querySelector('#mainTitle');
const inputTags = document.querySelector('#sectionTags');
const inputContent = document.querySelector('#writeContent');
//4. Crear el elemento del botón de guardar cambios: 
const buttonSave = document.querySelector('#artPublish');


//6.Función para generar la pertición y realizar el UPDATE del artículo: 
const updateArticle = async() => {
    const article = {
        coverImg: inputImg.value,
        mainTitle: inputTitle.value,
        sectionTags: inputTags.value,
        writeContent: inputContent.value,
    };

    const url = URL_FIREBASEPOST + IDARTICLE + '.json';
    const response = await fetch(url, {
        method: 'PATCH',
        //Enviamos la información de const article ya que será que editará. 
        body: JSON.stringify(article)
    });
    //console.log(response)
    console.log(response)
    console.log(url)
    //Si la respuesta es correcta, después de guardar se enviará la página de artículos. 
    if(response.status === 200){
    window.location.href = 'http://127.0.0.1:5502/DevToPage/post.html'
    }
};

//5. Escuchar el evento click para guardar: 

buttonSave.addEventListener('click', () => {
    updateArticle()
});


//2. Función GET para traer la URL completa: 
const getInfoId = async() => {
    const url = URL_FIREBASEPOST + IDARTICLE + '.json';
    const info = await fetch(url);
    const parsed = await info.json();
    //Entrar a los inputs y asignarles el valor correspondiente: 
    console.log(parsed)
        inputImg.value = parsed.coverImg;
        inputTitle.value = parsed.mainTitle;
        inputTags.value = parsed.sectionTags;
        inputContent.value = parsed.writeContent;
};

(getInfoId())