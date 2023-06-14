document.querySelector("button.button-menu-toggle")//Esta es la manera de cambiar con java script a una clase creada en CCS
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})/*cambia la classe creada en css*/
function showAlert() { alert('¡Hola, esta es una alerta desde JavaScript');}