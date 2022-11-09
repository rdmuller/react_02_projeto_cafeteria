import { createContext, ReactNode, useReducer } from "react";
import { ActionTypes } from "../reducers/ShoppingCart/actions";
import { ShoppingCartProduct, ShoppingCartReducer } from "../reducers/ShoppingCart/reducer";

interface ShoppingCartContextType {
    products: ShoppingCartProduct[];
	totalValue: number;
	totalDelivery: number;
	totalItems: number;
    addProductToCart: (product: ShoppingCartProduct) => void;
	changeQuantity: (product: ShoppingCartProduct, addQty: number) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

type ShoppingCartContextProviderProps = {
    children: ReactNode;
}

export function ShoppingCartContextProvider({children, }: ShoppingCartContextProviderProps) {
	const [shoppingCartState, dispatch] = useReducer(ShoppingCartReducer, 
		{ 
			products: [],
			totalValue: 0,
			totalItems: 0,
			totalDelivery: 0,
		});

	function addProductToCart(newProduct: ShoppingCartProduct) {
		dispatch({
			type: ActionTypes.ADD_PRODUCT_TO_CART,
			payload: {
				newProduct,
			},
		});
	}

	function changeQuantity(product: ShoppingCartProduct, addQty: number) {
		dispatch({
			type: ActionTypes.CHANGE_QUANTITY,
			payload: {
				product,
				addQty,
			}
		});
	}

	const { totalDelivery, totalItems, totalValue, products, } = shoppingCartState;
    
	return (
		<ShoppingCartContext.Provider value={{ totalValue, totalDelivery, totalItems, products, addProductToCart, changeQuantity, }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}