window.addEventListener('load', function() {
    // Hämta varukorgen från localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Hämta container för varukorgen och totalpriser
    const cartContainer = document.getElementById('cart-container');
    const totalContainer = document.getElementById('total-container');

    // Logga varukorgen för att säkerställa att vi får rätt data
    console.log('Varukorg vid laddning:', cart);

    // Om varukorgen är tom, visa ett meddelande
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Din varukorg är tom.</p>';
    } else {
        let totalPrice = 0;

        // Lägg till varje produkt i varukorgen
        cart.forEach(function(product) {
            const productDiv = document.createElement('div');
            productDiv.classList.add('cart-item');
            productDiv.innerHTML = `<p>${product.name} - ${product.price} kr</p>`;

            cartContainer.appendChild(productDiv);

            // Lägg till priset för den här produkten till totalen
            totalPrice += parseFloat(product.price);
        });

        // Visa totalpriset
        totalContainer.innerHTML = `<p>Total: ${totalPrice.toFixed(2)} kr</p>`;
    }

    // Hantera rensning av varukorgen
    document.getElementById('clear-cart-button').addEventListener('click', function() {
        localStorage.removeItem('cart');
        location.reload();
    });
});
