import { createContext, useReducer } from "react";
import { DUMMY_DATA } from "../constants/DUMMY_DATA";

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => { },
  removeExpense: (id) => { },
  updateExpense: (id, { description, amount, date }) => { },
})

function expensesReducer(state, action) {
  switch (action.type) {
    case 'add':
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state]
    case 'remove':
      return state.filter((expense) => expense.id !== action.payload)
    case 'update':
      const expenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updatableExpanse = state[expenseIndex];
      const updatedItem = { ...updatableExpanse, ...action.payload.data }
      const updatedExpenses = [...state];
      updatedExpenses[expenseIndex] = updatedItem
      return updatedExpenses;
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, DUMMY_DATA);

  function addExpense(expense) {
    dispatch({ type: 'add', payload: expense });
  }

  function removeExpense(expenseId) {
    dispatch({ type: 'remove', payload: expenseId });
  }

  function updateExpense(expenseId, expense) {
    dispatch({ type: 'update', payload: { id: expenseId, data: expense } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    removeExpense: removeExpense,
    updateExpense: updateExpense
  }

  return (
    <ExpensesContext.Provider value={value}> 
      {children} 
    </ExpensesContext.Provider>
  )
}

export default ExpensesContextProvider;