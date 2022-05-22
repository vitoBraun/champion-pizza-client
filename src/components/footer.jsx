import React from "react";
import "../styles/footer.css";

const footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>О нас</h6>
            <p className="text-justify">Champion-Pizza доставляет вкуснейшую пиццу в Кызыле. Наши профессионалы стараются для вас и готовят каждую пиццу с любовью, чтобы наш клиент был сыт и доволен.

              Наша команда работает с 11:00 до 23:00 и осуществляет доставку по всему Кызылу..</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Контакты</h6>
            <p className="text-justify">
              Адрес:<br />
              г. Кызыл, Ленина 64<br />
              Номера телефонов:<br />
              6-18-18<br />
              8-923-397-18-18<br />
              8-923-389-1932</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Доставка и оплата</h6>
            <p className="text-justify">
              Доставка:
              Минимальная сумма заказа для доставки 500₽<br />
              Доставка по всему городу<br />
              Варианты оплаты:<br />
              Наличными курьеру<br />
              По карте курьеру<br />
            </p>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">© 2021 Champion-Pizza
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="http://vk.com"><img alt="vk" src="/template/img/VK.com-logo.svg" height="27px" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer >
  )

};

export default footer;
