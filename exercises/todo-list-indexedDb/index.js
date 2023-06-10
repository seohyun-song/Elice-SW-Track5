if (window.indexedDB) {
	var database = {
		db: null,
		dbName: "todos",
		version: 1,
		storeName: "todo",
		// 데이터베이스 열기
		open: function () {
			const dbReq = indexedDB.open(database.dbName, database.version);
			dbReq.addEventListener("success", function (event) {
				database.db = event.target.result;
				database.getAllTodoItems();
			});
			dbReq.addEventListener("upgradeneeded", function (event) {
				const db = event.target.result;
				db.createObjectStore(database.storeName, {
					keyPath: "timeStamp",
				});
			});
		},
		// 데이터베이스 추가
		addTodo: function (todoText) {
			const db = database.db;
			const trans = db.transaction(database.storeName, "readwrite");
			const store = trans.objectStore(database.storeName);

			const data = {
				text: todoText,
				timeStamp: new Date().getTime(),
			};

			const req = store.add(data);

			req.addEventListener("success", function (e) {
				database.getAllTodoItems();
			});
		},
		// 데이터베이스 삭제
		deleteTodo: function (id) {
			const db = database.db;
			const trans = db.transaction(database.storeName, "readwrite");
			const store = trans.objectStore(database.storeName);
			const req = store.delete(id);

			req.addEventListener("success", function (e) {
				database.getAllTodoItems();
			});
		},
		// 데이터베이스 전체 삭제
		clearTodo: function () {
			const db = database.db;
			const trans = db.transaction(database.storeName, "readwrite");
			const store = trans.objectStore(database.storeName);
			const req = store.clear();

			req.addEventListener("success", function (e) {
				database.getAllTodoItems();
			});
		},
		// 데이터베이스 모든 값 탐색
		getAllTodoItems: function () {
			const $todoList = document.querySelector("#todo-list");
			$todoList.innerHTML = "";

			const db = database.db;
			const trans = db.transaction(database.storeName);
			const store = trans.objectStore(database.storeName);
			const cursorRequest = store.openCursor();

			cursorRequest.onsuccess = (event) => {
				const result = event.target.result;
				console.log(result);
				// cursor.value contains the current record being iterated through
				// this is where you'd do something with the result
				if (result) {
					renderTodo(result.value);
					result.continue();
				} else {
				}
			};
		},
	};
}

function renderTodo(row) {
	const $todoList = document.querySelector("#todo-list");
	const $li = document.createElement("li");
	const $span = document.createElement("span");
	const $deleteBtn = document.createElement("button");

	$span.textContent = row.text;
	$deleteBtn.className = "delete-btn";
	$li.appendChild($span);
	$li.appendChild($deleteBtn);
	$deleteBtn.addEventListener("click", function () {
		database.deleteTodo(row.timeStamp);
	});
	$todoList.appendChild($li);
}

function addList() {
	const $todo = document.querySelector("#todo");
	if (!$todo.value) {
		$todo.focus();
		return;
	}
	database.addTodo($todo.value);
	$todo.value = "";
}
const $addBtn = document.querySelector("#add-btn");
$addBtn.addEventListener("click", addList);

const $clearBtn = document.querySelector("#clear-btn");
$clearBtn.addEventListener("click", database.clearTodo);

function main() {
	database.open();
}

window.addEventListener("DOMContentLoaded", main);
