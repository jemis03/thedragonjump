sc = true;
score = 0;
// Audio.play('music.mp3');
audio= new Audio("music2.mp3")
audiog=new Audio('gameover1.wav')
document.onkeydown = function (e) {
    // console.log('key code is ' + e.keyCode)
    // audio= new audio("music.mp3")
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('dinoanimate');
        setTimeout(() => {
            dino.classList.remove('dinoanimate');
        }, 1000);
    }
    if (e.keyCode == 39) {

        dino = document.querySelector('.dino');
        dino.classList.add('dinol')
        dino.style.left = (dx + 200) + 'px';
        setTimeout(() => {
            dino.classList.remove('dinol')

        }, 1000);

    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dino.classList.add('dinor')
        // if (dino.style.right == (100 + 'vw')) {
        //     dx= (dx-10) + 'px';
        // }
        dino.style.left = (dx - 200) + 'px';
        setTimeout(() => {
            dino.classList.remove('dinor')

        }, 1000);
    }


    if (e.keyCode == 32) {
        setTimeout(() => {
            audio.play();
        }, -10);
        score = 0;
        scorecont = document.querySelector('.scorecont');
        update(score);
        // gameover.style.visibility = 'hidden'
        // dino = document.querySelector('.dino');
        // dino.classList.add('dinoanimate');
        monster = document.querySelector('.monster');
        monster.classList.add('monsteranimate');
        monster.style.animationDuration = 6 + 's';
        gameover.style.visibility = 'hidden'
        
    }

}

setInterval(() => {
    dino = document.querySelector('.dino')
    gameover = document.querySelector('.gameover')
    monster = document.querySelector('.monster')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'))
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('bottom'))

    mx = parseInt(window.getComputedStyle(monster, null).getPropertyValue('left'))
    my = parseInt(window.getComputedStyle(monster, null).getPropertyValue('bottom'))

    x = Math.abs(mx - dx)
    y = Math.abs(my - dy)
    console.log(dx)
    if (dx >= (1050 + 'px')) {
            dx= 1050 + 'px';
        }

    // console.log(x,y)
    if (x < 90 && y < 80) {
        gameover.style.visibility = 'visible'
        scorecont = document.querySelector('.scorecont');
        score = score - 1;
        update(score);
        monster.classList.remove('monsteranimate');
        gameover.innerHTML = 'Game Over';
        gameover.style.fontSize = 100 + 'px';
        // scorecont.classList.add('scoreanimate')
        // scorecont.style.fontSize = 50 + 'px';
        // scorecont.style.marginTop = 215 + 'px';
        // scorecont.style.marginRight = 420 + 'px';
        // scorecont.style.color = 'brown';
        audiog.play()
        audio.pause()
        // setTimeout(() => {
        //     dino = document.querySelector('.dino')
            dino.style.left = 23 + 'px';

        // }, 1000);

    }
    else if (x < 200 && sc) {
        scorecont = document.querySelector('.scorecont');
        score += 1;
        update(score);
        sc = false;
        setTimeout(() => {
            sc = true;
        }, 1000);
        setTimeout(() => {
            speed = parseFloat(window.getComputedStyle(monster, null).getPropertyValue('animation-duration'));
            newdur = speed - 0.2;
            // console.log("your new duration is " + newdur);
            monster.style.animationDuration = newdur + 's';
        }, 1000);
        


    }

    // if (x<90 && y<80 && sc==true) {

    // }
}, 10);

function update(score) {

    scorecont.innerHTML = 'Your score: ' + score;
}

