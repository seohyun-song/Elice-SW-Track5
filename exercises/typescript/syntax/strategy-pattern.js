"use strict";
// 전략 1
class CardPaymentStrategy {
    pay() {
        console.log("card pay");
    }
}
// 전략 2
class CashPaymentStrategy {
    pay() {
        console.log("cash pay");
    }
}
// context: 실행되어야 하는 전략을 전달 받는 클래스
class VendingMachine {
    setPaymentStrategy(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    pay() {
        this.paymentStrategy.pay();
    }
}
const vendingMachine = new VendingMachine();
const cashpay = new CashPaymentStrategy();
vendingMachine.setPaymentStrategy(new CashPaymentStrategy());
vendingMachine.pay(); // cash pay
vendingMachine.setPaymentStrategy(new CardPaymentStrategy());
vendingMachine.pay(); // card pay
