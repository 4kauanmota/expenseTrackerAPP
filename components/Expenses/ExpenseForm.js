import { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";

import Input from "../4kauanmotaPatterns/components/Input";
import MainButton from "../UI/MainButton";
import { getFormattedDate } from "../../util/date";

function ExpenseForm({ onCancel, onConfirm, isEditing, defaultValue }) {
  const [inputs, setInputs] = useState({
    description: {
      value: defaultValue ? defaultValue.description : '',
      isValid: true
    },
    date: {
      value: defaultValue ? getFormattedDate(defaultValue.date) : '',
      isValid: true
    },
    amount: {
      value: defaultValue ? defaultValue.amount.toString() : '',
      isValid: true
    },
  })

  function inputHandler(inputIdentifier, enteredValue) {
    setInputs((actualExpense) => {
      return { ...actualExpense, [inputIdentifier]: { value: enteredValue, isValid: true } }
    })
  }

  function submitHandler() {
    const data = {
      description: inputs.description.value,
      date: new Date(inputs.date.value),
      amount: +inputs.amount.value,
    }

    const descriptionValidate = data.description.trim().length > 0;
    const dateValidate = data.date.toString() !== 'Invalid Date';
    const amountValidate = !isNaN(data.amount) && data.amount > 0;

    const formValidate = !descriptionValidate || !dateValidate || !amountValidate;

    if (formValidate) {
      setInputs((act) => {
        return {
          amount: { value: act.amount.value, isValid: amountValidate },
          date: { value: act.date.value, isValid: dateValidate },
          description: {
            value: act.description.value,
            isValid: descriptionValidate,
          },
        }
      });

      return;
    }

    onConfirm(data)
  }

  return (
    <View style={styles.container}>
      <View>
      </View>

      <View style={styles.descriptionContainer}>
        <Input inputConfig={{ placeholder: 'Description', multiline: true, onChangeText: inputHandler.bind(this, 'description'), value: inputs.description.value }} isValid={inputs.description.isValid} />
      </View>

      <View style={styles.lowTextContainer}>
        <Input inputConfig={{ placeholder: 'Date', onChangeText: inputHandler.bind(this, 'date'), value: inputs.date.value, maxLength: 10 }} style={{ width: '48%' }} isValid={inputs.date.isValid} />

        <Input inputConfig={{ placeholder: 'Amount', onChangeText: inputHandler.bind(this, 'amount'), value: inputs.amount.value, keyboardType: 'decimal-pad', }} style={{ width: '48%' }} isValid={inputs.amount.isValid} />
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