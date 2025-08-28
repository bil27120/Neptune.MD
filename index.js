console.log("Neptune.MD V1.0.0 - Bot démarré");

process.stdin.on("data", (input) => {
  const message = input.toString().trim().toLowerCase();

  switch (message) {
    case "ping":
      console.log("pong");
      break;
    case "hello":
      console.log("Salut! Je suis Neptune.MD 🤖");
      break;
    case "help":
      console.log("Commandes disponibles: ping, hello, help, info");
      break;
    case "info":
      console.log("Neptune.MD V1.0.0 - Votre bot sympa sous Node.js");
      break;
    default:
      console.log("Commande inconnue, tape ‘help’ pour la liste.");
  }
});
