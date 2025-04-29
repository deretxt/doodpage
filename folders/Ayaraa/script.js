import { initLazyLoad } from '../../js/lazy-load.js';

const videos = [
    { id: "vfh1ghd8cx0y", title: "Ayaraa 1" },
    { id: "6dzhzi3iz7is", title: "Ayaraa 2" },
    { id: "gf2w4hx2hxdq", title: "Ayaraa 3" },
    { id: "a72551scv8gz", title: "Ayaraa 4" },
    { id: "5ssgl691yr2b", title: "Ayaraa 5" },
    { id: "3qbrzru1zhkn", title: "Ayaraa 6" },
    { id: "3vjihcdna4nv", title: "Ayaraa 7" },
    { id: "wxrpnfytdph0", title: "Ayaraa 8" },
    { id: "hpqm3pxqmwgk", title: "Ayaraa 9" },
    { id: "yop6drzahjn3", title: "Ayaraa 10" },
    { id: "t8moq73xqzmf", title: "Ayaraa 11" },
    { id: "a8rqn07b1b4k", title: "Ayaraa 12" },
    { id: "83skjmqdvg2b", title: "Ayaraa 13" },
    { id: "s7dfj4puejp0", title: "Ayaraa 14" },
    { id: "4ety405pd866", title: "Ayaraa 15" },
    { id: "9we7pagun2wr", title: "Ayaraa 16" },
    { id: "p14586wpbygr", title: "Ayaraa 17" },
    { id: "2aa3u2fb803x", title: "Ayaraa 18" },
    { id: "qolx6nl3bdfh", title: "Ayaraa 19" },
    { id: "ei4ufzdqzvtc", title: "Ayaraa 20" },
    { id: "vgk88uss1w2g", title: "Ayaraa 21" },
    { id: "w9jj3k5clq6m", title: "Ayaraa 22" },
    { id: "aaeuu684k4ex", title: "Ayaraa 23" },
    { id: "08nzpr7pxj7f", title: "Ayaraa 24" },
    { id: "0wuuws95cac3", title: "Ayaraa 25" },
    { id: "gilbhk3dzi26", title: "Ayaraa 26" },
    { id: "bq2yiekkjh9g", title: "Ayaraa 27" },
    { id: "ech3ikntmqw0", title: "Ayaraa 28" },
    { id: "0n57xsu8ut0h", title: "Ayaraa 29" },
    { id: "72t6bmrqw3uq", title: "Ayaraa 30" },
    { id: "u4ua29r2y6wi", title: "Ayaraa 31" },
    { id: "yr9nqv6ndczs", title: "Ayaraa 32" },
    { id: "yp3204ye4our", title: "Ayaraa 33" },
    { id: "irvvx5mm3zt6", title: "Ayaraa 34" },
    { id: "fc7kgb23quo3", title: "Ayaraa 35" },
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