import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import { DefaultLayout } from "../components/layout";
import { Delivery } from "../pages/entrega";
import { Pagamento } from "../pages/Pagamento";
import { Venda } from "../pages/Produtos";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Venda />} />
          <Route path="/pagamento" element={<Pagamento />} />
          <Route path="/entrega" element={<Delivery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
