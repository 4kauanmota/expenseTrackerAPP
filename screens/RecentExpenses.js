import { useContext } from "react";

import ExpansesOutput from "../components/Expenses/ExpensesOutput";
import { getDateMinusDays } from "../util/date";
import { ExpensesContext } from "../store/expense-context";

function RecentExpenses() {
  const expenses = useContext(ExpensesContext)

  const today = new Date();
  const xDaysAgo = getDateMinusDays(today, 7);
  const recentExpenses = expenses.expenses.filter((expense) => expense.date >= xDaysAgo && expense.date <= today)

  return(
    <ExpansesOutput periodName='Last 7 Days' expenses={recentExpenses} />
  )
}

export default RecentExpenses;