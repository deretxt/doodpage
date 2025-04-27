const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            const placeholder = entry.target;
            const videoUrl = placeholder.dataset.src;
            
            const iframe = document.createElement('iframe');
            iframe.src = videoUrl;
            iframe.allowFullscreen = true;
            iframe.loading = "lazy";
            iframe.setAttribute('allow', 'autoplay; fullscreen');
            
            placeholder.innerHTML = '';
            placeholder.appendChild(iframe);
            
            videoObserver.unobserve(placeholder);
        }
    });
}, { 
    threshold: 0.1,
    rootMargin: "200px"
});

export function initLazyLoad() {
    document.querySelectorAll('.video-player').forEach(player => {
        videoObserver.observe(player);
    });
}