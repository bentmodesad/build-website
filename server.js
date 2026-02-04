const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware untuk file statis
app.use(express.static(path.join(__dirname)));

// Route utama untuk album.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'album.html'));
});

// Route untuk halaman lain
app.get('/album', (req, res) => {
    res.sendFile(path.join(__dirname, 'album.html'));
});

app.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// API untuk data album (contoh)
app.get('/api/photos', (req, res) => {
    // Data dari localStorage atau database
    const photos = [
        { id: 1, title: "Foto 1", album: "kegiatan" },
        { id: 2, title: "Foto 2", album: "olahraga" }
    ];
    res.json(photos);
});

// Jalankan server
app.listen(PORT, () => {
    console.log(`Server berjalan di http://localhost:${PORT}`);
    console.log(`Album tersedia di http://localhost:${PORT}/album`);
});const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Session configuration
app.use(session({
    secret: 'dkv3-secret-key-2025',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 } // 24 hours
}));

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Data storage (in production, use database)
let users = [];
let announcements = [
    {
        id: 1,
        title: 'MAINTENANCE',
        content: 'TUNGGU YA SEDANG DI DIPROGAM.',
        type: 'important',
        date: '25 Nov 2023'
    },
    {
        id: 2,
        title: 'Pembagian Kelas',
        content: 'PEMBAGIAN KELAS X DKV 3 BERJUMLAH 34 SISWA.',
        type: 'event',
        date: '20 Juni 2025'
    },
    {
        id: 3,
        title: 'Pembagian Raport Semester',
        content: 'Pembagian raport semester ganjil akan dilaksanakan pada Sabtu, 23 Desember 2025 pukul 08.00 di aula sekolah.',
        type: 'task',
        date: '18 Nov 2026'
    }
];

let classMembers = [
    {
        id: 1,
        nama: "Indra Yulianti",
        nim: "DKV001",
        peran: "Ketua Kelas",
        deskripsi: "KETUA YANG BERTANGGUH JAWAB DAN DAPAT DI PERCAYA.",
        bidang: "Ilustrasi Digital & Astronomi",
        jenisKelamin: "P",
        avatar: "I"
    },
    {
        id: 2,
        nama: "ROBBY KRISNAWAN",
        nim: "DKV002",
        peran: "Wakil Ketua",
        deskripsi: "BISA BERTANGGUNG JAWAB DAN DAPAT DI ANDALKAN.",
        bidang: "Fotografi & Desain Grafis",
        jenisKelamin: "L",
        avatar: "R"
    },
    {
        id: 3,
        nama: "MELINA SEPTIAN ELSANTI",
        nim: "DKV003",
        peran: "Sekretaris",
        deskripsi: "PANDAI DAN DAPAT DI PERCAYA.",
        bidang: "Typography & Layout Design",
        jenisKelamin: "P",
        avatar: "M"
    },
    {
        id: 4,
        nama: "BELLA",
        nim: "DKV004",
        peran: "Bendahara",
        deskripsi: "AHLI MENGATUR KEUNGAN DAN ADIL .",
        bidang: "UI/UX Design & Ilustrasi",
        jenisKelamin: "P",
        avatar: "B"
    },
    {
        id: 5,
        nama: "AULINE SEVANI KRINISTIA",
        nim: "DKV005",
        peran: "Seksi Kebersihan",
        deskripsi: "SEKSI KEBERSIHAN PALING BERGUNA.",
        bidang: "SEKSI KEBERSIHAN",
        jenisKelamin: "P",
        avatar: "A"
    },
    {
        id: 6,
        nama: "ELROY BOAS KRINAMURTI",
        nim: "DKV006",
        peran: "SEKSI UPACARA",
        deskripsi: "TEGAS DAN BERANI.",
        bidang: "OSIS",
        jenisKelamin: "L",
        avatar: "E"
    },
    {
        id: 7,
        nama: "FRENDY ARI PRATAMA",
        nim: "DKV007",
        peran: "SEKSI KEAMANAN",
        deskripsi: "TEGAS DAN DAPAT DIPERCAYA.",
        bidang: "Character Design & Komik",
        jenisKelamin: "L",
        avatar: "F"
    },
    {
        id: 8,
        nama: "DIRGAHINTA ELLOKNUSA HAJENDA PULUNG",
        nim: "DKV008",
        peran: "SEKSI AGAMA ISLAM",
        deskripsi: "Baik Hati Dan Sopan.",
        bidang: "Typography & Lettering",
        jenisKelamin: "L",
        avatar: "D"
    },
    {
        id: 9,
        nama: "ALFINA DWI KRISTIANA",
        nim: "DKV009",
        peran: "SEKSI AGAMA KRISTEN",
        deskripsi: "Spesialis warna dan mood board. Inspirasinya dari nebula dan galaksi.",
        bidang: "Color Theory & Mood Board",
        jenisKelamin: "P",
        avatar: "A"
    },
    {
        id: 10,
        nama: "REVAN NOVERIO",
        nim: "DKV010",
        peran: "SEKSI OLAHRAGA",
        deskripsi: "SEHAT BUGAR DAN KUAT.",
        bidang: "Logo Design & Branding",
        jenisKelamin: "L",
        avatar: "R"
    },
    {
        id: 11,
        nama: "REVALIA KRISTIANA",
        nim: "DKV011",
        peran: "Anggota",
        deskripsi: "JUARA KELAS.",
        bidang: "Digital Illustration",
        jenisKelamin: "P",
        avatar: "R"
    },
    {
        id: 12,
        nama: "NOVITA CINTA PERMATA DEWI",
        nim: "DKV012",
        peran: "Anggota",
        deskripsi: "MURID DARI X DKV 3.",
        bidang: "Packaging Design",
        jenisKelamin: "P",
        avatar: "N"
    },
    {
        id: 13,
        nama: "RINDANI WULAN SARI",
        nim: "DKV013",
        peran: "Anggota",
        deskripsi: "MURID DARI X DKV 3.",
        bidang: "Packaging Design",
        jenisKelamin: "P",
        avatar: "R"
    },
    {
        id: 14,
        nama: "KRISTYAN  ANUGRAH HERI SETIAWAN",
        nim: "DKV014",
        peran: "Seksi Keamanan",
        deskripsi: "MURID X DKV 3",
        bidang: "DESIGN GRAFIS",
        jenisKelamin: "L",
        avatar: "K"
    },
    {
        id: 15,
        nama: "Farand Aditya Nugroho",
        nim: "DKV015",
        peran: "Anggota",
        deskripsi: "MURID X DKV 3",
        bidang: "DESIGN GRAFIS",
        jenisKelamin: "L",
        avatar: "F"
    }
];

