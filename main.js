
        // Fetch products from API and display them dynamically
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => {
                let productEl = "";

                for (let product of json) {
                    productEl += `
                        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                            <div class="card h-100">
                                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${product.title}</h5>
                                    <p class="card-text">$${product.price}</p>
                                    <a href="#" class="btn btn-primary mt-auto">View product</a>
                                </div>
                            </div>
                        </div>`;
                        

                }

                document.getElementById("product_list").innerHTML = productEl;
            })
            .catch(error => console.error('Error fetching products:', error));

            
