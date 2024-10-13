// Script pour gérer le formulaire de contact
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Récupérer les valeurs des champs du formulaire
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simuler l'envoi du message avec une simple validation
    if (name && email && message) {
        document.getElementById('confirmationMessage').innerText = "Merci " + name + ", votre message a été envoyé avec succès !";
        
        // Réinitialiser le formulaire
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('confirmationMessage').innerText = "Veuillez remplir tous les champs.";
    }
});
