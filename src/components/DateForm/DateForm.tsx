import {Box, HStack, Input, Pressable, Text} from 'native-base';
import React, {FC, useState} from 'react';
import {colors} from '../../themes/styleComponents';
import CalendarIcon from '../../assets/icons/calendarIcon';
import MaskInput from 'react-native-mask-input';

interface DateFormProps {
  value: string;
  onPress: () => void;
}

const DateFrom: FC<DateFormProps> = ({value, onPress}) => {
  return (
    <>
      <Pressable onPress={onPress}>
        <HStack
          flexDirection={'row'}
          borderColor={colors.gray}
          justifyContent={'space-between'}
          borderWidth={1}
          width={'100%'}
          borderRadius={'8px'}
          bg={colors.base.white}
          padding={4}>
          <Text>{value ? value : 'Дата рождения:'}</Text>
          <CalendarIcon />
        </HStack>
      </Pressable>
    </>
  );
};

export default DateFrom;
