import { useContext, useEffect } from "react";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { FormAddress } from "./components/FormAddress";
import { FormOfPayment } from "./components/FormOfPayment";
import { ProductCart } from "./components/ProductCart";
import { TitleContainer } from "./components/TitleContainer";
import { BaseContainer, CofeeCardContainer, MainContainer, RequestContainer, SummaryContainer, SummaryTotals, LabelSummary, LabelTotalSummary, ButtonConfirm } from "./styles";


const addressFormValidationSchema = zod.object({
	CEP: zod.number().min(1,"CEP deve ser informado").max(99999999),
	street: zod.string().min(1,"Rua não informada"),
	number: zod.number().min(1, "Número deve ser informado"),
	complement: zod.string(),
	district: zod.string(),
	city: zod.string(),
	state: zod.string().min(1,"UF deve ser informada").max(2),
});

type AddressFormData = zod.infer<typeof addressFormValidationSchema>;

export function Checkout() {
	const { products, totalDelivery, totalItems, totalValue, address, updateAddress } = useContext(ShoppingCartContext);
	const navigate = useNavigate();

	const addressForm = useForm<AddressFormData>({
		resolver: zodResolver(addressFormValidationSchema), defaultValues: {
			CEP: address.CEP,
			street: address.street,
			number: address.number,
			complement: address.complement,
			district: address.district,
			city: address.city,
			state: address.state,
		}
	});
	const { handleSubmit, /*watch, formState*/ } = addressForm;

	function handleSubmitAddress(data: AddressFormData) {
		updateAddress(data);
		
		if (totalValue) {
			navigate("/success");
		} else {
			alert("O carrinho de compras está vazio");
		}
	}

	useEffect(() => {
		if (!totalValue) {
			alert("O carrinho de compras está vazio");
			navigate("/");
		}
	},[]);

	//console.log(formState.errors);

	return (
		<form onSubmit={handleSubmit(handleSubmitAddress)} action="">
			<MainContainer>
				<RequestContainer>
					<h4>Complete seu pedido</h4>
					<BaseContainer>
						<TitleContainer title="Endereço de Entrega" description="Informe o endereço onde deseja receber seu pedido" type="address" />
						<FormProvider {...addressForm}>
							<FormAddress />
						</FormProvider>
					</BaseContainer>
					<BaseContainer>
						<TitleContainer title="Pagamento" description="O pagamento é feito na entrega. Escolha a forma que deseja pagar" type="payment" />
						<FormOfPayment />
					</BaseContainer>
				</RequestContainer>
				<CofeeCardContainer>
					<h4>Cafés selecionados</h4>
					<SummaryContainer>
						{products.map(item => 
							<ProductCart key={item.productId} product={item} />
						)}
						<SummaryTotals>
							<div>
								<LabelSummary>Total de itens</LabelSummary>
								<span>{totalItems.toFixed(2)}</span>
							</div>
							<div>
								<LabelSummary>Entrega</LabelSummary>
								<span>{totalDelivery.toFixed(2)}</span>
							</div>
							<div>
								<LabelTotalSummary>Total</LabelTotalSummary>
								<LabelTotalSummary>{totalValue.toFixed(2)}</LabelTotalSummary>
							</div>
						</SummaryTotals>
						<ButtonConfirm type="submit">CONFIRMAR PEDIDO</ButtonConfirm>
					</SummaryContainer>
				</CofeeCardContainer>
			</MainContainer> 
		</form>
	);
}