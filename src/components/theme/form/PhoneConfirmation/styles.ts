import { StyleSheet } from "react-native";
import { colors } from "../../../../themes/styleComponents";
import { color } from "native-base/lib/typescript/theme/styled-system";

const styles = StyleSheet.create({
  cell: {
    width: 84,
    height: 48,
    lineHeight: 45,
    fontSize: 20,
    borderWidth: 1,
    borderColor: colors.gray,
    textAlign: 'center',
    borderRadius:10,
    backgroundColor:colors.base.white,
    overflow:'hidden',
    fontFamily: 'Lato'
  },
  focusCell: {
    borderColor: colors.darkGray,
    borderWidth:1.75
  },
  textConfiramtion : {
    fontSize:18
  }

})

export default styles