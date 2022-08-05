import expresso from "./assets/coffe1.svg";
import americano from "./assets/typeAmericano.svg";
import coffeWithMilk from "./assets/TypeCafécomLeite.svg";
import iceCoffe from "./assets/TypeCaféGelado.svg";
import cappuccino from "./assets/TypeCapuccino.svg";
import hotChocolate from "./assets/TypeChocolateQuente.svg";
import cuban from "./assets/TypeCubano.svg";
import express from "./assets/TypeExpressoCremoso.svg";
import havaiano from "./assets/TypeHavaiano.svg";
import irlandes from "./assets/TypeIrlandes.svg";
import latte from "./assets/TypeLatte.svg";
import mochaccino from "./assets/TypeMochaccino.svg";
import arabe from "./assets/TypeÁrabe.svg";

interface ProdutosProps {
  id: string;
  title: string;
  tag: string;
  tag2?: string;
  tag3?: string;
  subTitle: string;
  img: string;
  amount: number;
  stockAmount: number;
  value: number;
}

export const Produtos: ProdutosProps[] = [
  {
    id: "1",
    title: "Expresso Tradicional",
    subTitle: "O tradicional café feito com água quente e grãos moídos",
    tag: "TRADICIONAL",
    stockAmount: 10,
    amount: 0,
    img: expresso,
    value: 9.9,
  },
  {
    id: "2",
    title: "Expresso Americano",
    subTitle: "Expresso diluído, menos intenso que o tradicional",
    tag: "TRADICIONAL",
    stockAmount: 15,
    amount: 0,
    img: americano,
    value: 10.9,
  },
  {
    id: "3",
    title: "Expresso Cremoso",
    subTitle: "Café expresso tradicional com espuma cremosa",
    tag: "TRADICIONAL",
    stockAmount: 5,
    amount: 0,
    img: express,
    value: 11.9,
  },
  {
    id: "4",
    title: "Café com Leite",
    subTitle: "Meio a meio de expresso tradicional com leite vaporizado",
    tag: "TRADICIONAL",
    tag2: "COM LEITE",
    stockAmount: 10,
    amount: 0,
    img: coffeWithMilk,
    value: 12.9,
  },
  {
    id: "5",
    title: "Latte",
    subTitle: "Meio a meio de expresso tradicional com leite vaporizado",
    tag: "TRADICIONAL",
    tag2: "COM LEITE",
    stockAmount: 8,
    amount: 0,
    img: latte,
    value: 13.9,
  },
  {
    id: "6",
    title: "Capuccino",
    subTitle: "Bebida com canela feita de doses iguais de café, leite e espuma",
    tag: "TRADICIONAL",
    tag2: "COM LEITE",
    stockAmount: 8,
    amount: 0,
    img: cappuccino,
    value: 15.9,
  },
  {
    id: "7",
    title: "Macchiato",
    subTitle: "Café expresso misturado com um pouco de leite quente e espuma",
    tag: "TRADICIONAL",
    tag2: "COM LEITE",
    stockAmount: 8,
    amount: 0,
    img: mochaccino,
    value: 9.9,
  },
  {
    id: "8",
    title: "Mocaccino",
    subTitle: "Café expresso com calda de chocolate, pouco leite e espuma",
    tag: "TRADICIONAL",
    tag2: "COM LEITE",
    stockAmount: 8,
    amount: 0,
    img: mochaccino,
    value: 9.9,
  },
  {
    id: "9",
    title: "Chocolate Quente",
    subTitle: "Bebida feita com chocolate dissolvido no leite quente e café",
    tag: "TRADICIONAL",
    tag2: "COM LEITE",
    stockAmount: 8,
    amount: 0,
    img: hotChocolate,
    value: 9.9,
  },
  {
    id: "10",
    title: "Cubano",
    subTitle: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    tag: "TRADICIONAL",
    tag2: "COM LEITE",
    tag3: "GELADO",
    stockAmount: 8,
    amount: 0,
    img: cuban,
    value: 9.9,
  },
  {
    id: "11",
    title: "Havaiano",
    subTitle: "Bebida adocicada preparada com café e leite de coco",
    tag: "ESPECIAL",
    stockAmount: 8,
    amount: 0,
    img: havaiano,
    value: 9.9,
  },
  {
    id: "12",
    title: "Árabe",
    subTitle: "Bebida preparada com grãos de café árabe e especiarias",
    tag: "ESPECIAL",
    stockAmount: 8,
    amount: 0,
    img: arabe,
    value: 15.9,
  },
  {
    id: "13",
    title: "Irlandês",
    subTitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tag: "ESPECIAL",
    tag2: "ALCOÓLICO",
    stockAmount: 8,
    amount: 0,
    img: irlandes,
    value: 16.9,
  },
  {
    id: "14",
    title: "Irlandês",
    subTitle: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    tag: "ESPECIAL",
    tag2: "ALCOÓLICO",
    stockAmount: 8,
    amount: 0,
    img: irlandes,
    value: 16.9,
  },
  {
    id: "15",
    title: "Expresso Gelado",
    subTitle: "Bebida preparada com café expresso e cubos de gelo",
    tag: "TRADICIONAL",
    tag2: "GELADO",
    stockAmount: 8,
    amount: 0,
    img: iceCoffe,
    value: 19.9,
  },
];
