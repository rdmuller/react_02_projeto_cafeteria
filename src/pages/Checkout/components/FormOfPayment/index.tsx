import { Bank, CreditCard, Money } from "phosphor-react";
import { ButtonPayment, FormPaymentContainer } from "./style";

export function FormOfPayment() {
	return (
		<FormPaymentContainer>
			<ButtonPayment>
				<CreditCard size={16} />
                CARTÃO DE CRÉDITO
			</ButtonPayment>
			<ButtonPayment>
				<Bank size={16} />
                CARTÃO DE DÉBITO
			</ButtonPayment>
			<ButtonPayment>
				<Money size={16} />
                DINHEIRO
			</ButtonPayment>
		</FormPaymentContainer>
	);
}