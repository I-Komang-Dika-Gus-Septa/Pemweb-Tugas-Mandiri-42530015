let daftarBuku = [
  { id: 1, judul: 'Pemrograman Web Dasar', kategori: 'Teknologi', stok: 5 },
  { id: 2, judul: 'Algoritma & Struktur Data', kategori: 'Ilmu Komputer', stok: 3 },
  { id: 3, judul: 'Arsitektur Jaringan Komputer', kategori: 'Jaringan', stok: 4 }
];

exports.getBeranda = (req, res) => {
  res.render('pages/home', {
    pageTitle: 'Beranda Perpustakaan',
    userName: 'Mahasiswa TI',
    pesan: 'Selamat datang di Sistem Katalog Buku Mandiri.'
  });
};

exports.getAbout = (req, res) => {
  res.render('pages/about', {
    pageTitle: 'Tentang Kami',
    deskripsi: 'Sistem ini dibangun untuk memenuhi Tugas 2 Terstruktur Pemrograman Web.'
  });
};

exports.getKatalog = (req, res) => {
  const searchQuery = req.query.search ? req.query.search.toLowerCase() : '';
  
  let filteredBuku = daftarBuku;
  if (searchQuery) {
    filteredBuku = daftarBuku.filter(buku => 
      buku.judul.toLowerCase().includes(searchQuery) || 
      buku.kategori.toLowerCase().includes(searchQuery)
    );
  }

  res.render('pages/katalog', {
    pageTitle: 'Katalog Buku',
    bukuList: filteredBuku,
    searchQuery: searchQuery
  });
};

exports.postTambahBuku = (req, res) => {
  const { judulBuku, kategoriBuku, stokBuku } = req.body;

  daftarBuku.push({
    id: Date.now(), 
    judul: judulBuku,
    kategori: kategoriBuku,
    stok: parseInt(stokBuku)
  });

  res.redirect('/katalog');
};

// 5. Proses Hapus Buku (Delete)
exports.getHapusBuku = (req, res) => {
  const idBuku = parseInt(req.params.id);
  daftarBuku = daftarBuku.filter(buku => buku.id !== idBuku);
  res.redirect('/katalog');
};