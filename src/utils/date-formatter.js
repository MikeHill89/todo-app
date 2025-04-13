import { parseISO } from 'date-fns';

// Date Formatter Service (external responsibility)
export default class DateFormatter {
	static formatBritishDate(date) {
		const { format } = require('date-fns');
		return format(date, 'dd/MM/yyyy');  // British format
	}
}
