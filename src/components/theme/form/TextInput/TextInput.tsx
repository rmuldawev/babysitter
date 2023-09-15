import React, {FC} from 'react';
import {Box, HStack, Text} from 'native-base';
import MaskInput from 'react-native-mask-input';
import {colors} from '../../../../themes/styleComponents';
import {Controller, useFormContext} from 'react-hook-form';

interface TextInputProps {
  name: string;
}

const TextInput: FC<TextInputProps> = ({name}) => {
  const {control} = useFormContext();

  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => {
        return (
          <>
            <Text
              color={'#ffffff'}
              marginBottom={'6px'}
              fontSize={18}
              fontFamily={'Lato'}
              fontWeight={'500'}>
              {name}
            </Text>
            <Box
              borderColor={colors.gray}
              borderWidth={1}
              width={'100%'}
              padding={4}
              borderRadius={'8px'}
              backgroundColor={'#ffffff'}>
              <MaskInput
                value={value}
                style={{
                  fontFamily: 'Lato',
                  fontSize: 16,
                  fontWeight: '400',
                }}
                onChangeText={(text: string) => onChange(text)}
                placeholder={'(000) 000-0000'}
                placeholderTextColor={colors.gray}
                keyboardType={'phone-pad'}
                mask={[
                  '(',
                  /\d/,
                  /\d/,
                  /\d/,
                  ')',
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
              />
            </Box>
          </>
        );
      }}
      defaultValue={''}
      name={name}
    />
  );
};

export default TextInput;
