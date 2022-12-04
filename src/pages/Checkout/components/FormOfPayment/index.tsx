import { Bank, CreditCard, Money } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../../../contexts/ShoppingCart";
import { ButtonPayment, FormPaymentContainer } from "./style";

export function FormOfPayment() {
	const { changePaymentMode, paymentMode, } = useContext(ShoppingCartContext);

	function handleCreditCardClick() {
		changePaymentMode("CREDIT_CARD");
	}

	function handleBankClick() {
		changePaymentMode("BANK");
	}

	function handleMoneyClick() {
		changePaymentMode("MONEY");
	}

	return (
		<FormPaymentContainer>
			<ButtonPayment onClick={handleCreditCardClick} variant={paymentMode==="CREDIT_CARD" ? "selected" : "default"}>
				<CreditCard size={16} />
                CARTÃO DE CRÉDITO
			</ButtonPayment>
			<ButtonPayment onClick={handleBankClick} variant={paymentMode==="BANK" ? "selected" : "default"} >
				<Bank size={16} />
                CARTÃO DE DÉBITO
			</ButtonPayment>
			<ButtonPayment onClick={handleMoneyClick} variant={paymentMode==="MONEY" ? "selected" : "default"}>
				<Money size={16} />
                DINHEIRO
			</ButtonPayment>
		</FormPaymentContainer>
	);
}