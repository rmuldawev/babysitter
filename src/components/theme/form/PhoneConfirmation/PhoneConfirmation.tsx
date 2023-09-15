import {Box, Text} from 'native-base';
import React, {useState} from 'react';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from 'react-native-confirmation-code-field';
import styles from './styles';
import {colors} from '../../../../themes/styleComponents';

const PhoneConfirmation = () => {
  const CELL_COUNT = 4;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  return (
    <>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        defaultValue=""
        renderCell={({index, symbol, isFocused}) => (
          <Box
            borderRadius={'10px'}
            borderWidth={1}
            p={'10px'}
            bg={colors.base.white}>
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}
              onLayout={getCellOnLayoutHandler(index)}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </Box>
        )}
      />
    </>
  );
};

export default PhoneConfirmation;
