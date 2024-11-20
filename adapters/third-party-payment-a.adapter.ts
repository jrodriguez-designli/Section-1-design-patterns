import { IPaymentMethod } from "../interfaces/payment-method.interface";
import { ThirdPartyPaymentA } from "../providers/third-party-payment-A.provider";

// Implement an adapter for third-party payment service A
export class ThirdPartyPaymentAdapterA implements IPaymentMethod {
  private thirdPartyPayment: ThirdPartyPaymentA;

  constructor(thirdPartyPayment: ThirdPartyPaymentA) {
    this.thirdPartyPayment = thirdPartyPayment;
  }

  makePayment(): string {
    return this.thirdPartyPayment.pay(); // Adapting the interface
  }
}
