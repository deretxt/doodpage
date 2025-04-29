import { initLazyLoad } from '../../js/lazy-load.js';

const videos = [
    { id: "evsurjqadw8h", title: "Shizuka 1" },
    { id: "mq9orvjbaaj2", title: "Shizuka 2" },
    { id: "ydvyt5w00jdm", title: "Shizuka 3" },
    { id: "4z2q5ig6vy2p", title: "Shizuka 4" },
    { id: "7764zhtlvdmv", title: "Shizuka 5" },
    { id: "tusroh7667u5", title: "Shizuka 6" },
    { id: "hmd5e7lrj22c", title: "Shizuka 7" },
    { id: "36t33220mukw", title: "Shizuka 8" },
    { id: "mvwg08m64exc", title: "Shizuka 9" },
    { id: "wbpp5bbttp31", title: "Shizuka 10" },
    { id: "mxtnozqcm0pf", title: "Shizuka 11" },
    { id: "0qbst0bsavo9", title: "Shizuka 12" },
    { id: "egj149cczngy", title: "Shizuka 13" },
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