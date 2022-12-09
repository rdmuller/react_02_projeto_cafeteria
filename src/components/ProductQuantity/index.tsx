import { Minus, Plus } from "phosphor-react";
import { FormEvent } from "react";
import { ProductQuantityContainer } from "./styles";

interface ProductQuantityProps {
    productQuantity: number,
    onChange: (qty: number) => void
	size?: number;
}

export function ProductQuantity({productQuantity, onChange, size}: ProductQuantityProps) {
	const disableDecrement = (productQuantity <= 1);

	return (
		<ProductQuantityContainer style={{height: (size ?? 2.375 ) + "rem"}}>
			<button className="ButtonQuanttity" disabled={disableDecrement} onClick={(e: FormEvent) => {
				e.preventDefault();
				onChange(-1);
			}}>
				<Minus weight="bold" size={14} />
			</button>
			
			<span>{productQuantity}</span>

			<button className="ButtonQuanttity" onClick={(e: FormEvent) => {
				e.preventDefault();
				onChange(1);
			}}>
				<Plus weight="bold" size={14} />
			</button>
		</ProductQuantityContainer>
	);
}