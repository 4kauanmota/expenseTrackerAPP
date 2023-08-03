import { StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { colors } from "../4kauanmotaPatterns/GlobalStyles";
import PressArea from "../4kauanmotaPatterns/components/PressArea";


import { getFormattedDate } from "../../util/date";

function Expense({ expense }) {
  const navigation = useNavigation();

  function expenseHandler() {
    navigation.navigate('ManageExpense', {
      expenseId: expense.id
    })
  }

  return (
    <PressArea style={styles.container} pressStyle={styles.pressArea} onPress={expenseHandler}>
      <View style={styles.informationsArea}>
        <Text style={[styles.description, { fontWeight: 'bold', marginRight: 10 }]}>{expense.description}</Text>

        <Text style={styles.description}>{getFormattedDate(expense.date)}</Text>
      </View>

      <View style={styles.amountArea}>
        <Text style={[styles.description, styles.amount]}>{expense.amount}</Text>
      </View>
    </PressArea>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },

  pressArea: {
    padding: 10,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  informationsArea: {
    flex: 4,
  },

  description: {
    color: colors.black + 'aa',
    fontFamily: 'Inter',
  },

  amountArea: {
    flex: 1,
  },

  amount: {
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: colors.strongBackground,
    color: colors.lightWhite,
    borderRadius: 4,
  }
})

export default Expense;