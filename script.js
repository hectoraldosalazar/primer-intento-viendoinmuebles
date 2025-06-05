document.addEventListener('DOMContentLoaded', function(){

   //Obtiene referencias al boton y a los iconos de las redes sociales contenidos dentro del boton
   const toggleButton= document.getElementById('toggleSocialButton');
   const iconsContainer= document.getElementById('socialIconsContainer');

   //verifica que ambos elementos existan en la pagina
   //Esto es importante por que este script.js tambien se carga en el index.html en donde estos IDs no existen
   if (toggleButton && iconsContainer){
      //Añade un click event listener al boton
      toggleButton.addEventListener('click', function(){
         // Alterna la clase 'social-icons-visible' en el contenedor de iconos
            // Esto cambiará su display de 'none' a 'flex' (o viceversa) según el CSS
            iconsContainer.classList.toggle('social-icons-visible');
      });q 
   }
});