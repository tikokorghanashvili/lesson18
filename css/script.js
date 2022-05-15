let data=[
    {
        id:1,
        imageurl:'https://blog.sms-man.com/wp-content/uploads/2021/10/historia-de-facebook-1280x720-1.jpg',
        title:'slide title 1',
        url:'https://www.facebook.com/'
    },
    {
        id:2,
        imageurl:'https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg',
        title:'slide title 2',
        url:'https://www.google.com/'
    },
    {
        id:3,
        imageurl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyC9G-S5jjkrzCG4s9zzAs34jFbz-vBmPavg&usqp=CAU',
        title:'slide title 3',
        url:'https://www.youtube.com/'
    },
    {
        id:4,
        imageurl:'https://images-na.ssl-images-amazon.com/images/G/01/gc/designs/livepreview/a_generic_white_10_us_noto_email_v2016_us-main._CB627448186_.png',
        title:'slide title 4',
        url:'https://www.amazon.com/'
    }
];

let arrowleft=document.getElementById('arrow-left');
let arrowright=document.getElementById('arrow-right');
let slidercontent=document.getElementById('slider-content');

let sliderindex=0;

function createatag(item){
    let atag=document.createComment('a');
    atag.setattribute('href',item.url);
    atag.classlist.add('slide');

    return atag;
}

function createimgtag(item){
    let imgtag=document.createElement('img');
    imgtag.setattribute('src',item.imageurl);
    imgtag.setAttribute('alt',item.title);
    atag.classlist.add('image-slider');

    return imgtag;
}

function createh2tag(item){
    let h2tag=document.createComment('h2');
    h2tag.append(item.title);
    h2tag.classlist.add('slider-title');

    return h2tag;
}


function setslide(){
    let slideitem=createatag(data[sliderindex]);
    let imgtag=createimgtag(data[sliderindex]);
    let h2tag=createh2tag(data[sliderindex]);

    slideitem.appendChild(imgtag);
    slideitem.appendChild(h2tag);


    console.log(slideitem,imgtag,h2tag);
}
setslide();