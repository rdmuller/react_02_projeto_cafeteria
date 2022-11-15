import { ButtonCart, ButtonLocation, HeaderContainer, ProductQtyContainer } from "./style";
import logoCoffee from "../../assets/logo-coffee.svg";
import { NavLink } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";
import { useContext } from "react";
import { ShoppingCartContext } from "../../contexts/ShoppingCart";

export function Header() {
	const { qtyItems } = useContext(ShoppingCartContext);

	return (
		<HeaderContainer>
			<NavLink to="/">
				<img src={logoCoffee} alt="" />
			</NavLink>

			<nav>
				<NavLink to="/checkout" title="">
					<ButtonLocation>
						<MapPin size={22} weight="fill" />
						<span>Farroupilha, RS</span>
					</ButtonLocation>
				</NavLink>
				<NavLink to="/checkout" title="">
					<ButtonCart>
						<ShoppingCart size={22} weight="fill"/>
						<ProductQtyContainer>{qtyItems}</ProductQtyContainer>
					</ButtonCart>
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}