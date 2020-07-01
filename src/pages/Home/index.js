/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { connect } from 'react-redux'; // Connect with Redux State
import { bindActionCreators } from 'redux';
import { MdShoppingCart } from 'react-icons/md';
import api from '../../services/api';
import { formatPrice } from '../../util/format';

// When I use "* as" I can use all the function declared inside the module
// ex: CartActions.addToCart
import * as CartActions from '../../store/modules/cart/actions';

import { ProductList } from './styles';

class Home extends Component {
  state = {
    products: [],
  };

  // Get api data at every page reset
  async componentDidMount() {
    const response = await api.get('products'); // rota product dentro da api

    /**
     * With that I can list all the products inside the render using the constant de-structuring { products } = this.state;
     * this.setState({ products: response.data });
     */

    const data = response.data.map((product) => ({
      ...product,
      priceFormated: formatPrice(product.price),
    }));

    this.setState({ products: data });
  }

  handleAddProduct = (id) => {
    // The dispatch shoot a redux action
    // Always I shoot a dispatch all reducers will shooted
    const { addToCartRequest } = this.props;

    // dispatch(CartActions.addToCart(product));
    addToCartRequest(id);

    // Redirect to /cart route.
    // *** Problem: The addToCardRequest must be slowest than props.history.push and in this case
    // *** props.history.push may be executed before addToCartRequest
    // *** For this, we must do this inside saga.js
    // this.props.history.push('/cart');
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />
            <strong>{product.title}</strong>
            <span>{product.priceFormated}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product.id)}
            >
              <div>
                <MdShoppingCart size={16} color="#FFF" /> 3
                {/* {amount[product.id] || 0} */}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = (state) => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {}),
});

// convert actions redux in proprieties of our componnents
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(CartActions, dispatch);

// The first parameters must be mapStatesToProps. If you have not yet, use null
export default connect(null, mapDispatchToProps)(Home);
