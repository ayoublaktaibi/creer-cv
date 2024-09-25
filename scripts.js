// Ajout dynamique de champs pour les langues
document.getElementById('add-language').addEventListener('click', function () {
    var newLanguageField = document.createElement('input');
    newLanguageField.setAttribute('type', 'text');
    newLanguageField.setAttribute('name', 'languages[]');
    newLanguageField.setAttribute('placeholder', 'Langue supplémentaire');
    newLanguageField.setAttribute('required', true);
    document.getElementById('languages-container').appendChild(newLanguageField);
});

// Ajout dynamique de champs pour les centres d'intérêts
document.getElementById('add-interest').addEventListener('click', function () {
    var newInterestField = document.createElement('input');
    newInterestField.setAttribute('type', 'text');
    newInterestField.setAttribute('name', 'interests[]');
    newInterestField.setAttribute('placeholder', 'Centre d\'intérêt supplémentaire');
    newInterestField.setAttribute('required', true);
    document.getElementById('interests-container').appendChild(newInterestField);
});

// Ajout dynamique de champs pour l'expérience professionnelle
document.getElementById('add-experience').addEventListener('click', function () {
    var newExperienceField = document.createElement('textarea');
    newExperienceField.setAttribute('name', 'experience[]');
    newExperienceField.setAttribute('placeholder', 'Nouvelle expérience');
    newExperienceField.setAttribute('required', true);
    document.getElementById('experience-container').appendChild(newExperienceField);
});

// Ajout dynamique de champs pour le cursus scolaire
document.getElementById('add-cursus').addEventListener('click', function () {
    var newCursusField = document.createElement('textarea');
    newCursusField.setAttribute('name', 'cursus[]');
    newCursusField.setAttribute('placeholder', 'Nouveau cursus');
    newCursusField.setAttribute('required', true);
    document.getElementById('cursus-container').appendChild(newCursusField);
});

// Ajout dynamique de champs pour la formation
document.getElementById('add-formation').addEventListener('click', function () {
    var newFormationField = document.createElement('textarea');
    newFormationField.setAttribute('name', 'formation[]');
    newFormationField.setAttribute('placeholder', 'Nouvelle formation');
    newFormationField.setAttribute('required', true);
    document.getElementById('formation-container').appendChild(newFormationField);
});

// Ajout dynamique de champs pour les compétences
document.getElementById('add-skill').addEventListener('click', function () {
    var newSkillField = document.createElement('textarea');
    newSkillField.setAttribute('name', 'skills[]');
    newSkillField.setAttribute('placeholder', 'Nouvelle compétence');
    newSkillField.setAttribute('required', true);
    document.getElementById('skills-container').appendChild(newSkillField);
});

function previewPhoto(event) {
    const photoPreview = document.getElementById('photo-preview');
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function() {
        photoPreview.src = reader.result;
        photoPreview.style.display = 'block'; // Affiche l'aperçu
    }

    if (file) {
        reader.readAsDataURL(file); // Convertit le fichier en URL
    } else {
        photoPreview.src = ''; // Réinitialise l'aperçu si aucun fichier n'est sélectionné
        photoPreview.style.display = 'none'; // Masque l'aperçu
    }
}
