import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  BannerContainer,
  InformacoesBanner,
  RodapeInformacoes,
} from "./styles";

import banner from "../../../../assets/logoPrincipal.svg";

export function Banner() {
  return (
    <BannerContainer>
      <InformacoesBanner>
        <p>Encontre o café perfeito para qualquer hora do dia</p>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <RodapeInformacoes>
          <div>
            <span>
              <ShoppingCart size={18} />
            </span>
            <span>Compra simples e segura</span>
          </div>
          <div>
            <span>
              <Package size={18} />
            </span>
            <span>Embalagem mantém o café intacto</span>
          </div>
          <div>
            <span>
              <Timer size={18} />
            </span>
            <span>Entrega rápida e rastreada</span>
          </div>
          <div>
            <span>
              <Coffee size={18} />
            </span>
            <span>O café chega fresquinho até você</span>
          </div>
        </RodapeInformacoes>
      </InformacoesBanner>
      <div>
        <img src={banner} alt="banner" />
      </div>
    </BannerContainer>
  );
}
