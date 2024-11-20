import { IPaymentMethod } from "../interfaces/payment-method.interface";
import { ThirdPartyPaymentB } from "../providers/third-party-payment-B.provider";

// Implement an adapter for third-party payment service B
export class ThirdPartyPaymentAdapterB implements IPaymentMethod {
  private thirdPartyPayment: ThirdPartyPaymentB;

  constructor(thirdPartyPayment: ThirdPartyPaymentB) {
    this.thirdPartyPayment = thirdPartyPayment;
  }

  makePayment(): string {
    return this.thirdPartyPayment.processPayment(); // Adapting the interface
  }
}
