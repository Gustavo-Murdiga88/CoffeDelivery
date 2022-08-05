import {
  createContext,
  useContext,
  ReactNode,
  useReducer,
  useState,
  useRef,
  Dispatch,
  SetStateAction,
  MutableRefObject,
} from "react";

import { Reducer } from "../reducers/reducerVenda";
import {
  addProductInCart,
  fineshedSale,
  insertOrWithDrawCart,
  removeProductTheCart,
} from "../reducers/helpers/functionsReducerVenda";

import { Produtos } from "../mock";

type Products = typeof Produtos;

type ProductsSelected = {
  id: string;
  title: string;
  img: string;
  amount: number;
  value: number;
};

type DeliveryLocalProps = {
  street?: string;
  city?: string;
  number?: number;
  district?: string;
  total?: number;
  paidForm?: string;
};

type RequestContextProps = {
  products: Products;
  cartAmount: string[];
  productsSelected: ProductsSelected[];
  deliveryLocal: DeliveryLocalProps | null;
  amountItens: number;
  total: number;
  onInsertOrWithdrawProductInCart(
    id: string,
    type: "insert" | "withdraw",
  ): void;
  onAddProductInCart(id: string): void;
  handleRemoveProductOfCart(id: string): void;
  setDelivery(props: DeliveryLocalProps): void;
  onFinishedSale: () => void;
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
  orderIsCompleted: MutableRefObject<boolean>;
};

type RequestProps = {
  products: Products;
  cartAmount: string[];
};

const RequestsContext = createContext({} as RequestContextProps);

interface RequestContextProviderProps {
  children: ReactNode;
}

export function RequestsContextProvider({
  children,
}: RequestContextProviderProps) {
  // Este código basicamente existe por que como o reducer retorna um novo estado o reducer passa novamente entre as funções e então retorna 2 vezes o toast este código, evita isso
  const [deliveryLocal, setDeliveryLocal] = useState<DeliveryLocalProps | null>(
    null,
  );
  const orderIsCompleted = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [requests, dispatch] = useReducer(Reducer, {
    cartAmount: [],
    products: Produtos,
  });

  const { products, cartAmount } = requests;

  const productsSelected = (() => {
    const productSelect: ProductsSelected[] = [];
    cartAmount.forEach((item) => {
      const retorno = products
        .filter((p) => {
          return p.id === item;
        })
        .map(
          (item) =>
            ({
              id: item.id,
              amount: item.amount,
              img: item.img,
              title: item.title,
              value: item.value,
            } as ProductsSelected),
        );
      productSelect.push(...retorno);
    });
    return productSelect;
  })();

  const amountItens = productsSelected.length;

  const total =
    (deliveryLocal?.total ?? 0) +
    productsSelected.reduce((acc, product) => {
      return product.value * product.amount + acc;
    }, 0);

  function onInsertOrWithdrawProductInCart(
    id: string,
    type: "insert" | "withdraw",
  ) {
    dispatch(insertOrWithDrawCart({ id, type }));
  }

  function onAddProductInCart(id: string) {
    dispatch(addProductInCart({ id }));
  }

  function handleRemoveProductOfCart(id: string) {
    dispatch(removeProductTheCart({ id }));
  }

  function setDelivery(props: DeliveryLocalProps) {
    setDeliveryLocal((previus) => ({ ...previus, ...props }));
  }

  function onFinishedSale() {
    dispatch(fineshedSale());
  }

  return (
    <RequestsContext.Provider
      value={{
        products,
        cartAmount,
        productsSelected,
        deliveryLocal,
        amountItens,
        total,
        onInsertOrWithdrawProductInCart,
        onAddProductInCart,
        handleRemoveProductOfCart,
        setDelivery,
        onFinishedSale,
        isLoading,
        setIsLoading,
        orderIsCompleted,
      }}
    >
      {children}
    </RequestsContext.Provider>
  );
}

export function useRequestContext() {
  const context = useContext(RequestsContext);
  if (!context) {
    throw new Error(
      "The RequestsContext should using withing RequestContextProvider",
    );
  }
  return context;
}
