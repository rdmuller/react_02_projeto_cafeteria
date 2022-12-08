import { useContext, useEffect, useState } from "react";
import dellivery from "../../assets/dellivery.svg";
import { RoundedIcon } from "../../components/RoundedIcon";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { Address, PaymentMode } from "../../reducers/ShoppingCart/reducer";
import { DelliveryCardContainer, DelliveryContainer, DelliveryInfoContainer } from "./style";

export function Success() {
	const { address, paymentMode } = useContext(ShoppingCartContext);
	const [ addressDelivery, setAddressDelivery ] = useState<Address>();
	const [ paymentModeSel, setPaymentModeSel ] = useState<PaymentMode>();

	useEffect(() => {
		setAddressDelivery(address);
		setPaymentModeSel(paymentMode);
		//clearCart();
	},[]);

	return (
		<DelliveryContainer>
			<DelliveryInfoContainer>
				<h2>Uhu! Pedido confirmado</h2>
				<p>Agora é só aguardar que logo o café chegará até você</p>
				<DelliveryCardContainer>
					<div>
						<RoundedIcon size={32} iconStyle="MapPin" color="purple" />
						<div>
							<span>Entrega em <b>{addressDelivery?.street}, 102</b></span>
							<span>{addressDelivery?.district} - {addressDelivery?.city}, {addressDelivery?.state}</span>
						</div>
					</div>
					<div>
						<RoundedIcon size={32} iconStyle="Timer" color="yellow" />
						<div>
							<span>Previsão de entrega</span>
							<span><b>20 min - 30 min</b></span>
						</div>
					</div>
					<div>
						<RoundedIcon size={32} iconStyle="CurrencyDollar" color="yellowDark" />
						<div>
							<span>Pagamento na entrega</span>
							<span><b>
								{paymentModeSel === "BANK" && "Cartão de débito"}
								{paymentModeSel === "CREDIT_CARD" && "Cartão de crédito"}
								{paymentModeSel === "MONEY" && "Dinheiro"}
							</b></span>
						</div>
					</div>
				</DelliveryCardContainer>
			</DelliveryInfoContainer>
			<img src={dellivery} alt="" />
		</DelliveryContainer>
	);
}