// Routes
app.get('/', (req, res) => {
    res.render('index', {
        user: req.session.user,
        announcements: announcements,
        members: classMembers
    });
});

app.get('/anggota', (req, res) => {
    res.render('anggota', {
        user: req.session.user,
        members: classMembers
    });
});

app.get('/album', (req, res) => {
    res.render('album', {
        user: req.session.user
    });
});

app.get('/login', (req, res) => {
    if (req.session.user) {
        return res.redirect('/');
    }
    res.render('login', { error: null });
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Simple authentication (in production, use proper authentication)
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        req.session.user = {
            id: user.id,
            username: user.username,
            fullname: user.fullname,
            role: user.role
        };
        res.redirect('/');
    } else {
        res.render('login', { error: 'Username atau password salah!' });
    }
});

app.get('/register', (req, res) => {
    if (req.session.user) {
        return res.redirect('/');
    }
    res.render('register', { error: null });
});

app.post('/register', (req, res) => {
    const { fullname, email, nim, username, password, confirm_password, role } = req.body;

    // Validation
    if (password !== confirm_password) {
        return res.render('register', { error: 'Password dan konfirmasi password tidak cocok!' });
    }

    if (!/^DKV\d{3}$/.test(nim.toUpperCase())) {
        return res.render('register', { error: 'Format NIM tidak valid! Gunakan format: DKV001' });
    }

    if (password.length < 6) {
        return res.render('register', { error: 'Password minimal 6 karakter!' });
    }

    // Check if username already exists
    if (users.find(u => u.username === username)) {
        return res.render('register', { error: 'Username sudah digunakan!' });
    }

    // Create new user
    const newUser = {
        id: users.length + 1,
        fullname,
        email,
        nim: nim.toUpperCase(),
        username,
        password, // In production, hash the password
        role,
        registeredAt: new Date()
    };

    users.push(newUser);

    // Auto login after registration
    req.session.user = {
        id: newUser.id,
        username: newUser.username,
        fullname: newUser.fullname,
        role: newUser.role
    };

    res.redirect('/');
});

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

// API Routes for dynamic content
app.get('/api/members', (req, res) => {
    res.json(classMembers);
});

