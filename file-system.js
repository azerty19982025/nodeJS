const fs = require('fs');

// Créer welcome.txt
fs.writeFile('welcome.txt', 'Hello Node', (err) => {
  if (err) throw err;
  console.log('Fichier welcome.txt créé.');
});

// Lire hello.txt (à créer manuellement pour tester)
fs.readFile('hello.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Erreur lecture hello.txt :', err.message);
  } else {
    console.log('Contenu de hello.txt :', data);
  }
});
