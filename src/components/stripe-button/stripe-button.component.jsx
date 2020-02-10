import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_uccgS5cz3BgmQJF5Jpfi3zhe';
	const onToken = token => {
		console.log(token);
		alert('Payment succesful');
	} 

	return (
		<StripeCheckout
		label='Pay Now'
		name='Crown Clothing'
		billingAddress
		shippingAddress
		image='https://sendeyo.com/up/d/f3eb2117da'
		description={`Your total is ${price}`}
		amount={priceForStripe}
		panelLabel='Pay now'
		token={onToken}
		stripeKey={publishableKey}
		/>
		)
	}

export default StripeCheckoutButton;