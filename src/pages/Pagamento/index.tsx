import { ChangeEvent, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useRequestContext } from "../../context/contextProducts";
import { FormDelivery } from "./Formulario";
import { PaidAmount } from "./PaidAmount";
import { Container } from "./styles";

type FormData = {
  cep: string;
  rua: string;
  numero: number;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
};
export function Pagamento() {
  const formMethods = useForm<FormData>();
  const {
    setDelivery,
    onFinishedSale,
    setIsLoading,
    orderIsCompleted,
    cartAmount,
  } = useRequestContext();
  const {
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { isDirty },
  } = formMethods;

  const history = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (cartAmount.length === 0 && orderIsCompleted.current) {
        setDelivery({
          total: 0,
        });
        history("/", { replace: true });
      }
      setIsLoading(false);
    }, 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartAmount, orderIsCompleted, history]);

  const Submit = formMethods.handleSubmit((data) => {
    setIsLoading(true);
    setTimeout(() => {
      setDelivery({
        city: data.cidade,
        number: data.numero,
        street: data.rua,
        district: data.bairro,
        total: 0,
      });
      onFinishedSale();

      if (!orderIsCompleted.current) {
        orderIsCompleted.current = true;

        toast.success(
          `Legal, o pedido de número ${Number(Math.random() * 100).toFixed(
            0,
          )} foi concluído com sucesso! Obrigado por comprar com a gente até a próxima`,
        );
      }
      history("/entrega");
      setIsLoading(false);
    }, 1000);
  });

  const CEP = watch("cep");
  const cepSearched = CEP?.includes("-");

  useEffect(() => {
    async function FetchCep() {
      try {
        const { bairro, cep, localidade, uf, logradouro }: any = await fetch(
          `https://viacep.com.br/ws/${CEP}/json/`,
        ).then((data) => data.json());

        setValue("bairro", bairro);
        setValue("cep", cep);
        setValue("rua", logradouro);
        setValue("cidade", localidade);
        setValue("uf", uf);

        setDelivery({
          total: Math.ceil((Math.random() * 100) / 5),
        });
        if (!uf) {
          toast.warn("Não possível encontrar o CEP tente novamente");
        }
      } catch (err) {
        toast.warn("Não possível encontrar o CEP tente novamente");
        reset();
      }
    }

    if (CEP?.length === 8 && !cepSearched) {
      FetchCep();
    }

    if (CEP?.length === 0 && isDirty) {
      reset();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [CEP, handleSubmit, Submit, reset]);

  function onInvalid(event: ChangeEvent<HTMLInputElement>) {
    if (event.target.value) {
      event.target.setCustomValidity("O Campo deve ser preenchido");
    } else {
      event.target.setCustomValidity("O Campo deve ser preenchido");
    }
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={Submit}>
        <Container>
          <FormDelivery onInvalid={onInvalid} />
          <PaidAmount />
        </Container>
      </form>
    </FormProvider>
  );
}
