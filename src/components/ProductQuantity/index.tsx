import { Minus, Plus } from "phosphor-react";
import { ProductQuantityContainer } from "./styles";

interface ProductQuantityProps {
    productQuantity: number,
    onChange: (qty: number) => void;
}

export function ProductQuantity({productQuantity, onChange}: ProductQuantityProps) {
	return (
		<ProductQuantityContainer>
			<button className="ButtonQuanttity" onClick={() => onChange(-1)}>
				<Minus weight="bold" size={14} />
			</button>
			<span>{productQuantity}</span>
			<button className="ButtonQuanttity" onClick={() => onChange(1)}>
				<Plus weight="bold" size={14} />
			</button>
		</ProductQuantityContainer>
	);
}