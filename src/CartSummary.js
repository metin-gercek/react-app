import React, { Component } from "react";
import { Badge, NavItem, NavLink } from "reactstrap";

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
          <li>
            {this.props.cart.map((cartItem) => (
              <a key={cartItem.product.id} className="dropdown-item" href="/">
                {cartItem.product.productName} -
                <Badge color="success">{cartItem.quantity}</Badge>
              </a>
            ))}
          </li>
        </ul>
      </li>
    );
  }
  renderEmptyCart() {
    return (
      <NavItem>
        <NavLink>Empty Card</NavLink>
      </NavItem>
    )
  }
  render() {
    return <div>{this.props.cart.length>0?this.renderSummary():this.renderEmptyCart()}</div>;
  }
}
