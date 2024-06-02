const isValidValue = (input, validValues) => {
	const valid =
		validValues.filter((validValue) => validValue === input).length > 0;
	if (!valid) {
		throw new Error(
			`Input value ${input} not in set of valid values ${validValues}`
		);
	}
};

export { isValidValue };
