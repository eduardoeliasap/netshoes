import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';
import logo from '../../assets/images/logo.png';

// cartSize is the same variable name declared in the final file
function Header({ cartSize }) {
  // console.log(cartSize);

  return (
    <Container>
      <Link to="/">
        <img src={logo} width="50%" alt="NetShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

export default connect((state) => ({
  // state.cart is the reducer name that I want access
  cartSize: state.cart.length,
}))(Header);
