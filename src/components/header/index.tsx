/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect } from "react";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useNavigate } from "react-router-dom";

import { useRequestContext } from "../../context/contextProducts";

import { Container, ButtonLocation, ButtonShopping, Tag } from "./styles";

import Logo from "../../assets/Logo.svg";
import { Loading } from "../loading";

export function Header() {
  const history = useNavigate();
  const { cartAmount, isLoading, setIsLoading, orderIsCompleted, setDelivery } =
    useRequestContext();

  useEffect(() => {
    setIsLoading(true);
    const Time = setTimeout(() => {
      if (cartAmount.length === 0 && !orderIsCompleted.current) {
        setDelivery({
          total: 0,
        });
        history("/", { replace: true });
      }

      setIsLoading(false);
    }, 1000);
    return () => {
      clearTimeout(Time);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartAmount, history, setIsLoading, orderIsCompleted]);

  return (
    <Container>
      {isLoading && <Loading />}
      <img
        src={Logo}
        alt="Logo principal"
        onClick={() => {
          setIsLoading(true);
          setTimeout(() => {
            if (orderIsCompleted.current) {
              orderIsCompleted.current = false;
            }
            history("/", { replace: true });
            setIsLoading(false);
          }, 1000);
        }}
      />
      <aside>
        <ButtonLocation>
          <MapPin size={20} />
          <span>Jau-SP</span>
        </ButtonLocation>
        <ButtonShopping
          disabled={cartAmount.length === 0}
          onClick={() => {
            history("/pagamento");
          }}
        >
          <Tag isHidden={!cartAmount.length}>{cartAmount.length}</Tag>
          <ShoppingCart size={20} />
        </ButtonShopping>
      </aside>
    </Container>
  );
}
