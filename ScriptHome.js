var index = 0
var footer = document.getElementById('footerText')
var slides = document.getElementsByClassName("slides");
var len = slides.length;
showAuto(index);
showFooter(index);

function prev(){
    updateIndex(-1);
    show();
    showFooter();
}

function next(){
    updateIndex(1);
    show();
    showFooter();
}

function nextAuto(){
    updateIndex(1);
    showAuto();
    showFooter();
}

function updateIndex(x){
    index += x;
    if(index >= len){
        index = 0;
    }
    else if(index < 0){
        index = len-1;
    }
}

function show(){
    for(var x = 0;x < len; x++){
        slides[x].style.display = 'none';
    }
    slides[index].style.display = 'block';
}

function showAuto(){
    for(var x = 0;x < len; x++){
        slides[x].style.display = 'none';
    }
    slides[index].style.display = 'block';
    setTimeout(automatic,4000);
}

function showFooter(){
    if(index == 0){
        footer.innerHTML = 'Travel The World';
    }
    else if(index == 1){
        footer.innerHTML = 'Fly Through The Continent of Magic';
    }
    else if(index == 2){
        footer.innerHTML = 'Astounding Skills Visual Effects';
    }
    else if(index == 3){
        footer.innerHTML = 'Pretty and Cute Characters';
    }
    else if(index == 4){
        footer.innerHTML = 'Uncover The Secrets';
    }
}


$('.prev').click(function (e) { 
    $('#footerText').fadeOut();
    $(slides[index]).fadeOut(()=>{
        prev();
        $(slides[index]).fadeIn();
        $('#footerText').fadeIn();
    });
});

$('.next').click(function (e) { 
    $('#footerText').fadeOut();
    $(slides[index]).fadeOut(()=>{
        next();
        $(slides[index]).fadeIn();
        $('#footerText').fadeIn();
    });
});

function automatic(){
    $('#footerText').fadeOut();
    $(slides[index]).fadeOut(()=>{
        nextAuto();
        $(slides[index]).fadeIn();
        $('#footerText').fadeIn();
    });
}