import React from "react";
import "./ListView.css";

const ListView = ({ todoList, onComplete, onRemove }) => {
	return (
		<div className="list-view">
			<ol>
				{todoList.map((item, index) => {
					return (
						<li
							key={item.key}
							className={item.isCompleted ? "complete" : ""}
						>
							<div>
								<span>{item.value}</span>
							</div>
							<button
								type="button"
								className="btn-complete"
								onClick={() => {
									if (typeof onComplete === "function") {
										onComplete(index);
									}
								}}
							>
								완료
							</button>
							<button
								type="button"
								className="btn-remove"
								onClick={() => {
									if (typeof onRemove === "function") {
										onRemove(index);
									}
								}}
							>
								삭제
							</button>
						</li>
					);
				})}
			</ol>
		</div>
	);
};

export default ListView;
