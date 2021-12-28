//Start Navbar
const navbuttons = document.querySelector('.navbuttons');
const uparrowbtn =document.getElementById('up-arrow');
const navel = document.querySelector('nav');

navbuttons.addEventListener('click',()=>{
    navbuttons.classList.toggle('changes');
});


window.addEventListener('scroll',()=>{
    const getscrolly = window.scrollY;
    console.log(getscrolly);

    if(getscrolly >= 200){
        uparrowbtn.style.display = "block";
    }else{
        uparrowbtn.style.display = "none";
    }

    if(getscrolly >= 150){
        navel.style.backgroundColor = "rgba(255, 255, 255, 1)";
    }else{
        navel.style.backgroundColor = "transparent";
    }
});
//Start Photo change
const headerel = document.querySelector('header');

const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

const imgbox = document.querySelector('.imgboxs');
const imgs = document.querySelectorAll('.imgboxs img');

let idx = 0;
rightbtn.addEventListener('click',()=>{
    idx++;
    changeimage();
    resetinterval();
});

leftbtn.addEventListener('click',()=>{
    idx--;
    changeimage();
    resetinterval();
});

function changeimage(){
    if(idx > imgs.length - 1){
        idx = 0;
    }else if(idx < 0) {
        idx = imgs.length - 1;
    }
    // console.log(idx);

    imgbox.style.transform=`translateX(${-idx * 600}px)`;
    headerel.style.backgroundImage = `url(./img/collection/${idx + 1}.jpg)`;
}

let interval = setInterval(imgrun,9000);

function imgrun(){
    idx++;
    changeimage();
}

function resetinterval(){
    clearInterval(interval);
    interval = setInterval(imgrun,9000);
}
// End Navbar

// Start Gallary Section
const gallerylists = document.querySelectorAll('.gallerylists');
const filternatures = document.querySelectorAll('.filters.nature'),
      filterWeddings = document.querySelectorAll('.filters.Wedding'),
      filterportraids = document.querySelectorAll('.filters.portraid');

gallerylists.forEach((gallerylist)=>{
    // console.log(galarylist);
    
    gallerylist.addEventListener('click',(e)=>{
        let datafilter = gallerylist.getAttribute('data-filter');
        console.log(datafilter);

        removeactiveitem();
            e.target.classList.add('activeitems');

        if(datafilter === "all"){
            
            filternatures.forEach((filternature)=>{
                filternature.style.display = "inline-block";
            });

            filterWeddings.forEach((filterWedding)=>{
                filterWedding.style.display = "inline-block";
            });

            filterportraids.forEach((filterportraid)=>{
                filterportraid.style.display = "inline-block";
            });


        }else if(datafilter === "nature"){

            filternatures.forEach((filternature)=>{
                filternature.style.display = "inline-block";
            });

            filterWeddings.forEach((filterWedding)=>{
                filterWedding.style.display = "none";
            });

            filterportraids.forEach((filterportraid)=>{
                filterportraid.style.display = "none";
            });



        }else if(datafilter === "wedding"){

            filternatures.forEach((filternature)=>{
                filternature.style.display = "none";
            });

            filterWeddings.forEach((filterWedding)=>{
                filterWedding.style.display = "inline-block";
            });

            filterportraids.forEach((filterportraid)=>{
                filterportraid.style.display = "none";
            });


        }else{

            filternatures.forEach((filternature)=>{
                filternature.style.display = "none";
            });

            filterWeddings.forEach((filterWedding)=>{
                filterWedding.style.display = "none";
            });

            filterportraids.forEach((filterportraid)=>{
                filterportraid.style.display = "inline-block";
            });
        }
    });
});

// remove current active item

function removeactiveitem(){
    gallerylists.forEach((gallerylist)=>{
        gallerylist.classList.remove('activeitems');
    });
}

// End Gallary Section

//Start Footer Section
const showyer = document.getElementById('showyear');
const getfullyear = new Date().getFullYear();

showyer.innerText = getfullyear;
//End Footer Section

// For img overlay

const imgels = document.querySelectorAll('#gallery img');
const overlaycontainer = document.getElementById('ov-container');
const imgoverlay = document.getElementById('img-overlay');

imgels.forEach(imgel=>{
    // console.log(imgel);
    imgel.addEventListener('click',(e)=>{
        console.log(e.target);

        const imgsrc = imgel.src;
            // console.log(imgsrc);
            imgoverlay.src = imgsrc;
            overlaycontainer.style.display = "block";
    });
});

overlaycontainer.addEventListener('click',(e)=>{
    if(e.target !== imgoverlay){
        overlaycontainer.style.display = "none";
    }
})



