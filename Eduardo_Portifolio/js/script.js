function showThis(target, el) {
    var viewer = document.getElementById('viewer');
    var titleBar = document.getElementById('titleBar');
    var info = document.getElementById('info');

    titleBar.innerText = el.children[1].innerText;
    
    info.innerText = `-${titleBar.innerText.toLowerCase()}-`
    for (let i = 0; i < viewer.children.length; i++) {
        if (viewer.children[i].id === target) {
            viewer.children[i].style.display = 'contents';
        } else {
            viewer.children[i].style.display = 'none';
        }
    }
}


function theme() {

    const staticLink = 'img/'
    var themes = {
        red_velvet: [
            staticLink + 'sapatos.jpg',
            staticLink + 'ldr.jpg',
            staticLink + 'ww.jpg',
        ],
        black : [
            staticLink + 'slow.jpg',
            staticLink + 'walls.jpg',
            staticLink + 'golden.jpg'
        ],
        riba_mar: [
            staticLink + 'riba_deus.jpg',
            staticLink + 'morcego.jpg',
            staticLink + 'palhaco.jpg'
        ],
        blue_sky: [
            staticLink + 'sky.jpg',
            staticLink + 'cria.jpg',
            staticLink + 'selvagem.jpg'
        ]
    }

    //---------------3---------------7---------------12---------------18->
    //--------riba_mar---|--------BW-----|------blue_sky------|------red_velvet------|->

    var hour = new Date();
    hour = hour.getHours();
    
    var bgImage = document.getElementById("themeImage")

    if ((hour >= 0 && hour < 3) || (hour >= 18 && hour < 24)) {
        document.write('<link href="css/riba_mar.css" rel="stylesheet" type:"text/css">');
        let n = Math.floor(Math.random() * themes.riba_mar.length);
        bgImage.src = themes.riba_mar[n];
        return 0;
    }

    if (hour < 7) {
        let n = Math.floor(Math.random() * themes.black.length);
        bgImage.src = themes.black[n];
        return 0;
    }

    if (hour < 12) {
        document.write('<link href="css/lime.css" rel="stylesheet" type:"text/css">');
        let n = Math.floor(Math.random() * themes.blue_sky.length);
        bgImage.src = themes.blue_sky[n];
        return 0;
    }

    if (hour < 18) {
        document.write('<link href="css/red_velvet.css" rel="stylesheet" type:"text/css">');
        let n = Math.floor(Math.random() * themes.red_velvet.length);
        bgImage.src = themes.red_velvet[n];
        return 0;
    }
}

function events() {
    var profile = document.getElementById('profile')
    var profileMenu = document.getElementById('menu')
    var profileCard = document.getElementById('profile-card')
    var bgImage = document.getElementById("themeImage")

    profile.addEventListener('mouseover', () => {
        profileMenu.style.backgroundColor = 'var(--bg)'
        bgImage.style.transition = profileMenu.style.transition = '0.5s'
        profileMenu.style.borderStyle = 'solid'
        profileMenu.style.animation = '1s pulse .5s infinite alternate'
        profileCard.style.boxShadow = '0 0 100px var(--sat2), inset 0 0 100px var(--sat2)'
        bgImage.style.mixBlendMode = 'screen'
        
    })
    profile.addEventListener('mouseout', () => {
        profileMenu.style.backgroundColor = 'transparent'
        profileMenu.style.boxShadow = profileMenu.style.animation = profileCard.style.boxShadow = 'none'
        profileMenu.style.borderStyle = 'dashed'
        bgImage.style.opacity = '100%'
        bgImage.style.mixBlendMode = 'initial'
        bgImage.style.zIndex = 0
    })
}

function main() {
    theme();
    let width = (window.innerWidth > 0) ? window.innerWidth : screen.width

    if (width > 900) {
        events();
    }
}

main()

