(function (window, Store) {
	class State {
		constructor(name) {
			this.itemId = 1;
			this.date = this.setDate();
			this.form = {
				focus: false,
				valid: false,
			};
			this.items = [];
			this.store = new Store(name);
			// localStorage에서 항목 로드
			if (this.store.isSupported) {
				this.items = this.store.load();
			}
			// localStorage에서 로드한 항목 존재하는 경우 Id 업데이트
			if (this.items.length) {
				for (const item of this.items) {
					if (item.id >= this.itemId) {
						this.itemId = item.id + 1;
					}
				}
			}
			this.orderItems();
		}
		saveItems() {
			if (this.store.isSupported) {
				this.store.save(this.items);
			}
		}

		addItem(item) {
			this.items.unshift({
				id: this.itemId++,
				status: 0, // 완료상태
				value: item,
			});
			this.saveItems();
		}
		findItemIndex(id) {
			return this.items.findIndex((item) => item.id === id);
		}
		orderItems() {
			const todo = this.items.filter((item) => item.status === 0);
			const done = this.items.filter((item) => item.status === 1);
			this.items = [...todo, ...done];
		}
		deleteItem(id) {
			const itemIndex = this.findItemIndex(id);
			this.items.splice(itemIndex, 1);
			this.saveItems();
		}
		toggleItemStatus(id) {
			const itemIndex = this.findItemIndex(id);
			this.items[itemIndex].status = this.items[itemIndex].status ? 0 : 1;
			this.orderItems();
			this.saveItems();
		}
		setDate() {
			const date = new Date();
			const monthNames = [
				"January",
				"February",
				"March",
				"April",
				"May",
				"June",
				"July",
				"August",
				"September",
				"October",
				"November",
				"December",
			];
			const day = date.getDate();
			const monthIdx = date.getMonth();
			const year = date.getFullYear();
			return `${day} ${monthNames[monthIdx]} ${year}`;
		}
	}
	// 전역객체에 등록되어 app.js에서 사용
	window.State = State;
})(window, window.Store);
