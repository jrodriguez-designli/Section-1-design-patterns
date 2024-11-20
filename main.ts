import { ThirdPartyPaymentAdapterA } from "./adapters/third-party-payment-a.adapter";
import { ThirdPartyPaymentAdapterB } from "./adapters/third-party-payment-adapter-b.adapter";
import { ThirdPartyPaymentA } from "./providers/third-party-payment-A.provider";
import { ThirdPartyPaymentB } from "./providers/third-party-payment-B.provider";
import { Payments } from "./services/payments.service";

// Application initialization and usage
const paymentMethodA = new ThirdPartyPaymentAdapterA(new ThirdPartyPaymentA());
const paymentMethodB = new ThirdPartyPaymentAdapterB(new ThirdPartyPaymentB());

const payments = new Payments(paymentMethodA);
console.log(payments.makePayment()); // Output: "Payment made by ThirdPartyPaymentA"

// Change the payment method at runtime
payments.setPaymentMethod(paymentMethodB);
console.log(payments.makePayment()); // Output: "Payment made by ThirdPartyPaymentB"
