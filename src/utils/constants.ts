export const passwordRegex =
	/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9\s]).{6,}$/gm;

export const STATUSES = {
	AVAILABLE: "AVAILABLE",
};

export const SECOND_IN_MS = 1000;

export const instructions = [
	"forgotPasswordInstructionOne",
	"forgotPasswordInstructionTwo",
	"forgotPasswordInstructionThree",
];
