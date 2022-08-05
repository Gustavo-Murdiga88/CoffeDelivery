import { Trash } from "phosphor-react";
import { useFormContext } from "react-hook-form";
import { useRequestContext } from "../../../context/contextProducts";

import {
  ConfirmContainer,
  ContainerOrders,
  FlexColumn,
  SelectedOrder,
  CountButton,
  TitleBanner,
  FooterOrder,
  LineFooter,
} from "./styles";

export function PaidAmount() {
  const { watch } = useFormContext();
  const {
    productsSelected,
    amountItens,
    total,
    deliveryLocal,
    onInsertOrWithdrawProductInCart,
    handleRemoveProductOfCart,
  } = useRequestContext();

  const paidForm = watch("paidForm");

  return (
    <ConfirmContainer>
      <TitleBanner>Cafés selecionados</TitleBanner>
      <ContainerOrders>
        {productsSelected &&
          productsSelected.map((product) => (
            <SelectedOrder key={product.id}>
              <div>
                <img src={product.img} alt="" />
              </div>
              <div>
                <FlexColumn>
                  <span>{product.title}</span>
                  <div>
                    <CountButton>
                      <button
                        type="button"
                        onClick={() => {
                          onInsertOrWithdrawProductInCart(
                            product.id,
                            "withdraw",
                          );
                        }}
                      >
                        -
                      </button>
                      <span>{product.amount}</span>
                      <button
                        type="button"
                        onClick={() => {
                          onInsertOrWithdrawProductInCart(product.id, "insert");
                        }}
                      >
                        +
                      </button>
                    </CountButton>
                    <button
                      className="excluir"
                      type="button"
                      onClick={() => {
                        handleRemoveProductOfCart(product.id);
                      }}
                    >
                      <Trash size={16} />
                      Remover
                    </button>
                  </div>
                </FlexColumn>
              </div>
              <div>
                <strong>
                  {product.value.toLocaleString("pt-BR", {
                    maximumFractionDigits: 2,
                    minimumFractionDigits: 2,
                  })}
                </strong>
              </div>
            </SelectedOrder>
          ))}
        <FooterOrder>
          <LineFooter>
            <span>Total itens</span>
            <strong>{amountItens}</strong>
          </LineFooter>
          <LineFooter>
            <span>Entrega</span>
            <strong>
              {(deliveryLocal?.total || 0).toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </strong>
          </LineFooter>
          <LineFooter isTotal>
            <strong>Total</strong>
            <strong>
              {total.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </strong>
          </LineFooter>

          <button type="submit" disabled={!paidForm}>
            CONFIRMAR PEDIDO
          </button>
        </FooterOrder>
      </ContainerOrders>
    </ConfirmContainer>
  );
}
