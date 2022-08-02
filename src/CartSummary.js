import React, { Component } from "react";
import { Badge, NavItem, NavLink } from "reactstrap";
import {Link} from 'react-router-dom';

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="/"
          id="navbarDropdown"
          role="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Your Cart - {this.props.cart.length}
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
          {this.props.cart.map((cartItem) => (
            <li>
              <a key={cartItem.product.id} className="dropdown-item" href="/">
                {cartItem.product.productName} -
                <Badge color="success">{cartItem.quantity}</Badge>
              </a>
              <Badge
                color="danger"
                onClick={() => this.props.removeFromCart(cartItem.product)}
              >
                X
              </Badge>
            </li>
          ))}
          <Link to="cart">Go to Cart</Link>
        </ul>
      </li>
    );
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Card</NavLink>
      </NavItem>
    );
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0
          ? this.renderSummary()
          : this.renderEmptyCart()}
      </div>
    );
  }
}
