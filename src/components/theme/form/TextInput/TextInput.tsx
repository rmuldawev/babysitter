import React, {FC} from 'react';
import {Box, HStack, Text} from 'native-base';
import MaskInput from 'react-native-mask-input';
import {colors} from '../../../../themes/styleComponents';
import {Controller, FieldError, useFormContext} from 'react-hook-form';

interface TextInputProps {
  name: string;
  type: string;
  placeholder?: string;
  nameInput: string;
  error?: FieldError | undefined;
  defaultValue?: string;
}

const TextInput: FC<TextInputProps> = ({
  name,
  type,
  placeholder,
  nameInput,
  error,
  defaultValue,
}) => {
  const {control} = useFormContext();

  return (
    <Controller
      defaultValue={defaultValue}
      control={control}
      render={({field: {onChange, value}}) => {
        return (
          <Box>
            <Text
              color={'#ffffff'}
              marginBottom={'6px'}
              fontSize={18}
              fontWeight={'500'}>
              {nameInput}
            </Text>
            <HStack
              justifyContent={'space-between'}
              borderColor={error ? colors.red : colors.gray}
              borderWidth={1}
              width={'100%'}
              padding={4}
              borderRadius={'8px'}
              backgroundColor={'#ffffff'}>
              {type === 'phoneNumber' && (
                <MaskInput
                  value={value}
                  style={{
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
              )}

              {type === 'text' && (
                <MaskInput
                  value={value}
                  style={{
                    fontSize: 16,
                    fontWeight: '400',
                    width: 290,
                  }}
                  onChangeText={(text: string) => onChange(text)}
                  placeholder={placeholder}
                  keyboardType={'default'}
                />
              )}
            </HStack>
            {error && (
              <Text fontSize={11} color={colors.red}>
                {error.message}
              </Text>
            )}
          </Box>
        );
      }}
      name={name}
    />
  );
};

export default TextInput;
