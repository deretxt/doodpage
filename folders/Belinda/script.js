import { initLazyLoad } from '../../js/lazy-load.js';

const videos = [
    { id: "odurgxw9u2m1", title: "Belinda 1" },
    { id: "iprcw0axrsuv", title: "Belinda 2" },
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