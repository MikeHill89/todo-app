import todoModel from './models/todo';
import DateFormatter from './utils/date-formatter';

const testTodo = new todoModel("Test todo", "Test description", "2025-05-01", "high", "Some notes", ['checklist 1', 'my 2nd item']);
console.log(testTodo.title);        // Test todo
console.log(testTodo.description);  // Test description
console.log(DateFormatter.formatBritishDate(testTodo.dueDate));      // 2025-05-01 (Date object)
console.log(testTodo.priority);     // High
console.log(testTodo.notes);        // Some notes
console.log(testTodo.checklist);    // ['Checklist item 1']
