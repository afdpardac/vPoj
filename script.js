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
    // Extreme corner zones for larger photos
    const zones = [
        { t: [2, 10], l: [2, 5] },   // Top Left
        { t: [2, 10], l: [85, 93] },  // Top Right
        { t: [80, 88], l: [2, 5] },   // Bottom Left
        { t: [80, 88], l: [85, 93] }  // Bottom Right
    ];

    frames.forEach((frame, index) => {
        const zone = zones[index];
        const rTop = Math.floor(Math.random() * (zone.t[1] - zone.t[0])) + zone.t[0];
        const rLeft = Math.floor(Math.random() * (zone.l[1] - zone.l[0])) + zone.l[0];
        const rDeg = Math.floor(Math.random() * 20) - 10;
        
        frame.style.top = rTop + "%";
        frame.style.left = rLeft + "%";
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
    setTimeout(() => heart.remove(), 4000);
}
setInterval(createHeart, 400);