const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Définir le dossier de destination pour les fichiers téléchargés
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Créez un dossier "uploads" dans le répertoire de votre projet
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname); // Conservez le nom d'origine du fichier
    }
});

const upload = multer({ storage });

// Servez les fichiers statiques depuis le dossier "uploads"
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Route pour gérer le téléchargement de fichiers
app.post('/upload', upload.single('screenshot'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'Aucun fichier téléchargé.' });
    }

    return res.json({ message: 'Fichier téléchargé avec succès.' });
});

app.listen(port, () => {
    console.log(`Serveur en cours d'exécution sur le port ${port}`);
});