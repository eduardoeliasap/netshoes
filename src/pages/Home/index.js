import React, { Component } from 'react';
import { MdShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

import { ProductList } from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  // Pega os dados da api a cada reinicio de página
  async componentDidMount() {
    const response = await api.get('products'); // rota product dentro da api

    // Com isso posso listar todos os produtos
    // dentro do render utilizando
    // a desistruturação const { products } = this.state;
    // this.setState({ products: response.data });

    const data = response.data.map((product) => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  render() {
    const { products } = this.state;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

            <button type="button">
              <div>
                <MdShoppingCart size={16} color="#FFF" />
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}
