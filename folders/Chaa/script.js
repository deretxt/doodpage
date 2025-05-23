import { initLazyLoad } from '../../js/lazy-load.js';

const videos = [
    { id: "02h9n0ccu5md", title: "Chaa 1" },
    { id: "0gcvw4796txa", title: "Chaa 2" },
    { id: "j2g0d5ex50gs", title: "Chaa 3" },
    { id: "5895fenjzgtu", title: "Chaa 4" },
    { id: "zkv7r4vkvdqa", title: "Chaa 5" },
    // Tambahkan video lainnya
];

export function loadVideos() {
    const grid = document.getElementById('videoGrid');
    
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <div class="video-player" data-src="https://doodstream.com/e/${video.id}">
                <div class="loading-placeholder">
                    <i class="fas fa-spinner fa-spin"></i>
                    Loading ${video.title}...
                </div>
            </div>
            <div class="video-info">
                <h3>${video.title}</h3>
            </div>
        `;
        grid.appendChild(videoItem);
    });
    
    // Inisialisasi lazy load setelah video dimuat
    initLazyLoad();
}

// Jalankan saat halaman dimuat
document.addEventListener('DOMContentLoaded', loadVideos);