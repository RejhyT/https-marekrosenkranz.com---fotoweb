let galleryImages = document.querySelectorAll(".gallery-img"),
    getLatestOpenedImg,
    windowWidth = window.innerWidth;


if(galleryImages) {
    galleryImages.forEach(function(image, index) {
        image.onclick = function() {
            let getElementCss = window.getComputedStyle(image), 
                getFullImgUrl = getElementCss.getPropertyValue('background-image'),
                getImgUrlPos = getFullImgUrl.split('/img/Gallery_Img/miniatury/'),  
                setNewImgUrl = getImgUrlPos[1].replace('")',''); //odstrani zavorku a horni uvozovky
                
            getLatestOpenedImg = index +1;

            console.log(index);

            let container = document.body,
                newImgWindow = document.createElement('div');
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute('class', 'img-window');
            newImgWindow.setAttribute('onclick', 'closeImg()');

            let newImg = document.createElement('img');
            newImgWindow.appendChild(newImg);
            newImg.setAttribute('src', 'img/Gallery_Img/fullsize/' + setNewImgUrl );
            newImg.setAttribute('id', 'current-img');


            newImg.onload = function() {
                let imgWidth = this.width,
                calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;


                let newNextBtn = document.createElement('a'),
                btnNextText = document.createTextNode('>');
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute('class', 'img-btn-next');
                newNextBtn.setAttribute('onclick', 'changeImg(1)');
                newNextBtn.style.cssText ='right: ' + calcImgToEdge + 'px';

    
                let newPrevBtn = document.createElement('a'),
                    btnPrevText = document.createTextNode('<');
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute('class', 'img-btn-prev');
                newPrevBtn.setAttribute('onclick', 'changeImg(0)');
                newPrevBtn.style.cssText ='left: ' + calcImgToEdge + 'px';

            }
        }
    });
}   



function closeImg() {
    document.querySelector('.img-window').remove();
    document.querySelector('.img-btn-next').remove();
    document.querySelector('.img-btn-prev').remove();

}

function changeImg(changeDir) {
    document.querySelector('#current-img').remove();

    let getImgWindow = document.querySelector('.img-window'),
        newImg = document.createElement('img'); 

    getImgWindow.appendChild(newImg);

    let calcNewImg;

    if(changeDir === 1) {
        calcNewImg = getLatestOpenedImg +1;
        if (calcNewImg > galleryImages.length) {
            calcNewImg = 1;

        }
    }
    else if(changeDir === 0 ){
        calcNewImg = getLatestOpenedImg -1;
        if (calcNewImg < 1) {
            calcNewImg = galleryImages.length;

        }
    };

    console.log(calcNewImg);
    newImg.setAttribute('src', 'img/Gallery_Img/fullsize/img(' + calcNewImg + ').jpg');
    newImg.setAttribute('id', 'current-img');   

    getLatestOpenedImg = calcNewImg;
    newImg.onload = function() {
        let imgWidth = this.width,
            calcImgToEdge = ((windowWidth - imgWidth) / 2) - 80;

        let nextBtn = document.querySelector('.img-btn-next');
        nextBtn.style.cssText ='right: ' + calcImgToEdge + 'px';

        let prevBtn = document.querySelector('.img-btn-prev');
        prevBtn.style.cssText ='left: ' + calcImgToEdge + 'px';
    
    }

}