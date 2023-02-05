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

generateBtn.addEventListener('click', changeBtnColor);

// function to assign numbers to albums 

function genRandAlbum() {
    // assign godweensatan a value of 1
    // first get random numbers 1-5
    let randNum = Math.floor(Math.random() * 5 + 1);
    console.log(randNum);
    if (randNum == 1) {
        randomAlbum.src = "album-covers/thePod.jpg";
    }
}

//genRandAlbum();
