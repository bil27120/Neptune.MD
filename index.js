const express = require('express');
const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const app = express();

const PORT = process.env.PORT || 3000;

// Serveur Express pour tester le bot
app.get('/', (req, res) => res.send('Bot WhatsApp actif!'));

app.listen(PORT, () => console.log(`Bot running on port ${PORT}`));

// Setup client WhatsApp avec stockage local des sessions
const client = new Client({
  authStrategy: new LocalAuth()
});

client.on('qr', qr => {
  // Génère QR code dans la console pour scanner avec WhatsApp mobile
  qrcode.generate(qr, { small: true });
  console.log('QR code reçu, scanne avec ton téléphone');
});

client.on('ready', () => {
  console.log('Client WhatsApp prêt!');
});

client.on('message', msg => {
  if(msg.body.toLowerCase() === 'ping') {
    msg.reply('pong');
  }
});

client.initialize();
