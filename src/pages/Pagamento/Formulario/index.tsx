import { ChangeEvent, FormEvent, useState } from "react";
import { useForm, useFormContext } from "react-hook-form";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "phosphor-react";
import {
  ContentForm,
  Container,
  FormInputContent,
  Title,
  FormPaidOptions,
  ButtonContainer,
  Button,
  TitleBanner,
  Input,
  GroupInput,
  DescriptionTitle,
} from "./styles";
import { useRequestContext } from "../../../context/contextProducts";

type FormaPagamentoProps = "credito" | "debito" | "dinheiro" | null;

interface FormDeliveryProps {
  onInvalid(event: ChangeEvent<HTMLInputElement>): void;
}

export function FormDelivery({ onInvalid }: FormDeliveryProps) {
  const { setDelivery } = useRequestContext();
  const [paidForm, setPaidForm] = useState<FormaPagamentoProps>(null);

  const { register, setValue } = useFormContext();

  function onSelectPaidForm(paid: FormaPagamentoProps) {
    switch (paid) {
      case "credito":
        setDelivery({ paidForm: "cartão de crédito" });
        setValue("paidForm", "cartão de crédito");
        break;
      case "debito":
        setDelivery({ paidForm: "cartão de débito" });
        setValue("paidForm", "cartão de Débito");
        break;
      case "dinheiro":
        setDelivery({ paidForm: "Dinheiro" });
        setValue("paidForm", "Dinheiro");
        break;
      default:
        break;
    }

    if (paid === paidForm) {
      setPaidForm(null);
      setValue("paidForm", null);

      return;
    }
    setPaidForm(paid);
  }

  return (
    <Container>
      <TitleBanner>Complete seu pedido</TitleBanner>
      <ContentForm>
        <Title>
          <div>
            <MapPinLine size={22} />
          </div>
          <div>
            <strong>Endereço de Entrega</strong>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </Title>
        <FormInputContent>
          <Input
            width={200}
            placeholder="CEP"
            title=""
            inputMode="numeric"
            type="text"
            maxLength={9}
            autoComplete="off"
            {...register("cep", {
              required: "O valor precisa ser preenchido",
            })}
          />
          <Input
            type="text"
            placeholder="Rua"
            title=""
            required
            onInvalid={onInvalid}
            {...register("rua", {
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                if (e.target.value) {
                  e.target.setCustomValidity("");
                }
              },
            })}
          />
          <GroupInput>
            <Input
              type="text"
              placeholder="Número"
              required
              onInvalid={onInvalid}
              title=""
              width={200}
              {...register("numero", {
                valueAsNumber: true,
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value) {
                    e.target.setCustomValidity("");
                  }
                },
              })}
            />
            <Input
              type="text"
              flexGrow="1"
              placeholder="Complemento"
              {...register("complemento")}
            />
          </GroupInput>
          <GroupInput>
            <Input
              width={200}
              placeholder="Bairro"
              type="text"
              required
              title=""
              onInvalid={onInvalid}
              {...register("bairro", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value) {
                    e.target.setCustomValidity("");
                  }
                },
              })}
            />
            <Input
              flexGrow="1"
              placeholder="Cidade"
              required
              title=""
              onInvalid={onInvalid}
              type="text"
              {...register("cidade", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value) {
                    e.target.setCustomValidity("");
                  }
                },
              })}
            />
            <Input
              width={60}
              placeholder="UF"
              type="text"
              maxLength={2}
              inputMode="text"
              required
              onInvalid={onInvalid}
              {...register("uf", {
                required: true,
                onChange: (e: ChangeEvent<HTMLInputElement>) => {
                  if (e.target.value) {
                    e.target.setCustomValidity("");
                  }
                },
              })}
            />
          </GroupInput>
        </FormInputContent>
      </ContentForm>
      <FormPaidOptions>
        <Title isFooter>
          <CurrencyDollar size={22} />
          <span>
            <p>Pagamento</p>
            <DescriptionTitle isHidden={false}>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </DescriptionTitle>
          </span>
        </Title>
        <ButtonContainer>
          <Button
            type="button"
            onClick={() => onSelectPaidForm("credito")}
            isSelected={paidForm === "credito"}
          >
            <CreditCard size={22} />
            Cartão de crédito
          </Button>
          <Button
            type="button"
            onClick={() => onSelectPaidForm("debito")}
            isSelected={paidForm === "debito"}
          >
            <Bank size={22} />
            Cartão de débito
          </Button>
          <Button
            onClick={() => onSelectPaidForm("dinheiro")}
            type="button"
            isSelected={paidForm === "dinheiro"}
          >
            <Money size={22} />
            Dinheiro
          </Button>
        </ButtonContainer>
      </FormPaidOptions>
    </Container>
  );
}
