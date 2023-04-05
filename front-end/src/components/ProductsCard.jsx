import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import CartContext from '../context/CartContext';

function ProductsCard({ product }) {
  const { updateCart, getProductById } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const customerProducts = 'customer_products__element';
  const cardPrice = 'card-price';
  const cardTitle = 'card-title';

  function decrement() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  useEffect(() => {
    const storageQuantity = getProductById(product.id);
    if (storageQuantity) setQuantity(storageQuantity.quantity);
  }, [getProductById, product.id]);

  useEffect(() => {
    updateCart({
      id: product.id,
      name: product.name,
      quantity,
      price: Number(product.price),
    });
  }, [quantity]);

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
        width="100px"
      />

      <p
        data-testid={ `${customerProducts}-${cardTitle}-${product.id}` }
      >
        { product.name }
      </p>

      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${product.id}` }
        onClick={ decrement }
      >
        -
      </button>

      <input
        data-testid={ `customer_products__input-card-quantity-${product.id}` }
        min={ 0 }
        value={ quantity }
        onChange={ ({ target: { value } }) => setQuantity(parseInt(value, 10)) }
      />

      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${product.id}` }
        onClick={ () => setQuantity(quantity + 1) }
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
