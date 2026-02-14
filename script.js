function scatterPhotos() {
    const frames = document.querySelectorAll('.photo-frame');
    const isMobile = window.innerWidth < 600;

    // Mobile zones: extreme corners
    const zones = isMobile ? [
        { t: 2, l: 2 },   // Top Left
        { t: 2, l: 75 },  // Top Right
        { t: 85, l: 2 },  // Bottom Left
        { t: 85, l: 75 }  // Bottom Right
    ] : [
        { t: 10, l: 5 },  // Desktop spacing
        { t: 10, l: 80 },
        { t: 70, l: 5 },
        { t: 70, l: 80 }
    ];

    frames.forEach((frame, index) => {
        if(zones[index]) {
            const zone = zones[index];
            const rDeg = Math.floor(Math.random() * 15) - 7;
            
            frame.style.top = zone.t + "%";
            frame.style.left = zone.l + "%";
            frame.style.transform = `rotate(${rDeg}deg)`;
        }
    });
}