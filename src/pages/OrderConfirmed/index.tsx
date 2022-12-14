import { RegularText, TitleText } from "../../components/tipography";
import { OrderConfirmedContainer, OrderDetailsContainer } from "./styles";
import confirmedOrderIllustration from "../../assets/confirmed-order.svg";
import { InfoWithIcon } from "../../components/InfoWithIcon";
import { useTheme } from "styled-components";
import { MapPin, Clock, CurrencyDollar } from "phosphor-react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { useEffect } from "react";

interface LocationType {
  state: OrderData;
}

export function OrderConfirmedPage() {
  const { colors } = useTheme();

  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  if (!state) return <></>;

  return (
    <OrderConfirmedContainer className="container">
      <div>
        <TitleText size="l">Uhu! Pedido confirmado</TitleText>
        <RegularText size="xl">
          Agora é só aguardar que logo o seu pedido chegará até você
        </RegularText>
      </div>

      <section>
        <OrderDetailsContainer>
          <InfoWithIcon
            icon={<MapPin weight="fill" />}
            iconBg={colors["green-primary"]}
            text={
              <RegularText>
                Entrega em <strong>{state.street}, {state.number} </strong>
                <br />
                {state.district} - {state.city}, {state.uf}
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<Clock weight="fill" />}
            iconBg={colors["base-blue"]}
            text={
              <RegularText>
                Previsão de entrega
                <br />
                <strong>30 - 60 min</strong>
              </RegularText>
            }
          />

          <InfoWithIcon
            icon={<CurrencyDollar weight="fill" />}
            iconBg={colors["green-primary-dark"]}
            text={
              <RegularText>
                Pagamento na entrega
                <br />
                <strong>
                  {
                    state.paymentMethod === "money" ? "Dinheiro" :
                    state.paymentMethod === "credit" ? "cartão de Crédito" :
                    "Cartão de débito"
                  }
                </strong>
              </RegularText>
            }
          />
        </OrderDetailsContainer>
        <img src={confirmedOrderIllustration} />
      </section>
    </OrderConfirmedContainer>
  );
}
