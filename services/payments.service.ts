import { IPaymentMethod } from "../interfaces/payment-method.interface";

// Class that uses the Strategy pattern to manage payment methods
export class Payments {
  private paymentMethod: IPaymentMethod;

  constructor(paymentMethod: IPaymentMethod) {
    this.paymentMethod = paymentMethod;
  }

  setPaymentMethod(paymentMethod: IPaymentMethod): void {
    this.paymentMethod = paymentMethod;
  }

  makePayment(): string {
    return this.paymentMethod.makePayment();
  }
}
