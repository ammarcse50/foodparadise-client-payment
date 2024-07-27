import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (!card) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log('payment error ',error);
    } else {
      console.log('paymentMethod',paymentMethod);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <CardElement options={{  style: {
      base: {
        color: 'white',
        fontSize: '16px',
        '::placeholder': {
          color: 'white'
        }
      },
      invalid: {
        color: 'red'
      }
    }}}></CardElement>

      <button
        className="btn btn-warning mt-10"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckOutForm;
