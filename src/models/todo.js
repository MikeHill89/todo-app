import DateFormatter from "../utils/date-formatter";
export default class todoModel {
	#title;
	#description;
	#dueDate;
	#priority;
	#notes;
	#checklist;
	#completed;

	constructor(title, description, dueDate, priority, notes = "", checklist = []) {
		this.#title = title;
		this.#description = description;
		this.#dueDate = new Date(dueDate);
		this.#priority = priority;
		this.#notes = notes;
		this.#checklist = checklist;
		this.#completed = false;
	}

	// getters
	get title() {
		return this.#title;
	}

	get description() {
		return this.#description;
	}

	get dueDate() {
		return this.#dueDate;
	}

	get priority() {
		return this.#priority;
	}

	get notes() {
		return this.#notes;
	}

	get checklist() {
		return this.#checklist;
	}
}
