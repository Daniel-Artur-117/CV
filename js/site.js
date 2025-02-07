function toggleMenu(){
    let button = document.querySelector(".gg-menu-oreos");
    button.classList.toggle("gg-close");

    let menu = document.getElementsByClassName("js-menu");
    menu[0].classList.toggle("active")
}

function showImage(image){
    var newImage=document.createElement('img');
    newImage.src=image.src;
    newImage.removeAttribute('onclick');
    var modal = document.getElementById('preview');
    modal.classList.toggle('showModal');
    var existinImage = modal.querySelector('img');
    if(existinImage){
        modal.removeChild(existinImage);
    }
    modal.appendChild(newImage);
}

function cerrarModal(){
    var modal = document.getElementById('preview');
    modal.classList.remove('showModal');
}


function fixPhotoOnScroll(){
    var photo=document.getElementById("photo-profile");
    this.scrollY > 50 ? photo.style.marginTop = 0 :photo.style.marginTop = ""
}

window.addEventListener("scroll", fixPhotoOnScroll,false);