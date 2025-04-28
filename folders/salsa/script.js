import { initLazyLoad } from '../../js/lazy-load.js';

const videos = [
    { id: "q7hzhp7s2tl0", title: "Buguru Salasa 1" },
    { id: "u4p9f7d9ikyy", title: "Buguru Salasa 2" },
    { id: "uz7p0h36ghwj", title: "Buguru Salasa 3" },
    { id: "5cg17b11w5rp", title: "Buguru Salasa 4" },
    { id: "vo1lv1yj1tvn", title: "Buguru Salasa 5" },
    { id: "0pjv1hxrdf9v", title: "Buguru Salasa 6" },
    { id: "p96nyq8zqrlu", title: "Buguru Salasa 7" },
    { id: "nmurn3xjgsyg", title: "Buguru Salasa 8" },
    { id: "hg5dt13bmexj", title: "Buguru Salasa 9" },
    { id: "44vpftha82kh", title: "Buguru Salasa 10" },
    { id: "e1tzubi9qacv", title: "Buguru Salasa 11" },
    { id: "n5aewqcnb4ql", title: "Buguru Salasa 12" },
    { id: "lb0gh7o0noci", title: "Buguru Salasa 13" },
    { id: "zp7fz0lfqrkx", title: "Buguru Salasa 14" },
    { id: "zxx6mlms2e64", title: "Buguru Salasa 15" },
    { id: "p7iqwakzup8c", title: "Buguru Salasa 16" },
    { id: "hugop9kdys7y", title: "Buguru Salasa 17" },
    { id: "5rdtce66ajnn", title: "Buguru Salasa 18" },
    { id: "luknpcg5tq9h", title: "Buguru Salasa 19" },
    { id: "clv39x4luprb", title: "Buguru Salasa 20" },
    { id: "cozfmvhrjf6r", title: "Buguru Salasa 21" },
    { id: "qyg1fos382z8", title: "Buguru Salasa 22" },
    { id: "3195vux5043s", title: "Buguru Salasa 23" },
    { id: "g2ftfzqdw7tt", title: "Buguru Salasa 24" },
    { id: "9m5r62zut0mn", title: "Buguru Salasa 25" },
    { id: "lmpe9t273l5n", title: "Buguru Salasa 26" },
    { id: "qkm9z4uwf4xf", title: "Buguru Salasa 27" },
    { id: "n5ffvwuybx4o", title: "Buguru Salasa 28" },
    { id: "pns68ot3rtmg", title: "Buguru Salasa 29" },
    { id: "x5jvqaief16f", title: "Buguru Salasa 30" },
    { id: "2wl1lhz9lwn4", title: "Buguru Salasa 31" },
    { id: "e1oteor7vepj", title: "Buguru Salasa 32" },
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