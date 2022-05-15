let data=[
    {
        id:1,
        imgUrl:'https://blog.sms-man.com/wp-content/uploads/2021/10/historia-de-facebook-1280x720-1.jpg',
        title:'FACEBOOK 1',
        url:'https://www.facebook.com/'
    },
    {
        id:2,
        imgUrl:'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg',
        title:'GOOGLE 2',
        url:'https://www.google.com/'
    },
    {
        id:3,
        imgUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyC9G-S5jjkrzCG4s9zzAs34jFbz-vBmPavg&usqp=CAU',
        title:'YOUTUBE 3',
        url:'https://www.youtube.com/'
    },
    {
        id:4,
        imgUrl:'https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png',
        title:'AMAZON 4',
        url:'https://www.amazon.com/'
    }
];

let arrowLeft=document.getElementById('arrow-left');
let arrowRight=document.getElementById('arrow-right');
let sliderContent=document.getElementById('slider-content');
let dotsList=document.getElementsByClassName('dot');

let sliderindex=0;

function createAtag(item){
    let atag=document.createElement('a');
    atag.setAttribute('href',item.url);
    atag.classlist.add('slide');

    return atag;
}

function createImgtag(item){
    let Imgtag=document.createElement('img');
    Imgtag.setAttribute('src',item.imgUrl);
    Imgtag.classList.add('image-slider');

    return Imgtag;
}

function createH2tag(item){
    let h2tag=document.createElement('h2');
    h2tag.append(item.title);
    h2tag.classlist.add('slider-title');

    return h2tag;
}


function createDots(item){
    let dots=document.createElement('div');
    dots.classlist.add('dots');

    data.forEach((element) =>{
        let dot=document.createElement('div');
        dot.classlist.add('dot');
        dot.setAttribute('data-id',element.id-1);

        dot.onclick=function(event){
            let id=event.target.getAttribute('data-id');
            sliderindex=id;
            setslide();
        }
        dots.appendChild(dot);
    })
    return dots;
}


function setslide(){
    sliderContent.innerHTML= ' ';
    createImgtag(data[sliderindex]);

    let slideitem=createAtag(data[sliderindex]);
    let Imgtag=createImgtag(data[sliderindex]);
    let title=createH2tag(data[sliderindex]);
    let dots=createDots();

    slideitem.appendChild(title);
    sliderContent.appendChild(slideitem);
    sliderContent.appendChild(dots);

    currentDotActive();
    console.log(slideitem);
}

function currentDotActive(){
    dotsList[sliderindex].classlist.add('active');
}

function arrowleftclick(){
    if(sliderindex<=0){
        sliderindex=data.length-1;
        setslide();
        return;
    }
    sliderindex --;
    setslide();
}

function arrowrightclick(){
    if(sliderindex=data.length-1){
        sliderindex=0;
        setslide();
        return;
    }
    sliderindex ++;
    setslide();
}

arrowLeft.addEventListener('click',arrowleftclick);
arrowRight.addEventListener('click',arrowrightclick);

setInterval( () => {
    arrowrightclick();

},5000);

setslide();