import imageCoffee from "../../../../assets/logo-intro.svg";
import { RoundedIcon } from "../../../../components/RoundedIcon";
import { ItemsContainer, SectionContainer, TitleContainer } from "./style";

export function Intro () {
	return (<>
		<SectionContainer>
			<div>
				<TitleContainer>
					<h1>Encontre o café perfeito para qualquer hora do dia</h1>
					<span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</span>
				</TitleContainer>
				<ItemsContainer>
					<div>
						<RoundedIcon color="yellowDark" size={16} iconStyle="ShoppingCart" />
						<span>Compra simples e segura</span>
					</div>
					<div>
						<RoundedIcon color="gray" size={16} iconStyle="Package" />
						<span>Embalagem mantém o café intacto</span>
					</div>
					<div>
						<RoundedIcon color="yellow" size={16} iconStyle="Timer" />
						<span>Entrega rápida e rastreada</span>
					</div>
					<div>
						<RoundedIcon color="purple" size={16} iconStyle="Coffee" />
						<span>O café chega fresquinho até você</span>
					</div>
				</ItemsContainer>
			</div>
			<img src={imageCoffee} alt="" />		
		</SectionContainer>
	</>
	);
}