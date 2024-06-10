import { getPenangananById, getPenangananByNamaPenyakit, getPenangananByNamaHama, addPenanganan, updatePenanganan, deletePenanganan } from '../models/penangananModel.js';

// Mendapatkan informasi penanganan berdasarkan ID
const getPenangananByIdHandler = async (req, res) => {
  const { id_penanganan } = req.params;
  try {
    const result = await getPenangananById(id_penanganan);
    if (!result) {
      return res.status(404).send('Penanganan tidak ditemukan');
    }
    res.json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Mendapatkan informasi penanganan berdasarkan nama_penyakit
const getPenangananByNamaPenyakitHandler = async (req, res) => {
  const { nama_penyakit } = req.params;
  try {
    const result = await getPenangananByNamaPenyakit(nama_penyakit);
    if (result.length === 0) {
      return res.status(404).send('Penanganan tidak ditemukan');
    }
    res.json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Mendapatkan informasi penanganan berdasarkan nama_hama
const getPenangananByNamaHamaHandler = async (req, res) => {
  const { nama_hama } = req.params;
  try {
    const result = await getPenangananByNamaHama(nama_hama);
    if (result.length === 0) {
      return res.status(404).send('Penanganan tidak ditemukan');
    }
    res.json(result);
  } catch (err) {
    res.status(500).send(err);
  }
};

// Menambahkan informasi penanganan baru
const addPenangananHandler = async (req, res) => {
  const { nama_penyakit, nama_hama, penanganan } = req.body;
  if (!nama_penyakit || !penanganan) {
    return res.status(400).send('Nama penyakit dan penanganan wajib diisi');
  }
  try {
    const result = await addPenanganan(nama_penyakit, nama_hama, penanganan);
    res.status(201).json({ id_penanganan: result.insertId, nama_penyakit, nama_hama, penanganan });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Memperbarui informasi penanganan
const updatePenangananHandler = async (req, res) => {
  const { id_penanganan } = req.params;
  const { nama_penyakit, nama_hama, penanganan } = req.body;
  try {
    const result = await updatePenanganan(id_penanganan, nama_penyakit, nama_hama, penanganan);
    if (result.affectedRows === 0) {
      return res.status(404).send('Penanganan tidak ditemukan');
    }
    res.json({ id_penanganan, nama_penyakit, nama_hama, penanganan });
  } catch (err) {
    res.status(500).send(err);
  }
};

// Menghapus informasi penanganan
const deletePenangananHandler = async (req, res) => {
  const { id_penanganan } = req.params;
  try {
    const result = await deletePenanganan(id_penanganan);
    if (result.affectedRows === 0) {
      return res.status(404).send('Penanganan tidak ditemukan');
    }
    res.status(200).send('Penanganan sukses terhapus');
  } catch (err) {
    res.status(500).send(err);
  }
};

export { getPenangananByIdHandler, getPenangananByNamaPenyakitHandler, getPenangananByNamaHamaHandler, addPenangananHandler, updatePenangananHandler, deletePenangananHandler };


// import { getPenangananById, getPenangananByNamaPenyakit, getPenangananByNamaHama, addPenanganan, updatePenanganan, deletePenanganan } from '../models/penangananModel.js';

// // Mendapatkan informasi penanganan berdasarkan ID
// const getPenangananByIdHandler = async (req, res) => {
//   const { id_penanganan } = req.params;
//   try {
//     const result = await getPenangananById(id_penanganan);
//     if (!result) {
//       return res.status(404).send('Penanganan tidak ditemukan');
//     }
//     res.json(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// // Mendapatkan informasi penanganan berdasarkan nama_penyakit
// const getPenangananByNamaPenyakitHandler = async (req, res) => {
//   const { nama_penyakit } = req.params;
//   try {
//     const result = await getPenangananByNamaPenyakit(nama_penyakit);
//     if (result.length === 0) {
//       return res.status(404).send('Penanganan tidak ditemukan');
//     }
//     res.json(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// // Mendapatkan informasi penanganan berdasarkan nama_hama
// const getPenangananByNamaHamaHandler = async (req, res) => {
//   const { nama_hama } = req.params;
//   try {
//     const result = await getPenangananByNamaHama(nama_hama);
//     if (result.length === 0) {
//       return res.status(404).send('Penanganan tidak ditemukan');
//     }
//     res.json(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// // Menambahkan informasi penanganan baru
// const addPenangananHandler = async (req, res) => {
//   const { nama_penyakit, nama_hama, penanganan } = req.body;
//   if (!nama_penyakit) {
//     return res.status(400).send('Nama penyakit wajib diisi');
//   }
//   try {
//     const result = await addPenanganan(nama_penyakit,nama_hama, penanganan);
//     res.status(201).json({ id_penanganan: result.insertId, nama_penyakit, nama_hama, penanganan });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// // Memperbarui informasi penanganan
// const updatePenangananHandler = async (req, res) => {
//   const { id_penanganan } = req.params;
//   const { nama_penyakit, nama_hama, penanganan } = req.body;
//   try {
//     const result = await updatePenanganan(id_penanganan, nama_penyakit, nama_hama, penanganan);
//     if (result.affectedRows === 0) {
//       return res.status(404).send('Penanganan tidak ditemukan');
//     }
//     res.json({ id_penanganan, nama_penyakit, nama_hama, penanganan });
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };

// // Menghapus informasi penanganan
// const deletePenangananHandler = async (req, res) => {
//   const { id_penanganan } = req.params;
//   try {
//     const result = await deletePenanganan(id_penanganan);
//     if (result.affectedRows === 0) {
//       return res.status(404).send('Penanganan tidak ditemukan');
//     }
//     res.status(200).send('Penanganan sukses terhapus');
//   } catch (err) {
//     res.status(500).send(err);
//   }
// };


// export { getPenangananByIdHandler, getPenangananByNamaPenyakitHandler, getPenangananByNamaHamaHandler, addPenangananHandler, updatePenangananHandler, deletePenangananHandler };
