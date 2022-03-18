import React, { useState, useEffect } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51KeDy4FkYRYTO3iFfudn4MjPO8k3oblu2cLUq0fTok8ZlLaOLMi7BNLndoErshtYIPKpT368914rXzi5fO7oTUk400q7JO4AWy"
);

function Payments() {
  const [clientSecret, setClientSecret] = useState("");

  // useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http:localhost:8080/api/v1.0/payments/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  // }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}

export default Payments;
