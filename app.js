// on button click, the album art randomly changes

// we will assign numbers to the various album covers inside a function

let generateBtn = document.getElementById('generateBtn');

let randomAlbum = document.getElementById('randomAlbum');

// to test onClick, let's just change the color of the button 

function changeBtnColor() {
    let randNum = Math.floor(Math.random() * 5);
    console.log(randNum);
    var btnColors = ['red', 'orange', 'green', 'blue', 'purple']
    generateBtn.style.color = 'white';
    generateBtn.style.backgroundColor = btnColors[randNum];
};

//generateBtn.addEventListener('click', changeBtnColor);

// function to assign numbers to albums 

function genRandAlbum() {
    // assign godweensatan a value of 1
    // first get random numbers 1-5
    let randNum = Math.floor(Math.random() * 9 + 1);
    console.log(randNum);
    if (randNum == 1) {
        randomAlbum.src = "album-covers/godweensatan.jpg";
    }
    else if (randNum == 2) {
        randomAlbum.src = "album-covers/thePod.jpg";
    }
    else if (randNum == 3) {
        randomAlbum.src = "album-covers/pureGuava.jpg";
    }
    else if (randNum == 4) {
        randomAlbum.src = "album-covers/chocolateandcheese.jpg";
    }
    else if (randNum == 5) {
        randomAlbum.src = "album-covers/countryGreats.jpg";
    }
    else if (randNum == 6) {
        randomAlbum.src = "album-covers/theMollusk.jpg";
    }
    else if (randNum == 7) {
        randomAlbum.src = "album-covers/whitePepper.jpg";
    }
    else if (randNum == 8) {
        randomAlbum.src = "album-covers/quebec.png";
    }
    else if (randNum == 9) {
        randomAlbum.src = "album-covers/laCucaracha.jpg";
    }
}

generateBtn.addEventListener('click', genRandAlbum);
