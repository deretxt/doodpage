import { initLazyLoad } from '../../js/lazy-load.js';

const videos = [
    { id: "pm5zad9penko", title: "Amel 1" },
    { id: "p8upvbjj0a4n", title: "Amel 2" },
    { id: "lwtgbtz7ctil", title: "Amel 3" },
    { id: "ivlerfmpdguv", title: "Amel 4" },
    { id: "3syht9t9i1vk", title: "Amel 5" },
    { id: "8isd0v0q9jd5", title: "Amel 6" },
    { id: "97slyenza2zz", title: "Amel 7" },
    { id: "durwdakw6pz9", title: "Amel 8" },
    { id: "kb9eftrhl4e4", title: "Amel 9" },
    { id: "edcfd14ccaik", title: "Amel 10" },
    { id: "rz8er38rkzkc", title: "Amel 11" },
    { id: "n5nfs30x7qqs", title: "Amel 12" },
    { id: "rplc4c9a0zy8", title: "Amel 13" },
    { id: "m1g3uyn2qgbz", title: "Amel 14" },
    { id: "bkl5z9nifd27", title: "Amel 15" },
    { id: "1lujje7w0f00", title: "Amel 16" },
    { id: "ohhhx8kw7x07", title: "Amel 17" },
    { id: "e1hgwesmgcc2", title: "Amel 18" },
    { id: "5ffma3nmzof4", title: "Amel 19" },
    { id: "fr2q8b029wvu", title: "Amel 20" },
    { id: "jykx3ckukzd2", title: "Amel 21" },
    { id: "i2khwcjt0t80", title: "Amel 22" },
    { id: "tm2i6217ppx8", title: "Amel 23" },
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