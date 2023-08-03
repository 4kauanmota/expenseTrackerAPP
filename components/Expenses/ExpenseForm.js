import { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import Input from "../4kauanmotaPatterns/components/Input";
import MainButton from "../UI/MainButton";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({onCancel, onConfirm, isEditing, defaultValue}) {
  const [expense, setExpense] = useState({
    description: defaultValue ? defaultValue.description : '',
    date: defaultValue ? getFormattedDate(defaultValue.date) : '',
    amount: defaultValue ? defaultValue.amount.toString() : ''
  })

  function inputHandler(inputIdentifier, value) {
    setExpense((actualExpense) => {
      return { ...actualExpense, [inputIdentifier]: value }
    })
  }

  function submitHandler() {
    const data = {
      description: expense.description,
      date: new Date(expense.date),
      amount: +expense.amount,
    }

    onConfirm(data)
  }

  return (
    <View style={styles.container}>

      <View style={styles.descriptionContainer}>
        <Input inputConfig={{ placeholder: 'Description', multiline: true, onChangeText: inputHandler.bind(this, 'description'), value: expense.description }} />
      </View>

      <View style={styles.lowTextContainer}>
        <Input inputConfig={{ placeholder: 'Date', onChangeText: inputHandler.bind(this, 'date'), value: expense.date, maxLength: 10 }} style={{ width: '48%'}} />

        <Input inputConfig={{ placeholder: 'Amount', onChangeText: inputHandler.bind(this, 'amount'), value: expense.amount, keyboardType: 'decimal-pad', }} style={{ width: '48%'}} />
      </View>

      <View style={styles.buttonsArea}>
        <MainButton mode='flat' onPress={onCancel}> Cancel </MainButton>
        <MainButton onPress={submitHandler}> {isEditing ? 'Update' : 'Add'} </MainButton>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    marginHorizontal: 10,
    marginTop: 10,
    gap: 10,
  },

  descriptionContainer: {
  },

  buttonsArea: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },  


  lowTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  }
})

export default ExpenseForm;