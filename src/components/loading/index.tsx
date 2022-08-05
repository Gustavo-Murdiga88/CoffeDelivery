import Loader from "react-spinners/HashLoader";
import { Container } from "./styles";

export function Loading() {
  return (
    <Container>
      <Loader size={60} color="#C47F17" cssOverride={{ zIndex: 999999 }} />
    </Container>
  );
}
