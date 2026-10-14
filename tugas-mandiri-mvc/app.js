const express = require('express');
const app = express();
const pageRoutes = require('./routes/page.routes');

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.use('/', pageRoutes);

app.use((req, res) => {
  res.status(404).send('<h1>Error 404</h1><p>Halaman tidak ditemukan.</p>');
});

app.listen(3000, () => {
  console.log('[SERVER] Tugas Mandiri aktif di http://localhost:3000');
});