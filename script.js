function nextPage() {
    document.getElementById('page-1').classList.add('hidden');
    document.getElementById('page-2').classList.remove('hidden');
    document.getElementById('photo-wall').classList.remove('hidden');
    scatterPhotos();
}

function prevPage() {
    document.getElementById('page-2').classList.add('hidden');
    document.getElementById('page-1').classList.remove('hidden');
    document.getElementById('photo-wall').classList.add('hidden');
}

function scatterPhotos() {
    const frames = document.querySelectorAll('.photo-frame');
    const isMobile = window.innerWidth < 600;

    // Defined corner zones to stay away from the center button area
    const zones = isMobile ? [
        { t: 5, l: 2 },   // Top Left
        { t: 5, l: 75 },  // Top Right
        { t: 80, l: 2 },  // Bottom Left
        { t: 80, l: 75 }  // Bottom Right
    ] : [
        { t: 10, l: 5 },  
        { t: 10, l: 80 }, 
        { t: 70, l: 5 },  
        { t: 70, l: 80 }  
    ];

    frames.forEach((frame, index) => {
        if(zones[index]) {
            const zone = zones[index];
            const rDeg = Math.floor(Math.random() * 16) - 8;
            
            frame.style.top = zone.t + (Math.random() * 3) + "%";
            frame.style.left = zone.l + (Math.random() * 3) + "%";
            frame.style.transform = `rotate(${rDeg}deg)`;
        }
    });
}

function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'floating-heart';
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    document.getElementById('heart-bg').appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
setInterval(createHeart, 450);