app.get('/api/announcements', (req, res) => {
    res.json(announcements);
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server X DKV3 berjalan di http://localhost:${PORT}`);
    console.log(`🌟 Menjelajah Semesta Kreativitas`);
});
// Pencarian real-time
searchInput.addEventListener('input', () => {
    const searchQuery = searchInput.value.trim();
    const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
    renderGallery(activeFilter, searchQuery);
});
// Auto login dengan session yang tersimpan
const savedSession = loadUserSession();
if (savedSession && users[savedSession.username]) {
    performLogin(savedSession.username, savedSession.role);
}
const newPhoto = {
    id: nextPhotoId++,
    title: file.name.replace(/\.[^/.]+$/, ""),
    album: album,
    date: new Date().toISOString().split('T')[0],
    url: e.target.result,
    uploader: currentUser.name, // Tambahan
    description: `Diupload oleh ${currentUser.name} pada ${new Date().toLocaleDateString('id-ID')}` // Tambahan
};
// Untuk developer/testing
window.debugAlbum(); // Lihat semua data di console
window.exportAlbumData(); // Export data ke console
// Tambahkan di bagian atas script (setelah deklarasi variabel users)
let appConfig = {
    name: "Album Foto X DKV 3",
    className: "X DKV 3",
    school: "SMK N 1 CLUWAK",
    albums: [
        { id: "kegiatan", name: "Kegiatan Sekolah", icon: "calendar-check", color: "#6a11cb" },
        { id: "olahraga", name: "Olahraga", icon: "running", color: "#2575fc" },
        { id: "seni", name: "Seni & Budaya", icon: "paint-brush", color: "#ff6b9d" },
        { id: "kelas", name: "Kelas", icon: "chalkboard-teacher", color: "#00b894" },
        { id: "lainnya", name: "Lainnya", icon: "star", color: "#ffa502" }
    ],
    theme: {
        primary: "#6a11cb",
        secondary: "#2575fc"
    }
};

// Fungsi untuk load konfigurasi dari package.json
async function loadAppConfig() {
    try {
        const response = await fetch('package.json');
        if (!response.ok) {
            throw new Error('Package.json tidak ditemukan');
        }
        
        const configData = await response.json();
        
        // Gunakan konfigurasi dari package.json jika ada
        if (configData.albumConfig) {
            appConfig = {
                ...appConfig,
                ...configData.albumConfig,
                // Pastikan albums selalu ada
                albums: configData.albumConfig.albums || appConfig.albums
            };
            console.log('✅ Konfigurasi dari package.json dimuat');
        }
        
        // Terapkan konfigurasi ke aplikasi
        applyAppConfig();
        
    } catch (error) {
        console.log('⚠️ Menggunakan konfigurasi default:', error.message);
        applyAppConfig(); // Tetap terapkan config default
    }
}

// Fungsi untuk menerapkan konfigurasi ke UI
function applyAppConfig() {
    // Update judul aplikasi
    document.title = appConfig.name;
    
    // Update logo di header
    const logoElement = document.querySelector('.logo span');
    if (logoElement) {
        logoElement.textContent = appConfig.name;
        // Tambahkan subjudul jika ada
        const logoDiv = document.querySelector('.logo div');
        if (logoDiv && appConfig.className) {
            const subTitle = logoDiv.querySelector('.sub-title') || 
                document.createElement('div');
            subTitle.className = 'sub-title';
            subTitle.style.cssText = 'font-size: 14px; opacity: 0.8; margin-top: 5px;';
            subTitle.innerHTML = `<i class="fas fa-graduation-cap"></i> ${appConfig.className}`;
            
            if (!logoDiv.querySelector('.sub-title')) {
                logoDiv.appendChild(subTitle);
            }
        }
    }
    
    // Update footer
    const footer = document.querySelector('footer p:first-child');
    if (footer && appConfig.school) {
        footer.innerHTML = `&copy; 2023-2025 ${appConfig.name}. ${appConfig.school}`;
    }
    
    // Update dropdown album di upload panel
    updateAlbumDropdown();
    
    // Update filter buttons di galeri
    updateAlbumFilters();
    
    // Terapkan tema warna
    applyThemeColors();
}

// Update dropdown album di panel admin
function updateAlbumDropdown() {
    const albumSelect = document.getElementById('photoAlbum');
    if (!albumSelect) return;
    
    // Simpan nilai yang dipilih
    const selectedValue = albumSelect.value;
    
    // Clear existing options
    albumSelect.innerHTML = '';
    
    // Tambahkan opsi dari config
    appConfig.albums.forEach(album => {
        const option = document.createElement('option');
        option.value = album.id;
        option.textContent = `${getIconElement(album.icon)} ${album.name}`;
        albumSelect.appendChild(option);
    });
    
    // Kembalikan nilai yang dipilih jika masih valid
    if (appConfig.albums.some(a => a.id === selectedValue)) {
        albumSelect.value = selectedValue;
    }
}

