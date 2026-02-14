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
    const isMobile = window.innerWidth < 768;

    // Defined zones based on device type
    const zones = isMobile ? [
        { t: 5, l: 5 },   // Top Left
        { t: 5, l: 60 },  // Top Right
        { t: 75, l: 5 },  // Bottom Left
        { t: 75, l: 60 }  // Bottom Right
    ] : [
        { t: 10, l: 10 }, // Top Left
        { t: 10, l: 80 }, // Top Right
        { t: 70, l: 10 }, // Bottom Left
        { t: 70, l: 80 }  // Bottom Right
    ];

    frames.forEach((frame, index) => {
        const zone = zones[index];
        const rDeg = Math.floor(Math.random() * 20) - 10;
        
        frame.style.top = zone.t + (Math.random() * 5) + "%";
        frame.style.left = zone.l + (Math.random() * 5) + "%";
        frame.style.transform = `rotate(${rDeg}deg)`;
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
setInterval(createHeart, 400);