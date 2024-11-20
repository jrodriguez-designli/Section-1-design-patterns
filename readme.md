**Explanation of the Structure**

1. /interfaces/: Contains the PaymentMethod interface, defining the common structure for all payment methods.
2. /providers/: Contains the implementations of third-party payment services (ThirdPartyPaymentA, ThirdPartyPaymentB).
3. /adapters/: Contains adapters that convert specific provider interfaces into a common PaymentMethod interface.
4. /services/: Contains the Payments class, which uses the Strategy pattern to manage and execute payment methods.
5. main.ts: Contains the entry point (main.ts) where the application is initialized and used.


**Execution**

1. npm install
2. npm run start

