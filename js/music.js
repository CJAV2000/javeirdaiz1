document.addEventListener('DOMContentLoaded', () => {
    // Music Card Hover Effects
    const musicCards = document.querySelectorAll('.music-card');
    
    musicCards.forEach(card => {
        const hoverLayer = card.querySelector('.music-card-hover');
        
        card.addEventListener('mouseenter', () => {
            hoverLayer.style.opacity = '1';
            card.style.transform = 'scale(1.02)';
        });
        
        card.addEventListener('mouseleave', () => {
            hoverLayer.style.opacity = '0';
            card.style.transform = 'scale(1)';
        });
    });

    // Mini Player Interaction
    const miniPlayer = document.querySelector('.mini-player');
    const playPreviewButtons = document.querySelectorAll('.play-preview');
    
    playPreviewButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const musicCard = e.target.closest('.music-card');
            const albumTitle = musicCard.querySelector('.album-title').textContent;
            
            // Simulated audio preview (replace with actual audio logic)
            const trackInfo = miniPlayer.querySelector('.track-info');
            trackInfo.querySelector('.current-track').textContent = albumTitle;
            
            // Trigger mini player visibility or audio play
            miniPlayer.classList.add('active');
        });
    });

    // Parallax-like Scroll Effect for Music Section
    const musicSection = document.getElementById('music');
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;
        const translateY = scrollPosition * 0.3;
        
        musicSection.style.transform = `translateY(${translateY}px)`;
    });
});