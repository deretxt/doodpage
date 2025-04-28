import { initLazyLoad } from '../../js/lazy-load.js';

const videos = [
    { id: "9re7mntyvaer", title: "Zara 1" },
    { id: "zkdq2fqk9z2k", title: "Zara 2" },
    { id: "oj6tks4zp6oc", title: "Zara 3" },
    { id: "rtha4j9sevll", title: "Zara 4" },
    { id: "j6o0hnp2xqhu", title: "Zara 5" },
    { id: "fg8xb0dintqq", title: "Zara 6" },
    // { id: "9re7mntyvaer", title: "Zara 7" },
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