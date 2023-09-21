import {HStack, Pressable, Text} from 'native-base';
import React, {FC} from 'react';
import ArrowLeft from '../../assets/icons/arrowLeft';
import {colors} from '../../themes/styleComponents';

interface BackHeaderProps {
  onPress: () => void;
}

const BackHeader: FC<BackHeaderProps> = ({onPress}) => {
  return (
    <Pressable onPress={onPress}>
      <HStack alignItems={'center'} pt={'16px'} pb={'16px'} mb={'22px'}>
        <ArrowLeft />
        <Text
          ml={'10px'}
          fontSize={'16px'}
          color={colors.base.white}
          fontWeight={400}>
          Назад
        </Text>
      </HStack>
    </Pressable>
  );
};

export default BackHeader;
