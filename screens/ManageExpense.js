import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet } from "react-native";

import IconButton from "../components/UI/IconButton";
import { colors } from "../components/4kauanmotaPatterns/GlobalStyles";
import MainButton from "../components/UI/MainButton";
import { ExpensesContext } from "../store/expense-context";

function ManageExpenses({ navigation, route }) {
  const expenseCtx = useContext(ExpensesContext)

  const expenseId = route.params?.expenseId;
  const isEditing = !!expenseId;

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expense' : 'Add Expense'
    })
  }, [navigation, isEditing])

  function cancelHandler() {
    navigation.goBack();
  }

  function confirmHandler() {
    if(isEditing){
      expenseCtx.updateExpense(
        expenseId,
        {
          description: 'aaaaaaaaaaaaaaaaaa',
          amount: 29.99,
          date: new Date(),
        }
      )
    }
    else {
      expenseCtx.addExpense(
        {
          description: 'bbbbbbbbbbbbbbbbbbb',
          amount: 29.99,
          date: new Date(),
        }
      )
    }
    navigation.goBack();
  }

  function removeHandler() {
    expenseCtx.removeExpense(expenseId);
    navigation.goBack();
  }

  return (
    <View>
      <View style={styles.buttonsArea}>
        <MainButton mode='flat' onPress={cancelHandler}> Cancel </MainButton>
        <MainButton onPress={confirmHandler}> {isEditing ? 'Update' : 'Add'} </MainButton>
      </View>

      {isEditing &&
        (
          <View style={styles.deleteArea}>
            <IconButton icon={'trash'} color={colors.highlight} size={40} onPress={removeHandler} />
          </View>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  buttonsArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
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