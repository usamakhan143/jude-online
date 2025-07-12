// Using Stripe Payment Link (more reliable than client-only checkout)
export const redirectToPaymentLink = () => {
  const paymentLinkUrl =
    import.meta.env.VITE_STRIPE_PAYMENT_LINK ||
    "https://buy.stripe.com/test_eVqbJ3afA4iU6hN5ua8og00";
  window.location.href = paymentLinkUrl;
};

export const redirectToCheckout = async () => {
  // Use Payment Link instead of client-only checkout for better compatibility
  console.log("Redirecting to Stripe Payment Link...");

  try {
    // Use the payment link method instead
    redirectToPaymentLink();
  } catch (err) {
    console.error("Payment redirect error:", err);
    throw new Error("Unable to redirect to payment page. Please try again.");
  }
};
