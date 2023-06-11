(function () {
	// define class App, setting some basic properties such as it's name
	// and the DOM elements interacting with, alongside creating a state forom out state.js
	class App {
		constructor(name) {
			this.name = name;
			this.state = new State(name);
			this.dom = {
				button: document.querySelector("button"),
				date: document.querySelector("h2"),
				list: document.querySelector("ul"),
				form: document.querySelector("form"),
				input: document.querySelector("input"),
			};
			this.bindEvents();
			this.render();
		}
		// 상태에 따라 UI를 렌더링 한다.
		// 렌더는 데이터 생성방법에 관심이 없다. 단지 데이터를 표시하는 방법에 관심이 있다.
		render() {
			let listHTML = "";
			// loop through the items stored in state, and updata the contnets of our ul
			for (const item of this.state.items) {
				const className = item.status ? "done" : "";
				listHTML += `
					<li class="${className}" data-id="${item.id}">
						<input type="checkbox" ${item.status ? "checked" : ""}>
						${item.value} <button>X</button>
					</li>
				`;
			}
			this.dom.date.innerHTML = this.state.date;
			// apply classes to the form depending on the state of focus and valid
			this.dom.form.classList.toggle("focus", this.state.form.focus);
			this.dom.form.classList.toggle("valid", this.state.form.valid);
			this.dom.list.innerHTML = listHTML;
		}
		// form submit이벤트 리스너에 이벤트를 바인딩함
		bindEvents() {
			this.dom.form.addEventListener(
				"submit",
				this.submitForm.bind(this)
			);
			this.dom.list.addEventListener(
				"click",
				this.handleClick.bind(this)
			);
		}
		submitForm(e) {
			e.preventDefault();
			if (!this.dom.input.value.length) return;
			// input을 가져와 app state에 반영
			this.state.addItem(this.dom.input.value);
			this.dom.input.value = "";
			// 새로운 아이템을 추가한 뒤 UI에 상태를 업데이트 하기위해 다시 한번 렌더링 한다.
			this.render();
		}
		handleClick(e) {
			if (e && e.target) {
				const element = e.target.type;
				if (element === "submit" || element === "checkbox") {
					const id = parseInt(
						e.target.parentNode.getAttribute("data-id")
					);
					if (element === "submit") {
						this.state.deleteItem(id);
					} else {
						this.state.toggleItemStatus(id);
					}
				}
			}
			this.render();
		}
	}
	// initialise the app by invoking a new instance
	const app = new App("todo-list-state-example");
	console.log(app);
})(window.State);
