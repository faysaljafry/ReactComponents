//Some Important Imports
import './Expenses.css';
import ExpenseItem from './components/ExpenseItem';
import Card from './components/Card';

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Water Bottle',
      amount: 294.64,
      data: new Date(2021, 2, 22),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.64,
      data: new Date(2021, 2, 22),
    },
    { id: 'e3', title: 'Grocery', amount: 294.64, data: new Date(2021, 2, 22) },
    { id: 'e4', title: 'Food', amount: 294.64, data: new Date(2021, 2, 22) },
  ];
  return (
    <div>
      <h2 className='heading'>The Expense Tracker</h2>
      <Card className='expenses'>
        <ExpenseItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          data={expenses[0].data}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          data={expenses[1].data}
        ></ExpenseItem>
        <ExpenseItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          data={expenses[2].data}
        ></ExpenseItem>
      </Card>
    </div>
  );
}

export default App;
