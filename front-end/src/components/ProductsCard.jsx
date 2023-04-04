import React from 'react';
import PropTypes from 'prop-types';

function ProductsCard({ product }) {
  const customerProducts = 'customer_products__element';
  const cardPrice = 'card-price';
  const cardTitle = 'card-title';

  return (
    <div>
      <h2
        data-testid={ `${customerProducts}-${cardPrice}-${product.id}` }
      >
        R$
        {' '}
        { (product.price).toString().replace('.', ',') }
      </h2>

      <img
        data-testid={ `customer_products__img-card-bg-image-${product.id}` }
        src={ product.url_image }
        alt={ product.name }
      />

      <p
        data-testid={ `${customerProducts}-${cardTitle}-${product.id}` }
      >
        { product.name }
      </p>

      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
      >
        -
      </button>

      <input
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        value="0"
      />

      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
      >
        +
      </button>
    </div>
  );
}

ProductsCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.number,
  image: PropTypes.string,
}.isRequired;

export default ProductsCard;
