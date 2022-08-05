import { ActionType } from "../reducerVenda";

type InsertOrWithDrawCartProps = {
  id: string;
  type: "insert" | "withdraw";
};

export function insertOrWithDrawCart({ id, type }: InsertOrWithDrawCartProps) {
  return {
    type: ActionType.INSERT_OR_WITHDRAW_CART,
    payload: {
      id,
      type,
    },
  };
}

type AddProductInCartProps = {
  id: string;
};

export function addProductInCart({ id }: AddProductInCartProps) {
  return {
    type: ActionType.ADD_PRODUCT_IN_CART,
    payload: {
      id,
    },
  };
}

type RemoveProductTheCartProps = {
  id: string;
};

export function removeProductTheCart({ id }: RemoveProductTheCartProps) {
  return {
    type: ActionType.ROMOVE_PRODUCT_THE_CART,
    payload: {
      id,
    },
  };
}

export function fineshedSale() {
  return {
    type: ActionType.FINISHED_SALE,
  };
}
