// 사용자 목록이 영구적으로 유지되도록 하려면 데이터를 서버에 저장하거나 클라이언트 측에 저장해야함.
(function (window) {
	class Store {
		constructor(name) {
			let isSupported;
			try {
				window.localStorage.setItem("test", "test");
				window.localStorage.removeItem("test");
				isSupported = true;
			} catch (e) {
				isSupported = false;
			}
			this.name = name;
			this.isSupported = isSupported;
		}
		save(items) {
			const json = JSON.stringify(items);
			window.localStorage.setItem(this.name, json);
		}
		load() {
			const items = window.localStorage.getItem(this.name);
			return items && items.length ? JSON.parse(items) : [];
		}
	}
	window.Store = Store;
})(window);
