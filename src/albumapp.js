export function initAlbumApp() {
    console.log('Album App initialized');
    
    // Kode inisialisasi aplikasi
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = `
        <h1>Album Foto X DKV 3</h1>
        <div id="gallery"></div>
    `;
}

export const API_CONFIG = {
    BASE_URL: 'http://localhost:3000/api',
    MAX_PHOTOS: 50
};
