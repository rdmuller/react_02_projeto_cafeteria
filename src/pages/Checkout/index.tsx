import { useContext } from "react";
import * as zod from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";
import { FormAddress } from "./components/FormAddress";
import { FormOfPayment } from "./components/FormOfPayment";
import { ProductCart } from "./components/ProductCart";
import { TitleContainer } from "./components/TitleContainer";
import { BaseContainer, CofeeCardContainer, MainContainer, RequestContainer, SummaryContainer, SummaryTotals, LabelSummary, LabelTotalSummary, ButtonConfirm } from "./styles";


const addressFormSchema = zod.object({
	CEP: zod.number().min(0).max(99999999),
	street: zod.string(),
	number: zod.number(),
	complement: zod.string(),
	district: zod.string(),
	city: zod.string(),
	state: zod.string().min(1).max(2),
});

type AddressFormData = zod.infer<typeof addressFormSchema>;

export function Checkout() {
	const { products, totalDelivery, totalItems, totalValue } = useContext(ShoppingCartContext);

	const addressForm = useForm<AddressFormData>({
		resolver: zodResolver(addressFormSchema)
	});
	const { handleSubmit, watch } = addressForm;

	function handleSubmitAddress(data: AddressFormData) {
		console.log(data);
	}

	/*const cep = watch("CEP");
	console.log(cep);*/

	return (
		<form onSubmit={handleSubmit(handleSubmitAddress)}>
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