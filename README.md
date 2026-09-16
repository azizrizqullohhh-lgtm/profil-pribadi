# Website Profil Pribadi — Struktur Project

```
profil-pribadi/
│
├── index.html          # Halaman utama (struktur/isi konten)
│
├── css/
│   └── style.css        # Semua styling/tampilan halaman
│
├── js/
│   └── script.js        # Interaksi: tahun otomatis, highlight menu aktif
│
├── assets/
│   ├── images/           # Taruh foto profil / gambar lain di sini
│   └── icons/            # Taruh ikon (favicon, ikon sosmed) di sini
│
└── README.md            # Dokumen ini
```

## Kenapa dipisah begini?

- **index.html** → hanya struktur & konten (HTML murni), tidak dicampur CSS/JS.
- **css/style.css** → seluruh styling terpusat di satu tempat, gampang diubah tanpa menyentuh HTML.
- **js/script.js** → logika interaktif terpisah, gampang di-debug.
- **assets/** → tempat khusus untuk file media, supaya tidak berantakan di folder utama.

Struktur ini sesuai poin penilaian Serkom: *"Penyusunan Fungsi, File atau Sumber Daya Pemrograman dalam organisasi yang Rapih"*.

## Cara pakai

1. Buka `index.html` di browser untuk melihat hasilnya.
2. Edit teks (nama, bio, kontak) langsung di `index.html`.
3. Edit warna/tampilan di `css/style.css`.
4. Taruh foto profil kamu di `assets/images/`, lalu tambahkan tag
   `<img src="assets/images/nama-file.jpg">` di bagian hero pada `index.html`.

## Struktur project keseluruhan (2 website)

Untuk tugas Serkom ini kamu perlu 2 project terpisah, masing-masing dengan
struktur folder rapi seperti di atas:

```
tugas-serkom-junior-web-dev/
│
├── profil-pribadi/       # Website statis (folder ini)
│   ├── index.html
│   ├── css/
│   ├── js/
│   └── assets/
│
└── toko-usaha/           # Website dinamis (PHP + MySQL)
    ├── index.php
    ├── css/
    ├── js/
    ├── assets/
    ├── includes/          # koneksi database, header/footer reusable
    │   └── koneksi.php
    └── database/
        └── toko.sql       # file export database
```
