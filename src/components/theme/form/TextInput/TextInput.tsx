import React, {FC, useState} from 'react';
import {Box, HStack, Input, Pressable, Text} from 'native-base';
import MaskInput from 'react-native-mask-input';
import {colors} from '../../../../themes/styleComponents';
import {Controller, useFormContext} from 'react-hook-form';
import CalendarIcon from '../../../../assets/icons/calendarIcon';

interface TextInputProps {
  name: string;
  type: string;
  placeholder?: string;
  state: boolean;
  nameInput: string;
}

const TextInput: FC<TextInputProps> = ({
  name,
  type,
  placeholder,
  state,
  nameInput,
}) => {
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
              {nameInput}
            </Text>
            <HStack
              justifyContent={'space-between'}
              borderColor={colors.gray}
              borderWidth={1}
              width={'100%'}
              padding={4}
              borderRadius={'8px'}
              backgroundColor={'#ffffff'}>
              {type === 'phoneNumber' && (
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
              )}

              {type === 'text' && (
                <MaskInput
                  value={value}
                  style={{
                    fontFamily: 'Lato',
                    fontSize: 16,
                    fontWeight: '400',
                    width: 290,
                  }}
                  onChangeText={(text: string) => onChange(text)}
                  placeholder={placeholder}
                  keyboardType={'default'}
                />
              )}

              {state === true && (
                <Pressable onPress={() => console.log('clicked')}>
                  <CalendarIcon />
                </Pressable>
              )}
            </HStack>
          </>
        );
      }}
      defaultValue={''}
      name={name}
    />
  );
};

export default TextInput;
