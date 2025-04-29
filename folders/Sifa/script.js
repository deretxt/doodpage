import { initLazyLoad } from '../../js/lazy-load.js';

const videos = [
    { id: "oopl9eifzkom", title: "Sifa 1" },
    { id: "mv1d2rl30qc6", title: "Sifa 2" },
    { id: "r882j9997joq", title: "Sifa 3" },
    { id: "kbu9oploye5p", title: "Sifa 4" },
    { id: "lvhcv4ip2hhv", title: "Sifa 5" },
    { id: "mqz24lmz4xy2", title: "Sifa 6" },
    { id: "pj35r3qbvg2o", title: "Sifa 7" },
    { id: "c9bvc1sevsrh", title: "Sifa 8" },
    { id: "fooaqnia8pke", title: "Sifa 9" },
    { id: "kn1kcb3gcted", title: "Sifa 10" },
    { id: "gkqrbhyia3n5", title: "Sifa 11" },
    { id: "7598vivgzcwm", title: "Sifa 12" },
    { id: "3t0nsgocx3z6", title: "Sifa 13" },
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