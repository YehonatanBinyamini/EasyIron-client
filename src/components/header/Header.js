import React from "react";

function Header({ path }) {
    return (
      <header className="main-header">
        <nav className="main-header__nav">
          <ul className="main-header__item-list">
            <li className="main-header__item">
              <NavLink to="/" activeClassName="active">Shop</NavLink>
            </li>
            <li className="main-header__item">
              <NavLink to="/products" activeClassName="active">Products</NavLink>
            </li>
            <li className="main-header__item">
              <NavLink to="/cart" activeClassName="active">Cart</NavLink>
            </li>
            <li className="main-header__item">
              <NavLink to="/orders" activeClassName="active">Orders</NavLink>
            </li>
            <li className="main-header__item">
              <NavLink to="/admin/add-product" activeClassName="active">Add Product</NavLink>
            </li>
            <li className="main-header__item">
              <NavLink to="/admin/products" activeClassName="active">Admin Products</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
}

import default Header;