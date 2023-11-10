const pato = document.querySelector('.pato');
const profileImage = document.getElementById('profile-image');

pato.addEventListener('mouseenter', () => {
pato.style.borderColor = '#6A8657'; /* Cambia el color del contorno del pato a verde */
profileImage.style.borderColor = '#6A8657'; /* Cambia el color del contorno de la imagen */
pato.style.transform = 'scale(1.1)'; /* Hace que el círculo crezca un poco */
});

pato.addEventListener('mouseleave', () => {
pato.style.borderColor = '#3F5033'; /* Restaura el color del contorno del pato */
profileImage.style.borderColor = '#3F5033'; /* Restaura el color del contorno de la imagen */
pato.style.transform = 'scale(1)'; /* Restaura el tamaño original del círculo */
});