// Update filter buttons di galeri
function updateAlbumFilters() {
    const filtersContainer = document.querySelector('.album-filters');
    if (!filtersContainer) return;
    
    // Clear existing buttons kecuali "Semua"
    const allBtn = filtersContainer.querySelector('[data-filter="all"]');
    filtersContainer.innerHTML = '';
    
    // Tambahkan kembali button "Semua"
    if (allBtn) {
        filtersContainer.appendChild(allBtn);
    } else {
        // Buat button "Semua" jika tidak ada
        const allButton = document.createElement('button');
        allButton.className = 'filter-btn active';
        allButton.dataset.filter = 'all';
        allButton.innerHTML = '<i class="fas fa-layer-group"></i> Semua';
        filtersContainer.appendChild(allButton);
    }
    
    // Tambahkan buttons dari config
    appConfig.albums.forEach(album => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.dataset.filter = album.id;
        button.innerHTML = `${getIconElement(album.icon)} ${album.name}`;
        button.style.borderLeft = `4px solid ${album.color || '#6a11cb'}`;
        filtersContainer.appendChild(button);
    });
    
    // Re-attach event listeners
    attachFilterListeners();
}

// Helper function untuk mendapatkan icon element
function getIconElement(iconName) {
    return `<i class="fas fa-${iconName}"></i>`;
}

// Terapkan tema warna dari config
function applyThemeColors() {
    if (!appConfig.theme) return;
    
    const style = document.createElement('style');
    style.id = 'dynamic-theme';
    
    // Hapus style lama jika ada
    const oldStyle = document.getElementById('dynamic-theme');
    if (oldStyle) oldStyle.remove();
    
    // Buat CSS dinamis berdasarkan tema
    const { primary, secondary } = appConfig.theme;
    
    style.textContent = `
        .login-btn, .upload-btn, .filter-btn.active, .photo-count-badge {
            background: linear-gradient(to right, ${primary}, ${secondary}) !important;
        }
        
        .browse-btn, .backup-btn {
            background: ${primary} !important;
        }
        
        .drag-drop-area {
            border-color: ${primary} !important;
        }
        
        .drag-drop-area i, .file-icon {
            color: ${primary} !important;
        }
        
        body {
            background: linear-gradient(135deg, ${primary} 0%, ${secondary} 100%) !important;
        }
        
        header {
            background: rgba(255, 255, 255, 0.1) !important;
        }
        
        .user-role-badge.admin {
            background: rgba(${hexToRgb(primary)}, 0.3) !important;
        }
        
        .user-role-badge.siswa {
            background: rgba(${hexToRgb(secondary)}, 0.3) !important;
        }
    `;
    
    document.head.appendChild(style);
}

// Helper function untuk convert hex ke rgb
function hexToRgb(hex) {
    // Remove # if present
    hex = hex.replace('#', '');
    
    // Parse hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    return `${r}, ${g}, ${b}`;
}

// Re-attach event listeners untuk filter buttons
function attachFilterListeners() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Hapus class active dari semua tombol
            filterBtns.forEach(b => b.classList.remove('active'));
            // Tambah class active ke tombol yang diklik
            this.classList.add('active');
            // Render galeri dengan filter yang dipilih
            const searchQuery = searchInput.value.trim();
            renderGallery(this.getAttribute('data-filter'), searchQuery);
        });
    });
}

// Modifikasi fungsi uploadAllFiles untuk menggunakan config album
async function uploadAllFiles() {
    if (selectedFiles.length === 0) {
        showNotification('Pilih file terlebih dahulu!', 'warning');
        return;
    }
    
    const albumId = photoAlbum.value;
    
    // Cari nama album dari config
    const albumConfig = appConfig.albums.find(a => a.id === albumId);
    const albumName = albumConfig ? albumConfig.name : albumId;
    
    // Tampilkan progress bar
    progressContainer.classList.add('active');
    progressFill.style.width = '0%';
    progressPercent.textContent = '0%';
    
    // Simulasi upload progresif
    let uploadedCount = 0;
    
    for (let i = 0; i < selectedFiles.length; i++) {
        const file = selectedFiles[i];
        
        // Simulasi proses upload dengan delay
        await simulateUpload(file, i);
        
        uploadedCount++;
        
        // Update progress bar
        const progress = Math.round((uploadedCount / selectedFiles.length) * 100);
        progressFill.style.width = `${progress}%`;
        progressPercent.textContent = `${progress}%`;
        
        // Generate photo object dengan data URL
        const reader = new FileReader();
        
        await new Promise(resolve => {
            reader.onload = function(e) {
                const newPhoto = {
                    id: nextPhotoId++,
                    title: file.name.replace(/\.[^/.]+$/, ""),
                    album: albumId,
                    date: new Date().toISOString().split('T')[0],
                    url: e.target.result,
                    uploader: currentUser.name,
                    description: `Diupload oleh ${currentUser.name} ke album ${albumName}`
                };
                
                photos.unshift(newPhoto);
                resolve();
            };
            reader.readAsDataURL(file);
        });
    }
    
    // Selesai upload
    setTimeout(() => {
        progressContainer.classList.remove('active');
        savePhotosToStorage();
        renderGallery('all');
        updatePhotoCount();
        clearFilePreview();
        
        showNotification(`Berhasil mengupload ${selectedFiles.length} foto ke album ${albumName}!`, 'success');
    }, 500);
}

