export const addItemToCart = (cartItems, cartItemToAdd) => {
	//find if there is a match to cartItemto Add in state
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToAdd.id
		);
	//if true, map the array and add 1 to the quantity, else, reutrn the cartItem?? why?
	if(existingCartItem) {
		return cartItems.map(cartItem => 
			cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 }
			: cartItem
			)
		}
		//else add the item to the cart, with a quant of 1
		return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
	}	 

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
	const existingCartItem = cartItems.find(
		cartItem => cartItem.id === cartItemToRemove.id
		)
		//if true, filter and keep all items not equal to caritemtoremove
		if(existingCartItem === 1) {
			return cartItems.filter(cartItem =>
			 	cartItem.id !== cartItemToRemove.id
		)}
		//then what's the point of this bit? like a double down? 
		//go through this 
		return cartItems.map(cartItem => 
			cartItem.id === cartItemToRemove.id ? 
			{ ...cartItem, quantity: cartItem.quantity - 1 }
			: cartItem
			)
		};