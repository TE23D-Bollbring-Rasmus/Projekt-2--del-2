// Lyssnar på klickhändelser på alla produkter
document.querySelectorAll('.box2').forEach(function(box) {
    box.addEventListener('click', function() {
        // Hämta produktinformation från data-attributen
        const productName = box.getAttribute('data-name');
        const productPrice = box.getAttribute('data-price');
        
        // Skapa en produktobjekt för varukorgen
        const product = {
            name: productName,
            price: productPrice
        };

        // Hämta den nuvarande varukorgen från localStorage, eller skapa en tom array
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Lägg till den nya produkten i varukorgen
        cart.push(product);

        // Spara den uppdaterade varukorgen tillbaka till localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Valfritt: Visa varukorgens innehåll i konsolen (kan ersättas med visning på sidan)
        displayCart();
    });
});

// Funktion för att visa varukorgens innehåll
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Visa varukorgens innehåll i konsolen (kan ersättas med visning på sidan)
    console.log('Varukorg:', cart);
}

document.getElementById('clear-cart-button').addEventListener('click', function() {
    localStorage.removeItem('cart');  // Remove cart from localStorage
    displayCart();  // Refresh the cart display
});

