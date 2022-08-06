import React, { Component } from "react";
import CartSummary from "./CartSummary";

import { Link } from "react-router-dom";
import { NavLink, NavItem } from "reactstrap";
export default class Navi extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              Northwind App
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNavDropdown"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/form1">
                    Form 1
                  </a>
                </li>
                <NavItem>
                  <NavLink>
                    <Link to="form2">Form 2</Link>
                  </NavLink>
                </NavItem>
                <li className="nav-item">
                  <a className="nav-link" href="/">
                    Pricing
                  </a>
                </li>
                <CartSummary
                  removeFromCart={this.props.removeFromCart}
                  cart={this.props.cart}
                />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
