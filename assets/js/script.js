// Je déclare la fonction newPicture qui est appelé à l'évènement onmouseover
// Je cible mon image dont l'Id est 'Dodge' et le lui change dans la source le chemin de l'image, par celui de l'image qui doit apparaître au survol
function newPicture(){
  document.getElementById('Dodge').src='assets/img/Dodge2.png'; // Fais gaffe aux slashs inversés, sinon les images elles chargent pas kekw
}
// Je déclare la fonction newPicture qui est appelé à l'évènement onmouseout
function oldPicture(){
  document.getElementById('Dodge').src='assets/img/Dodge1.png';
}
