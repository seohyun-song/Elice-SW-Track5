// 전략 인터페이스(starategy interface): 모든 전략 서브 클래스들이 구현해야 하는 것
interface PaymentStrategy {
	pay(): void;
}
// 전략 1
class CardPaymentStrategy implements PaymentStrategy {
	pay() {
		console.log("card pay");
	}
}
// 전략 2
class CashPaymentStrategy implements PaymentStrategy {
	pay() {
		console.log("cash pay");
	}
}

// context: 실행되어야 하는 전략을 전달 받는 클래스
class VendingMachine {
	private paymentStrategy: PaymentStrategy;

	setPaymentStrategy(paymentStrategy: PaymentStrategy) {
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
