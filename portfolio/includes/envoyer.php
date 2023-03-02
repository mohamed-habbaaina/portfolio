<?php
if(isset($_POST['email'])) {
     
    $to = "mohamed.habaina@gmail.com";
    $subject = "Nouveau message reçu depuis votre site web";
     
    // Récupérer les informations du formulaire
    $nom = htmlspecialchars(strip_tags(trim($_POST['nom'])));
    $email = htmlspecialchars(strip_tags(trim($_POST['email'])));
    $message = htmlspecialchars(strip_tags(trim($_POST['message'])));
     
    // Dans le cas où nos lignes comportent plus de 70 caractères, nous les coupons en utilisant wordwrap()
    $message = wordwrap($message, 70, "\r\n");

    // Mettre en forme le message
    $message = "Nom: ".$nom."\n\nEmail: ".$email."\n\nMessage:\n".$message;
     
    // En-têtes de l'e-mail
    $headers = "De: ".$nom." <".$email.">\r\nRépondre à : ".$email;
     
    // Envoyer l'e-mail
    mail($to, $subject, $message, $headers);
     echo 'ok';

    header('Location: ./../../index.html');
     
}
 else {
     echo 'no';
    // Si le formulaire n'a pas été soumis, rediriger l'utilisateur vers la page du formulaire
    header('Location: ./../../index.html');
}
