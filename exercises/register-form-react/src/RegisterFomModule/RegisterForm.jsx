import React, { useState } from "react";
import styles from "./register-form.module.css";

const InputStatus = {
	NORMAL: "normal",
	ERROR: "error",
	SUCCESS: "success",
};

const RegisterForm = () => {
	const [name, setName] = useState("");
	const [age, setAge] = useState("");
	const [nameInputStatus, setNameInputStatus] = useState(InputStatus.NORMAL);
	const [ageInputStatus, setAgeInputStatus] = useState(InputStatus.NORMAL);

	const handleNameChange = (e) => {
		setName(e.target.value);
	};

	const handleAgeChange = (e) => {
		setAge(e.target.value);
	};

	const validateName = (name) => {
		if (name.length < 1 || name.length > 10) {
			setNameInputStatus(InputStatus.ERROR);
			return;
		}

		setNameInputStatus(InputStatus.SUCCESS);
	};

	const validateAge = (age) => {
		const numberedAge = Number(age);
		if (numberedAge < 1 || numberedAge > 100) {
			setAgeInputStatus(InputStatus.ERROR);
			return;
		}

		setAgeInputStatus(InputStatus.SUCCESS);
	};

	const validateForm = (form) => {
		validateName(form.name);
		validateAge(form.age);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const formData = { name, age };
		validateForm(formData);
	};

	const handleReset = () => {
		setName("");
		setAge("");
		setNameInputStatus(InputStatus.NORMAL);
		setAgeInputStatus(InputStatus.NORMAL);
	};

	const getInputStatusStyle = (status) => {
		if (status === InputStatus.ERROR) {
			return styles.inputInvalid;
		} else if (status === InputStatus.SUCCESS) {
			return styles.inputValid;
		}
		return "";
	};

	return (
		<form className={styles.formContainer}>
			<fieldset className={styles.formFieldset}>
				<label
					htmlFor="name"
					className={`${styles.formLabel} ${
						nameInputStatus === InputStatus.ERROR
							? styles.textError
							: ""
					}`}
				>
					이름
				</label>
				<input
					type="text"
					id="name"
					className={`${styles.formInput} ${getInputStatusStyle(
						nameInputStatus
					)}`}
					name="name"
					placeholder="이름을 입력해 주세요."
					value={name}
					onChange={handleNameChange}
				/>

				<div className={`${styles.textError} ${styles.formError}`}>
					{nameInputStatus === InputStatus.ERROR &&
						"이름은 1글자 이상, 10글자 이하여야 합니다."}
				</div>
			</fieldset>

			<fieldset className={styles.formFieldset}>
				<label
					htmlFor="age"
					className={`${styles.formLabel} ${
						ageInputStatus === InputStatus.ERROR
							? styles.textError
							: ""
					}`}
				>
					나이
				</label>
				<input
					type="number"
					id="age"
					name="age"
					className={`${styles.formInput} ${getInputStatusStyle(
						ageInputStatus
					)}`}
					value={age}
					placeholder="나이를 입력해 주세요."
					onChange={handleAgeChange}
				/>
				<div className={`${styles.textError} ${styles.formError}`}>
					{ageInputStatus === InputStatus.ERROR &&
						"나이는 1부터 100 사이여야 합니다."}
				</div>
			</fieldset>

			<div className={styles.buttonContainer}>
				<button
					type="button"
					className={`${styles.formButton} ${styles.resetButton}`}
					onClick={handleReset}
				>
					초기화
				</button>
				<button
					type="button"
					className={`${styles.formButton} ${styles.submitButton}`}
					onClick={handleSubmit}
				>
					제출
				</button>
			</div>
		</form>
	);
};

export default RegisterForm;
