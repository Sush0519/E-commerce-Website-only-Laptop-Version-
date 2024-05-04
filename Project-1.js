const body = document.querySelector("body"),
    navbar = body.querySelector(".navbar"),
    toggle = body.querySelector(".toggle"),
    click = body.querySelector(".click-btn"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    modeText = body.querySelector(".mode-text"),
    sidebar = body.querySelector(".sidebar1"),
    WOMEN = body.querySelector(".women"),
    MEN = body.querySelector(".men"),
    line=body.querySelector(".line"),
    moved = body.querySelector(".move-line"),
    WFront = body.querySelector(".w-front"),
    WBack = body.querySelector(".w-back"),
    MFront = body.querySelector(".m-front"),
    MBack = body.querySelector(".m-back"),
    bsContainer = body.querySelector(".bs-container"),
    boxSearch = body.querySelector('.searchBox'),
    TOPBAR = body.querySelector(".topbar"),
    main=body.querySelector(".mainSection"),
    iconSearch = body.querySelector('.searchIcon');



 toggle.addEventListener(("click"), () => {
    navbar.classList.toggle("close");
        
});
    

toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");

});


click.addEventListener("click",()=>{
    body.classList.toggle('expanded');

});




// ********************WOMEN*********************


const line2 = document.getElementById("movable-line");
line2.style.position = "absolute";
line2.style.left = "38.9%";
line2.style.height = "10px";
line2.style.width = "12%";

// **************FRONT************
var img_wf1 = document.getElementById('snap-wf-1');
var img_wf2 = document.getElementById('snap-wf-2');
var img_wf3 = document.getElementById('snap-wf-3');
var img_wf4 = document.getElementById('snap-wf-4');

// *************BACK*****************
var img_wb1 = document.getElementById('snap-wb-1');
var img_wb2 = document.getElementById('snap-wb-2');
var img_wb3 = document.getElementById('snap-wb-3');
var img_wb4 = document.getElementById('snap-wb-4');





WOMEN.addEventListener('click', lineDisplay);


function lineDisplay() {
    line2.style.left = "38.9%";
    

}





WOMEN.addEventListener('click',WFimageDisplay);

function WFimageDisplay(){
    img_wf1.src='CSS/Images/wfc1.webp';
    img_wf2.src='CSS/Images/wfc2.webp';
    img_wf3.src='CSS/Images/wfc3.webp';
    img_wf4.src='CSS/Images/wfc4.webp';
}

WOMEN.addEventListener('click',WBimageDisplay);

function WBimageDisplay(){
    img_wb1.src='CSS/Images/wbc1.webp';
    img_wb2.src='CSS/Images/wbc2.webp';
    img_wb3.src='CSS/Images/wbc3.webp';
    img_wb4.src='CSS/Images/wbc4.webp';
}

WOMEN.addEventListener('click',WdisplayInfo);

  function WdisplayInfo(){

    cat_W_1.innerHTML='Chikankari Kurti';
    cat_W_2.innerHTML='Leather Pant';
    cat_W_3.innerHTML='Maxi Dress';
    cat_W_4.innerHTML='Crop Shirt';

     price_W_1.innerHTML = '&#8377;799';
     price_W_2.innerHTML = '&#8377;1590';
     price_W_3.innerHTML = '&#8377;1098';
     price_W_4.innerHTML = '&#8377;699';




    title_W_1.innerHTML = 'Chikankari Straight Long Kurti';
    title_W_2.innerHTML = 'Black high Waist leather trousers';
    title_W_3.innerHTML = 'Blue Tropical Front Placket Ruched Waist Maxi Dress';
    title_W_4.innerHTML = 'All-Over Striped Crop Shirt with Ruched Detail';

  }

// *******************MEN*********************

MEN.addEventListener('click', lineDisplay1);


function lineDisplay1() {
    line2.style.left = "51%";
    
}



MEN.addEventListener('click',FimageDisplay);

function FimageDisplay(){
    img_wf1.src='CSS/Images/mfc1.webp';
    img_wf2.src='CSS/Images/mfc2.webp';
    img_wf3.src='CSS/Images/mfc3.webp';
    img_wf4.src='CSS/Images/mfc4.webp';
}

MEN.addEventListener('click',BimageDisplay);

function BimageDisplay(){
    img_wb1.src='CSS/Images/mbc1.webp';
    img_wb2.src='CSS/Images/mbc2.webp';
    img_wb3.src='CSS/Images/mbc3.webp';
    img_wb4.src='CSS/Images/mbc4.webp';
}

var title_W_1 = document.getElementById('title-W-1');
var title_W_2 = document.getElementById('title-W-2');
var title_W_3 = document.getElementById('title-W-3');
var title_W_4 = document.getElementById('title-W-4');

var cat_W_1 = document.getElementById('cat-w-1');
var cat_W_2 = document.getElementById('cat-w-2');
var cat_W_3 = document.getElementById('cat-w-3');
var cat_W_4 = document.getElementById('cat-w-4');

var price_W_1 = document.getElementById('price-w-1');
var price_W_2 = document.getElementById('price-w-2');
var price_W_3 = document.getElementById('price-w-3');
var price_W_4 = document.getElementById('price-w-4');


MEN.addEventListener('click',MdisplayInfo);

  function MdisplayInfo(){

    cat_W_1.innerHTML='Slim Fit Shirt';
    cat_W_2.innerHTML='Cargo Pant';
    cat_W_3.innerHTML='Crew-Neck T-Shirt';
    cat_W_4.innerHTML='Cargo Shorts';

     price_W_1.innerHTML = '&#8377;999';    
     price_W_2.innerHTML = '&#8377;1298';
     price_W_3.innerHTML = '&#8377;895';
     price_W_4.innerHTML = '&#8377;1109';




    title_W_1.innerHTML = 'Men Slim Fit Shirt with Spread Collar';
    title_W_2.innerHTML = 'Olive Green Regular Fit Cargo Pant';
    title_W_3.innerHTML = 'Loose Fit Solid Crew-Neck T-Shirt';
    title_W_4.innerHTML = 'Cargo Shorts with Insert Pockets';

  }





iconSearch.addEventListener("click",()=>{
boxSearch.style.width='70%';
boxSearch.style.backgroundColor ='white';
boxSearch.style.border ='1px solid black';
iconSearch.style.right="260px"
iconSearch.style.transition="all ease 1s"
boxSearch.style.borderRadius ='10px';
boxSearch.style.transition='all ease 1s'

});

function viewList() { 
    window.location = "./wishlistSection.html"; 
}
function viewCart() { 
    window.location = "./cartSection.html"; 
}

function viewLogin(){
    window.location = "./loginSection.html"; 

}

function shopButton(){
    window.location="http://127.0.0.1:5500/PROJECT%20-%203/wishlistSection.html";
}

function CART(){
    window.location ="./cart.html";
}











