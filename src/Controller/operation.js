
exports.addNumber = (req, res) => {
	const { num1, num2 } = req.body;

	let result = num1 + num2;

	if (result > 1000000) {
		return res.json({
			status: `error`,
			message: `Overflow`,
		});
	}

	return res.json({
		status: `success`,
		message: `the sum of given two numbers`,
		sum: result,
	});
};

exports.subNumber = (req, res) => {
	const { num1, num2 } = req.body;

	let result = num1 - num2;

	if (result > 1000000) {
		return res.json({
			status: `error`,
			message: `Overflow`,
		});
	} else if (result < -1000000) {
		return res.json({
			status: `error`,
			message: `Underflow`,
		});
	}

	return res.json({
		status: `success`,
		message: `the difference of given two numbers`,
		sum: result,
	});
};

exports.mulNumber = (req, res) => {
	const { num1, num2 } = req.body;

	let result = num1 * num2;

	if (result > 1000000) {
		return res.json({
			status: `error`,
			message: `Overflow`,
		});
	}

	return res.json({
		status: `success`,
		message: `The product of given numbers`,
		result,
	});
};

exports.divNumber = (req, res) => {
	const { num1, num2 } = req.body;

	if (num2 === 0) {
		return res.json({
			status: `error`,
			message: `Cannot divide by zero`,
		});
	}
	let result = num1 / num2;

	if (result > 1000000) {
		return res.json({
			status: `error`,
			message: `Overflow`,
		});
	}

	return res.json({
		status: `success`,
		message: `The division of given numbers`,
		result,
	});
};