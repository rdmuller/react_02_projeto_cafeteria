import { createContext, ReactNode, useEffect, useReducer } from "react";
import { ActionTypes } from "../reducers/ShoppingCart/actions";
import { ShoppingCartProduct, ShoppingCartReducer, PaymentMode, Address } from "../reducers/ShoppingCart/reducer";

interface ShoppingCartContextType {
    products: ShoppingCartProduct[];
	totalValue: number;
	totalDelivery: number;
	totalItems: number;
	qtyItems: number;
	paymentMode: PaymentMode;
	address: Address;
    addProductToCart: (product: ShoppingCartProduct) => void;
	changeQuantity: (product: ShoppingCartProduct, addQty: number) => void;
	removeProduct: (productId: number) => void;
	changePaymentMode: (paymentMode: PaymentMode) => void;
	updateAddress: (address: Address) => void;
	clearCart: () => void;
}

const productsEmpty: ShoppingCartProduct[] = [];

const initialContext = { totalValue: 0, totalItems: 0, totalDelivery: 0, qtyItems: 0, paymentMode: "CREDIT_CARD", products: productsEmpty,
	address: { 
		CEP: undefined,
		street: "", 
		number: undefined, 
		complement: "", 
		district: "", 
		city: "", 
		state: ""
	}} as ShoppingCartContextType;

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

type ShoppingCartContextProviderProps = {
    children: ReactNode;
}

export function ShoppingCartContextProvider({children, }: ShoppingCartContextProviderProps) {
	const [shoppingCartState, dispatch] = useReducer(ShoppingCartReducer, initialContext, 
		() => {
			const storedState = localStorage.getItem("@react-02-coffe:cartState");

			if (storedState) {
				return JSON.parse(storedState);
			} else {
				return { products: [], totalValue: 0, totalItems: 0, totalDelivery: 0, qtyItems: 0, paymentMode: "MONEY", address: { 
					CEP: null,
					street: "",
					number: null,
					complement: "",
					district: "",
					city: "",
					state: "", 
				} };
			}
		});

	useEffect(() => {
		const stateJSON = JSON.stringify(shoppingCartState);
		localStorage.setItem("@react-02-coffe:cartState", stateJSON);
	}, [shoppingCartState]);

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

	function removeProduct(productId: number) {
		dispatch({
			type: ActionTypes.DELETE_PRODUCT,
			payload: {
				productId
			}
		});
	}	

	function changePaymentMode(paymentMode: PaymentMode) {
		dispatch({
			type: ActionTypes.CHANGE_PAYMENT_MODE,
			payload: {
				paymentMode,
			}
		});
	}

	function updateAddress(address: Address) {
		dispatch({
			type: ActionTypes.UPDATE_ADDRESS,
			payload: {
				address,
			}
		});
	}

	function clearCart() {
		dispatch({
			type: ActionTypes.CLEAR_CART,
			payload: {
				...initialContext,
				address: shoppingCartState.address,
				paymentMode: shoppingCartState.paymentMode, 
			}
		});
		//localStorage.removeItem("@react-02-coffe:cartState");
	}

	const { totalDelivery, totalItems, totalValue, products, qtyItems, paymentMode, address } = shoppingCartState;
    
	return (
		<ShoppingCartContext.Provider value={{ totalValue, totalDelivery, qtyItems, totalItems, products, paymentMode, address, addProductToCart, changeQuantity, removeProduct, changePaymentMode, updateAddress, clearCart, }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}