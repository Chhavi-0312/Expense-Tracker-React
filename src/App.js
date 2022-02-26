import React, { useState } from 'react';

import NewExpense from './Components/NewExpense/NewExpenses';
import Expenses from './Components/Expenses/Expense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Bike',
    amount: 900,
    date: new Date(2020, 6, 14),
  },
  {
    id: 'e6',
    title: 'Party',
    amount: 400,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e8',
    title: 'Waching Machine',
    amount: 200,
    date: new Date(2020, 5, 14),
  },
  {
    id: 'e9',
    title: 'Trip',
    amount: 1100,
    date: new Date(2020, 1, 14),
  },
  {
    id: 'e10',
    title: 'Books',
    amount: 900,
    date: new Date(2020, 2, 14),
  },{
    id: 'e11',
    title: 'Renovation',
    amount: 1200,
    date: new Date(2020, 3, 14),
  },{
    id: 'e12',
    title: 'Microwave',
    amount: 300,
    date: new Date(2020, 12, 14),
  },
  {
    id: 'e13',
    title: 'Medical Insurance',
    amount: 900,
    date: new Date(2019, 1, 14),
  },{
    id: 'e14',
    title: 'Grocery',
    amount: 500,
    date: new Date(2019, 4, 14),
  },{
    id: 'e15',
    title: 'Rent',
    amount: 90,
    date: new Date(2019, 7, 14),
  },{
    id: 'e16',
    title: 'Fridge',
    amount: 300,
    date: new Date(2019, 8, 14),
  },{
    id: 'e17',
    title: 'Fees',
    amount: 90,
    date: new Date(2019, 12, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 80,
    date: new Date(2022, 5, 12),
  },
  {
    id: 'e19',
    title: 'New Bed',
    amount: 120,
    date: new Date(2022, 3, 12),
  },{
    id: 'e18',
    title: 'Party',
    amount: 100,
    date: new Date(2022, 11, 12),
  },{
    id: 'e20',
    title: 'Insurance',
    amount: 500,
    date: new Date(2022, 9, 12),
  },
  {
    id: 'e21',
    title: 'Car',
    amount: 1500,
    date: new Date(2020, 8, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;