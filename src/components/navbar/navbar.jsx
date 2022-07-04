import React, { useState } from "react";
import Categories from "../catalog/categories";
import "../../styles/navbar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Navbar } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

const navbar = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);

  const handleNav = () => {

    if (burgerToggle === true) {
      setBurgerToggle(false);
    } else {
      setBurgerToggle(true);
    }

    if (isOpen === true) {
      isOpenToggle(false);
    } else {
      isOpenToggle(true);
    }
  };

  const [isOpen, isOpenToggle] = useState(false);
  const [burgerToggle, setBurgerToggle] = useState(false);
  const menuStyle = useSpring({
    opacity: !isOpen ? "0" : "1",
    display: !isOpen ? "none" : "block",
  });

  return (
    <Navbar className="navbar" sticky="top">
      <div className="header">
        <div className="brand_container">
          <div className="navbar_brand1">
            <a href="/">
              <img height="40px" src="/template/img/logo.svg" alt="лого" />
            </a>
          </div>
        </div>
        <div id="container" className="container"><div className="burger">
          <div
            className={burgerToggle ? "burger_butt_active" : "burger_butt"}
            onClick={() => {
              isOpenToggle(isOpen ? false : true);
              setBurgerToggle(burgerToggle ? false : true);
            }}
          >
            <span className="burger_line bline1"></span>
            <span className="burger_line bline2"></span>
            <span className="burger_line bline3"></span>
            <span className="burger_line bline4"></span>
          </div>
        </div>
          <animated.div className="springContainer" style={menuStyle}>
            <div className="header_menu_mobile">
              <div className="hm_container">
                <a href="tel:+73942261818" className="callback1">
                  <img height="17px" src="/template/img/phone.png" alt="" />
                  <div
                    style={{ color: "black" }}
                    id="phone_number1"
                    className="phone_number1"
                  >
                    6-18-18
                  </div>
                </a>
              </div>
              <div className="hm_container">
                <a
                  style={{ color: "black" }}
                  href="https://yandex.ru/maps/-/CCUJa4aBOB"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    height="20px"
                    src="/template/img/adress-icon.png"
                    alt=""
                  />
                  г. Кызыл, Бай-Хаакская 2/1, ТД Артыш
                </a>
              </div>

              <Categories
                className="navbar_menu_mobile"
                handleNav={handleNav}
              />
            </div>
          </animated.div>
          <a href="/" className="navbar_brand">
            <img src="/template/img/logo.svg" alt="" />
          </a>
          <Categories className="navbar_menu_pc" />
          <div id="rightnav" className="rightnav">
            <div>
              <a href="tel:+73942261818" className="callback">
                <div id="phone-number" className="phone_number">
                  <img height="20px" src="/template/img/phone.png" alt="" />{" "}
                  6-18-18
                </div>
              </a>
            </div>
            <span> Работаем ежедневно 10:00-23:00 </span><br />
            <span> Заказы принимаются 10:00-22:45 </span>
          </div>
          <div id="cart-all" className="cart_all">
            <div id="navbar-cart" className="navbar_cart">
              <div id="cart-info" className="cart_info">
                <span>
                  <div id="cart-count" className="cart_count"></div>
                  {totalCount > 0 && totalCount + " шт."}
                </span>
                <br />
                <span>
                  <div id="cart-count-sum" className="cart_count_sum"></div>
                  {totalCount > 0 && totalPrice + " ₽"}
                </span>
              </div>
            </div>
            <div id="cart-img" className="cart_img" />
            <Link to="/cart">
              <img
                id="cartimg"
                className="cartimg"
                width="30"
                height="30"
                alt=""
                src="/template/img/cart.png"
              />
            </Link>
          </div>
        </div>
      </div>
      <div className="action_bar"></div>
    </Navbar>
  );
};

export default navbar;
