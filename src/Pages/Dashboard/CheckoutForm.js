import React, {useEffect, useState} from 'react';
import { CardElement,useStripe,useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({payment}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError]=useState()
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { _id, total,userName,email} = payment;
    useEffect(() => {
      fetch('https://vast-badlands-64337.herokuapp.com/create-payment-intent', {
          method: 'POST',
          headers: {
              'content-type': 'application/json',
          },
          body: JSON.stringify({ total })
      })
          .then(res => res.json())
          .then(data => {
              if (data?.clientSecret) {
                  setClientSecret(data.clientSecret);
              }
          });

  }, [total])
    const handleSubmit = async (event) => {
      // Block native form submission.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js has not loaded yet. Make sure to disable
        // form submission until Stripe.js has loaded.
        return;
      }
  
      // Get a reference to a mounted CardElement. Elements knows how
      // to find your CardElement because there can only ever be one of
      // each type of element.
      const card = elements.getElement(CardElement);
  
      if (card == null) {
        return;
      }
  
      // Use your card Element with other Stripe.js APIs
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
        setCardError(error?.message ||'')
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
          clientSecret,
          {
              payment_method: {
                  card: card,
                  billing_details: {
                      name: userName,
                      email: email
                  },
              },
          },
      );

      if (intentError) {
          setCardError(intentError?.message);
          setProcessing(false);
      }
      else {
          setCardError('');
          setTransactionId(paymentIntent.id);
          console.log(paymentIntent);
          setSuccess('Congrats! Your payment is completed.')
          
          //store payment on database
          const payment = {
              appointment: _id,
              transactionId: paymentIntent.id
          }
          fetch(`https://vast-badlands-64337.herokuapp.com/booking/${_id}`, {
              method: 'PATCH',
              headers: {
                  'content-type': 'application/json',
              },
              body: JSON.stringify(payment)
          }).then(res=>res.json())
          .then(data => {
              setProcessing(false);
              console.log(data);
          })

      }
  
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
            <CardElement
            options={{
                style: {
                base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                    color: '#aab7c4',
                    },
                },
                invalid: {
                    color: '#9e2146',
                },
                },
            }}
            />
            <button type="submit" disabled={!stripe}>
            Pay
            </button>
        </form>
        {
            cardError && <p className="text-red-500"></p>
        }
        </>
      
    );
};

export default CheckoutForm;