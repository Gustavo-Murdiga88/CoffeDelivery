import { ShoppingCart } from "phosphor-react";
import { useEffect } from "react";
import { toast } from "react-toastify";

import { useRequestContext } from "../../../../../context/contextProducts";

import {
  CardContainer,
  ContainerProduct,
  Title,
  CardProduct,
  FooterCard,
  Tag,
  TagContainer,
  CountButton,
} from "./styles";

export function Card() {
  const {
    products,
    onInsertOrWithdrawProductInCart,
    onAddProductInCart,
    isLoading,
    orderIsCompleted,
  } = useRequestContext();

  function incrementalAmount(id: string, type: "insert" | "withdraw") {
    onInsertOrWithdrawProductInCart(id, type);
  }

  function addInCart(id: string, amount: number) {
    if (!amount) {
      toast.warn(
        "Ao menos adicione um item para que seja lançado o pedido ao carrinho",
      );
      return;
    }
    onAddProductInCart(id);
  }

  useEffect(() => {
    if (orderIsCompleted.current) {
      orderIsCompleted.current = false;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ContainerProduct>
      <Title>Nossos cafés</Title>
      <CardContainer>
        {products.map((coffe) => (
          <CardProduct key={coffe.id}>
            <img src={coffe.img} alt={coffe.title} />
            <TagContainer>
              {coffe.tag && <Tag>{coffe.tag}</Tag>}
              {coffe.tag2 && <Tag>{coffe.tag2}</Tag>}
              {coffe.tag3 && <Tag>{coffe.tag3}</Tag>}
            </TagContainer>
            <strong> {coffe.title}</strong>
            <p> {coffe.subTitle}</p>
            <FooterCard>
              <div>
                <span>R$</span>{" "}
                <strong>
                  {coffe.value
                    .toLocaleString("pt-BR", {
                      currency: "BRL",
                      style: "currency",
                    })
                    .replace("R$", "")}
                </strong>
              </div>
              <div>
                <CountButton>
                  <button
                    type="button"
                    onClick={() => {
                      incrementalAmount(coffe.id, "withdraw");
                    }}
                  >
                    -
                  </button>
                  <span>{coffe.amount}</span>
                  <button
                    type="button"
                    onClick={() => {
                      incrementalAmount(coffe.id, "insert");
                    }}
                  >
                    +
                  </button>
                </CountButton>
                <button
                  type="button"
                  onClick={() => {
                    addInCart(coffe.id, coffe.amount);
                  }}
                >
                  <ShoppingCart />
                </button>
              </div>
            </FooterCard>
          </CardProduct>
        ))}
      </CardContainer>
    </ContainerProduct>
  );
}
