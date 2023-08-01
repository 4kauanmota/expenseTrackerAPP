import { StyleSheet, Text, View } from "react-native";
import GlobalStyles from "../../constants/GlobalStyles";

function Expense({expense}) {
  return (
    <View style={styles.container}>
      <View style={styles.informationsArea}>
        <Text style={styles.description}> {expense.description} </Text>

        <Text style={styles.description}> {expense.date.toString()} </Text>
      </View>

      <View style={styles.amountArea}>
        <Text style={[styles.description, styles.amount]}> {expense.amount} </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: GlobalStyles.light,
    marginBottom: 10,
    padding: 10,
    borderRadius: 8,
  },

  informationsArea: {
    flex: 4,
  },

  description:{
    color: GlobalStyles.black + 'aa',
    fontFamily: 'Inter',
  },

  amountArea: {
    flex: 1,
  },

  amount: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: GlobalStyles.strongBackground,
    color: GlobalStyles.lightWhite,
    borderRadius: 4,
  }
})

export default Expense;