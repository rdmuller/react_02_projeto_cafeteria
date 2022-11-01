import { createContext, ReactNode, useState } from "react";

export interface ShoppingCartProduct {
    productId: number;
    productQuantity: number;
    productPrice: number;
    productName: string;
}

interface ShoppingCartContextType {
    products: ShoppingCartProduct[];
    addProductToCart: (product: ShoppingCartProduct) => void;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextType);

type ShoppingCartContextProviderProps = {
    children: ReactNode;
}

export function ShoppingCartContextProvider({children, }: ShoppingCartContextProviderProps) {
	const [products, setProducts] = useState<ShoppingCartProduct[]>([]);

	function addProductToCart(newProduct: ShoppingCartProduct) {
		setProducts(state => [...state, newProduct]);        
	}
    
	console.log(JSON.stringify(products));

	return (
		<ShoppingCartContext.Provider value={{ products, addProductToCart }}>
			{children}
		</ShoppingCartContext.Provider>
	);
}