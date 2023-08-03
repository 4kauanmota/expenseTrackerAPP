import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/UI/IconButton";
import { colors } from "../components/4kauanmotaPatterns/GlobalStyles";
import { ExpensesContext } from "../store/expense-context";
import ExpenseForm from "../components/Expenses/ExpenseForm";

function ManageExpenses({ navigation, route }) {
  const expenseCtx = useContext(ExpensesContext)

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  const selectedExpense = expenseCtx.expenses.find((expense) => expense.id === expenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler(expense) {
    if (isEditing) {
      expenseCtx.updateExpense(
        expenseId,
        expense
      )
    }
    else {
      expenseCtx.addExpense(expense)
    }
    navigation.goBack();
  }

  function removeHandler() {
    expenseCtx.removeExpense(expenseId);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <ExpenseForm onCancel={cancelHandler} onConfirm={confirmHandler} isEditing={isEditing} defaultValue={selectedExpense} />
      </View>

      <View style={{ flex: 1 }}>
        {isEditing &&
          (
            <View style={styles.deleteArea}>
              <IconButton icon={'trash'} color={colors.highlight} size={40} onPress={removeHandler} />
            </View>
          )
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  deleteArea: {
    paddingTop: 8,
    marginHorizontal: 10,
    marginTop: 10,
    borderTopWidth: 2,
    borderTopColor: colors.strongBackground,
    alignItems: 'center',
  },
})

export default ManageExpenses;