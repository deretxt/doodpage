import { initLazyLoad } from '../../js/lazy-load.js';

const videos = [
    { id: "b56fofmbdsfs", title: "Vera 1" },
    { id: "ssocdssy1l99", title: "Vera 2" },
    { id: "4gydnj0otpo0", title: "Vera 3" },
    { id: "wyxa6v6wrzjg", title: "Vera 4" },
    { id: "t3e1sc9vf2qt", title: "Vera 5" },
    { id: "8ydeec7ak3xr", title: "Vera 6" },
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