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


