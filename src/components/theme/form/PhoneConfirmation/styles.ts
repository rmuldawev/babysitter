import { StyleSheet } from "react-native";
import { colors } from "../../../../themes/styleComponents";

const styles = StyleSheet.create({
        cell: {
          width: 64,
          height: 28,
          lineHeight: 24,
          fontSize: 20,
        //   borderWidth: 1,
          borderColor: colors.gray,
          backgroundColor:colors.base.white,
          textAlign: 'center',
          borderRadius:10
        },
        focusCell: {
          borderColor: '#000',
        },
})

export default styles