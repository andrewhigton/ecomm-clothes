import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey = 'pk_test_GxoLwpaJRAn1kdTQGlL8EwZa00qqtVHbM3';
	const onToken = token => {
	axios({ 
			url: 'payment', 
			method: 'post',
			data: {
				amount: priceForStripe,
				token
			}
		 })
		.then(response => {
		 	alert('Payment succesful. We have sent your tickets to your email address and will notify when the film has been booked');	
		 })
		.catch(error => {
			console.log('Payment error: ', JSON.parse(error)); 	
		 	alert('Payment error. Please use the provided credit card details');	
		 }) 
	
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