import {HStack, Text} from 'native-base';
import React, {FC} from 'react';
import RadioField from '../../../RadioField/RadioFiled';

const Gender = () => {
  return (
    <HStack justifyContent={'space-between'} alignItems={'center'}>
      <Text fontSize={'16px'}>Пол:</Text>
      <RadioField name="gender" />
    </HStack>
  );
};

export default Gender;
