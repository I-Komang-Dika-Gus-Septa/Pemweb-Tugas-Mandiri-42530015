const express = require('express');
const router = express.Router();
const pageController = require('../controllers/page.controller.js');

router.get('/', pageController.getBeranda);
router.get('/about', pageController.getAbout);
router.get('/katalog', pageController.getKatalog);

router.post('/katalog/tambah', pageController.postTambahBuku);
router.get('/katalog/hapus/:id', pageController.getHapusBuku);

module.exports = router;