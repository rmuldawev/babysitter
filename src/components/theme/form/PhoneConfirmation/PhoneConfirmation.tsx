import {Box, HStack, Text, View} from 'native-base';
import React, {FC, useState} from 'react';
import {
  CodeField,
  useBlurOnFulfill,
  useClearByFocusCell,
  Cursor,
} from 'react-native-confirmation-code-field';
import styles from './styles';
import {colors} from '../../../../themes/styleComponents';
import ArrowLeft from '../../../../assets/icons/arrowLeft';
import {FieldError} from 'react-hook-form';

interface PhoneConfirmationProps {
  value: string;
  onChangeText: (text: string) => void;
  error: FieldError | undefined;
}

const PhoneConfirmation: FC<PhoneConfirmationProps> = ({
  value,
  onChangeText,
  error,
}) => {
  const CELL_COUNT = 4;
  // const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue: onChangeText,
  });
  return (
    <Box>
      <Text fontSize={'18px'} color={colors.base.white} pb={'9px'}>
        Введите код подтверждения:
      </Text>
      <CodeField
        autoFocus={true}
        placeholder=""
        ref={ref}
        {...props}
        value={value}
        onChangeText={onChangeText}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        defaultValue=""
        renderCell={({index, symbol, isFocused}) => (
          <Text
            borderColor={error ? colors.red : colors.gray}
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </Box>
  );
};

export default PhoneConfirmation;
