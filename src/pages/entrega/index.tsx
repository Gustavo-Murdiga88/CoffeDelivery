import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { ContainerDelivery, Icon, Information } from "./styles";

import entregador from "../../assets/entregador.svg";
import { useRequestContext } from "../../context/contextProducts";

export function Delivery() {
  const { deliveryLocal } = useRequestContext();
  return (
    <ContainerDelivery>
      <header>
        <p>Uhu! Pedido confirmado</p>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </header>
      <main>
        <div className="containerInformation">
          <Information>
            <aside>
              <Icon type="purple">
                <MapPin size={16} />
              </Icon>
              <p>
                Entrega em
                <strong>{`${deliveryLocal?.street || ""}, ${
                  deliveryLocal?.number || ""
                }`}</strong>
                <p>{`${deliveryLocal?.district || ""} - ${
                  deliveryLocal?.city || ""
                }`}</p>
              </p>
            </aside>
            <aside>
              <Icon type="yellow">
                <Timer size={16} />
              </Icon>
              <p>
                Previsão de entrega
                <p>20 min - 30 min</p>
              </p>
            </aside>
            <aside>
              <Icon type="yellowDark">
                <CurrencyDollar size={16} />
              </Icon>
              <p>
                Pagamento na entrega
                <p>{deliveryLocal?.paidForm}</p>
              </p>
            </aside>
          </Information>
        </div>
        <img src={entregador} alt="simbolo do entregador" />
      </main>
    </ContainerDelivery>
  );
}