// Update fungsi renderGallery untuk menggunakan config album
function renderGallery(filter = 'all', searchQuery = '') {
    galleryGrid.innerHTML = '';
    
    let filteredPhotos = filter === 'all' 
        ? photos 
        : photos.filter(photo => photo.album === filter);
    
    // Apply search filter
    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filteredPhotos = filteredPhotos.filter(photo => 
            photo.title.toLowerCase().includes(query) ||
            (photo.description && photo.description.toLowerCase().includes(query))
        );
    }
    
    if (filteredPhotos.length === 0) {
        noResults.style.display = 'block';
        return;
    } else {
        noResults.style.display = 'none';
    }
    
    filteredPhotos.forEach(photo => {
        // Cari config album untuk warna
        const albumConfig = appConfig.albums.find(a => a.id === photo.album);
        const albumColor = albumConfig ? albumConfig.color : '#6a11cb';
        
        const photoCard = document.createElement('div');
        photoCard.className = 'photo-card';
        photoCard.innerHTML = `
            <div style="border-top: 4px solid ${albumColor}; height: 4px;"></div>
            <img src="${photo.url}" alt="${photo.title}" class="photo-img" loading="lazy">
            <div class="photo-info">
                <div class="photo-title">${photo.title}</div>
                <div class="photo-date">
                    <i class="far fa-calendar-alt"></i> ${formatDate(photo.date)}
                    <br>
                    <i class="fas fa-folder" style="color: ${albumColor}"></i> 
                    ${albumConfig ? albumConfig.name : photo.album}
                    ${photo.uploader ? `<br><i class="fas fa-user"></i> ${photo.uploader}` : ''}
                </div>
                ${currentUser?.role === 'admin' ? 
                    `<button class="delete-btn" onclick="deletePhoto(${photo.id})">
                        <i class="fas fa-trash"></i> Hapus
                    </button>` 
                    : ''}
            </div>
        `;
        galleryGrid.appendChild(photoCard);
    });
}

// Panggil loadAppConfig saat inisialisasi
window.addEventListener('DOMContentLoaded', () => {
    loadAppConfig();
    
    // Update debug function untuk menampilkan config
    window.debugAlbum = function() {
        console.log('=== DEBUG X DKV 3 ALBUM ===');
        console.log('App Config:', appConfig);
        console.log('Total Photos:', photos.length);
        console.log('Next Photo ID:', nextPhotoId);
        console.log('Current User:', currentUser);
        console.log('LocalStorage Usage:', JSON.stringify(localStorage).length + ' bytes');
        console.log('Selected Files:', selectedFiles.length);
        console.log('==========================');
    };
});

// Update bagian login untuk menggunakan nama dari config
function performLogin(username, role) {
    currentUser = { 
        username, 
        role: users[username].role,
        name: users[username].name
    };
    
    saveUserSession(currentUser);
    
    loginContainer.classList.remove('active');
    mainContainer.classList.add('active');
    
    const roleBadgeClass = role === 'admin' ? 'admin' : 'siswa';
    userRoleDisplay.innerHTML = `
        <strong>${currentUser.name}</strong>
        <span class="user-role-badge ${roleBadgeClass}">
            <i class="fas fa-${role === 'admin' ? 'crown' : 'user-graduate'}"></i>
            ${role === 'admin' ? 'Administrator' : 'Siswa'}
        </span>
    `;
    
    if (role === 'admin') {
        adminPanel.classList.add('active');
        mainContainer.classList.add('admin-view');
        showNotification(`Selamat datang Administrator di ${appConfig.name}!`, 'success');
    } else {
        showNotification(`Selamat datang di ${appConfig.name}, ${currentUser.name}!`, 'success');
    }
    
    renderGallery('all');
    updatePhotoCount();
    errorMsg.style.display = 'none';
}



