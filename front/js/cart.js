/*
localStorage.getItem("product", "id");

function getProductById(productId) {

    fetch(`http://localhost:3000/api/products/${productId}`)
        .then(function (res) {
            if (res.ok) {
                return res.json();
            }
        })
        .then(function ({ productId }) {
            console.log(product);

            // Insérer le total du panier
            let totalQuantity = document.getElementById('totalQuantity');
            totalQuantity.textContent = ;
            let totalPrice = document.getElementById('totalPrice');
            totalPrice.textContent = ;

        });

            .catch (function (err) {
        // Une erreur est survenue
        console.log(err);
    });
}

getProductById(productId);
*/