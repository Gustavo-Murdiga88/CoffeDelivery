import { toast } from "react-toastify";
import { Produtos } from "../mock";

type Products = typeof Produtos;

type RequestProps = {
  products: Products;
  cartAmount: string[];
};

let canShowToast = true;

export enum ActionType {
  INSERT_OR_WITHDRAW_CART = "INSERT_OR_WITHDRAW_CART",
  ADD_PRODUCT_IN_CART = "ADD_PRODUCT_IN_CART",
  ROMOVE_PRODUCT_THE_CART = "REMOVE_PRODUCT_THE_CART",
  FINISHED_SALE = "FINISHED_SALE",
}

function ToastOpen(title: string, amount: number) {
  toast.warn(
    `O café do tipo ${title} possui apenas ${amount} unidades em estoque. Por favor selecione um outro tipo de café.`,
  );
}
export function Reducer(state: RequestProps, action: any) {
  switch (action.type) {
    case "INSERT_OR_WITHDRAW_CART": {
      const products = state.products.map((item) => {
        if (item.id === action.payload.id) {
          if (
            item.amount + 1 > item.stockAmount &&
            action.payload.type === "insert"
          ) {
            if (canShowToast) {
              ToastOpen(item.title, item.amount);
              canShowToast = false;
            } else {
              canShowToast = true;
            }
            return item;
          }

          return {
            ...item,
            amount:
              action.payload.type === "insert"
                ? item.amount + 1
                : item.amount === 0
                ? item.amount
                : item.amount - 1,
          };
        }
        return item;
      });

      const amount = state.products.find(
        (item) => item.id === action.payload.id,
      );
      if (amount?.amount === 1 && action.payload.type === "withdraw") {
        const cartAmount = state.cartAmount.filter(
          (item) => item !== action.payload.id,
        );
        return { ...state, products, cartAmount };
      }

      return { ...state, products };
    }
    case "ADD_PRODUCT_IN_CART": {
      if (state.cartAmount.includes(action.payload.id)) {
        return state;
      }
      const cartAmount = [...state.cartAmount, action.payload.id];
      return { ...state, cartAmount };
    }

    case "REMOVE_PRODUCT_THE_CART": {
      const cartAmount = state.cartAmount.filter(
        (product) => product !== action.payload.id,
      );
      const productAmount = state.products.map((product) => {
        if (product.id === action.payload.id) {
          return {
            ...product,
            amount: 0,
          };
        }
        return product;
      });
      return { ...state, cartAmount, products: productAmount };
    }

    case "FINISHED_SALE": {
      return {
        ...state,
        cartAmount: [],
        products: Produtos,
      };
    }
    default: {
      return state;
    }
  }
}
