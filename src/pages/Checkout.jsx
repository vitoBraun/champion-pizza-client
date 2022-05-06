import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "../styles/cart.css";
// import CartItem from "../components/cart/cart-item";
import { useSelector } from "react-redux";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { clearCart, placeNewOrder } from "../redux/actions/cart";
import "../styles/cart.css";

const Checkout = () => {
  const dispatch = useDispatch();

  const [takeAwayChecked, setTakeAwayChecked] = useState(false);
  const [addressDisplay, setAddressDisplay] = useState("block");
  const [addressRequired, setAddressRequired] = useState(true);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const name = useRef();
  const address = useRef();
  const comment = useRef();
  const phone = useRef();

  useEffect(() => {
    name.current.value = localStorage.getItem("name");
    address.current.value = localStorage.getItem("address");
    phone.current.value = localStorage.getItem("phone");
  }, [name, address, phone]);

  const [validated, setValidated] = useState(false);

  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const customer = {
        name: name.current.value,
        address: address.current.value,
        comment: comment.current.value,
        phone: phone.current.value,
        orderType: takeAwayChecked ? "Самовывоз" : "Доставка",
      };

      placeNewOrder({ totalPrice, totalCount, items }, customer);
      setOrderPlaced(true);

      // setOrderPlaced(true);
      //очищаем корзину
      dispatch(clearCart());
    }
    setValidated(true);
  };

  const takeAwaySwitchHandle = () => {
    if (takeAwayChecked) {
      setAddressDisplay("block");
      setAddressRequired(true);
      setTakeAwayChecked(false);
    } else {
      setAddressDisplay("none");
      setAddressRequired(false);
      setTakeAwayChecked(true);
    }
  };
  return (
    <div className="cart">
      <div style={{ width: "100%", textAlign: "center" }}>
        <img src="/template/img/logo.svg" alt="" />
      </div>
      {!orderPlaced ? (
        <div>
          <div style={{ width: "100%", textAlign: "center" }}>
            <h4>Оформление заказа</h4>
          </div>
          Вы заказываете {totalCount} товаров на {totalPrice} ₽
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            style={{ display: "block" }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Имя, фамилия</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Введите имя и фамилию"
                ref={name}
                onChange={(e) => {
                  localStorage.setItem("name", e.target.value);
                }}
              />

              <Form.Control.Feedback type="invalid">
                Это поле обязательное
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Check
              checked={takeAwayChecked}
              type="switch"
              id="custom-switch"
              label="Самовывоз"
              onChange={takeAwaySwitchHandle}
            />
            <Form.Group className="mb-3" style={{ display: addressDisplay }}>
              <Form.Label>Адрес доставки</Form.Label>
              <Form.Control
                required={addressRequired}
                type="text"
                placeholder="Введите адрес доставки"
                ref={address}
                onChange={(e) => {
                  localStorage.setItem("address", e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Это поле обязательное
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Номер телефона</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Номер телефона"
                ref={phone}
                onChange={(e) => {
                  localStorage.setItem("phone", e.target.value);
                }}
              />
              <Form.Control.Feedback type="invalid">
                Это поле обязательное
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Коментарий</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows="2"
                placeholder="Коментарий"
                ref={comment}
              />
            </Form.Group>
            <div style={{ width: "100%", textAlign: "center" }}>
              <Button type="submit" className="checkoutBut btn">
                ЗАКАЗАТЬ
              </Button>
            </div>
            <br /> <br />
          </Form>
        </div>
      ) : (
        <>
          <div style={{ width: "100%", textAlign: "center" }}>
            <h3>Заказ отправлен! </h3>
            Оператор свяжется с Вами в ближайшее время.
          </div>
        </>
      )}
      <div style={{ width: "100%", textAlign: "center" }}>
        <Link to="/" className="grayLink">
          Назад к меню
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
