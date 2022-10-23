import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import imageCoffee from "../../../../assets/logo-intro.svg";
import { ContainerIcon, ItemsContainer, SectionContainer, TitleContainer } from "./style";

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
						<ContainerIcon>
							<ShoppingCart size={16} weight="fill"/>
						</ContainerIcon>
						<span>Compra simples e segura</span>
					</div>
					<div>
						<ContainerIcon>
							<Package size={16} weight="fill"/>
						</ContainerIcon>
						<span>Embalagem mantém o café intacto</span>
					</div>
					<div>
						<ContainerIcon>
							<Timer size={16} weight="fill"/>
						</ContainerIcon>
						<span>Entrega rápida e rastreada</span>
					</div>
					<div>
						<ContainerIcon>
							<Coffee size={16} weight="fill"/>
						</ContainerIcon>
						<span>O café chega fresquinho até você</span>
					</div>
				</ItemsContainer>
			</div>
			<img src={imageCoffee} alt="" />		
		</SectionContainer>
	</>
	);
}