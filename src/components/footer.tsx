import React from "react";
import "../styles/footer.css";

const footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>О нас</h6>
            <p className="text-justify">
              Champion-Pizza доставляет вкуснейшую пиццу в Кызыле. Наши
              профессионалы стараются для вас и готовят каждую пиццу с любовью,
              чтобы наш клиент был сыт и доволен. Наша команда работает с 11:00
              до 23:00 и осуществляет доставку по всему Кызылу.
            </p>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Контакты</h6>
            <p className="text-justify">
              Адрес:
              <br />
              <a
                href="https://yandex.ru/maps/-/CCUJa4aBOB"
                rel="noopener noreferrer"
                target="_blank"
              >
                г. Кызыл, Бай-Хаакская 2/1, ТД Артыш
              </a>
              <br />
              <br />
              Номера телефонов:
              <br />{" "}
            </p>
            <ul>
              <li>
                {" "}
                <a href="tel:+73942261818"> 6-18-18</a>
              </li>
              <li>
                {" "}
                <a href="tel:+7-923-397-18-18">+7-923-397-18-18</a>
              </li>
              <li>
                {" "}
                <a href="tel:+7-923-389-19-32">+7-923-252-88-88</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-6 col-md-3">
            <h6>Доставка и оплата</h6>
            <p className="text-justify">
              Минимальная сумма заказа для доставки 500₽
              <br />
              Доставка по всему городу
              <br />
              <br />
              Варианты оплаты:
              <br />{" "}
            </p>

            <ul>
              <li>Наличными курьеру</li>
              <li>По карте курьеру</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-20">
            © 2022 Champion-Pizza
            <div className="col-md-4 socials">
              <ul className="social-icons">
                <li>
                  <a
                    href="https://vk.com/champion_pizza17"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt="vk"
                      src="/template/img/VK.com-logo.png"
                      height="27px"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
