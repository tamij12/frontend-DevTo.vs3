//https://js-bb127-default-rtdb.firebaseio.com/';
const URL_API ={
    usuario:{
    id:1,
    name:"fabian",
    lastName:"López",
    profileImage:"https://fastly.picsum.photos/id/147/40/40.jpg?hmac=qB2AAlQmBbQ2BH_HPhCPRHV11QCtX3xtsl7yajy4mQY",
    profilePhoto: "https://fastly.picsum.photos/id/669/50/50.jpg?hmac=DaN-VcP5YZtnBogQye2Lk4DUx0qXhd6SpjtzqRQgtv0",
    },
    postInformation:{
        titulo: "esto esta muy dificil AIUDA!!!",
        descripcion:"llevo dos dias tratando de enteder que estoy haciendo. PD: todo es una broma ,pero si no les molesta no es broma",
        tags:{
            tag1:"#todoBien",
            tag2:"#beginners",
            tag3:"#programandoAndo"
        },

    }

};

const nameContainer =(url) =>{
    const autor_name__container = document.createElement("div");
    const autor_name = document.createElement("span");
    const autor_lastName = document.createElement("span");

    const userName = url.usuario.name;

    autor_name.textContent = userName;

    autor_lastName.textContent = url.usuario.lastName;
    
    autor_name__container.appendChild(autor_name);
    autor_name__container.appendChild(autor_lastName);
    return autor_name__container
}

const postTime =() =>{
    const post_time = document.createElement("span");
    post_time.textContent = "sep 21"
    return post_time
}
postTime();

const postImg__container = (URL) =>{
    const  post_Img__container = document.createElement("div");
    const autor_pic = document.createElement("img");

    const autor_photo = document.createElement("img");

    autor_photo.className = "z-3"

    autor_pic.src =URL.usuario.profileImage
    autor_photo.src = URL.usuario.profilePhoto
    
    
    post_Img__container.appendChild(autor_photo);
    post_Img__container.appendChild(autor_pic);
    return post_Img__container
}
postImg__container(URL_API);

const deleteButton = () =>{
    const deleteContainer =document.createElement("div");
    const buttonDelete = document.createElement("button");

    deleteContainer.className = "d-flex justify-content-end"
    buttonDelete.className = "btn btn-danger"

    buttonDelete.textContent = "delete"

    deleteContainer.appendChild (buttonDelete);
    return deleteContainer
}
deleteButton();

const autorInfo_container =() =>{
    const autor_info__container = document.createElement("div");

    autor_info__container.className = " d-flex flex-column ms-2"

    autor_info__container.appendChild(nameContainer(URL_API));
    autor_info__container.appendChild(postTime());
    return autor_info__container
}
autorInfo_container();

const autorContainer = () =>{
    const autor_container = document.createElement("div")
    autor_container.className = "d-flex justify-content-between"

    autor_container.appendChild(postImg__container(URL_API))
    autor_container.appendChild(autorInfo_container())
    return autor_container
}
autorContainer();

const renderCard = (URL_API) =>{
    const profile_deleteButton = document.createElement("div");
    profile_deleteButton.className = "d-flex justify-content-between ms-1"

    profile_deleteButton.appendChild(autorContainer());
    profile_deleteButton.appendChild(deleteButton());
    return profile_deleteButton;
}

const titleContent = (url) =>{
    const h3 =document.createElement("h3")
    h3.className = "card-title card-subtitle-lg mt-3 ms-md-5 ms-lg-5 d-none d-md-block d-lg-block"
    h3.textContent = url.postInformation.titulo;
    return h3
}

const tagsContainer = (url) =>{
    const ul = document.createElement ("ul");
    ul.className = " d-flex flex-wrap ms-md-5 ms-lg-5"
    const li = document.createElement ("li");
//crear formula para agregar los tags 
return ul
}

const reactions = () => {
    const a = document.createElement ("a")
    a.className = "link-underline-light d-flex align-items-center"
    const picContainer = document.createElement("div");


}

const reactionAndComments_container = () =>{
    const react_comnts_container = document.createElement("div");
    react_comnts_container.className = "d-flex align-items-center"

}

const infoFooter_container = (url) =>{
    const info_footer__container= document.createElement("div");
    info_footer__container.className = "d-flex justify-content-between align-items-center ms-md-5 ms-lg-5"
    info_footer_container.appendChild(reactionAndComments_container)
}

const contentCard = document.querySelector("#card_dinamic");
contentCard.appendChild(renderCard(URL_API))
contentCard.appendChild(titleContent(URL_API))
contentCard.appendChild(tagsContainer(URL_API))
console.log(contentCard);