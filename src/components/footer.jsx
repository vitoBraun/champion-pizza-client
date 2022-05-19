import React, {useState} from "react";
import "../styles/footer.css";

const footer = () => {
  const [aboutVisible, setAboutvisible] = useState(false)
  return <div className="footer_container">
    <button onClick={() => { setAboutvisible(!aboutVisible) }}>О нас</button>
    {aboutVisible && <div>
      Champion-Pizza доставляет вкуснейшую пиццу в Кызыле. Наши профессионалы стараются для вас и готовят каждую пиццу с любовью, чтобы наш клиент был сыт и доволен.
      Наша команда работает с 11:00 до 23:00 и осуществляет доставку по всему Кызылу.
    </div>} 
  </div>;
};

export default footer;
