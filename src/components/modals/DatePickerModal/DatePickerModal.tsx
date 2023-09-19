import React, {FC, useState} from 'react';
import {Controller, useFormContext} from 'react-hook-form';
import DatePicker from 'react-native-date-picker';
// import {Button} from 'react-native';

interface DatePickerModalProps {
  isVisible: boolean;
  setIsVisible: (e: boolean) => void;
  name: string;
  onDateSelected: (selectedDate: Date) => void;
}

const DatePickerModal: FC<DatePickerModalProps> = ({
  isVisible,
  setIsVisible,
  name,
  onDateSelected,
}) => {
  const {control} = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={new Date()}
      render={({field: {onChange, value}}) => {
        return (
          <DatePicker
            locale="ru"
            confirmText="Выбрать"
            cancelText="Отменить"
            modal
            open={isVisible}
            mode="date"
            date={value}
            onConfirm={currentData => {
              onChange(currentData);
              setIsVisible(false);
              onDateSelected(currentData);
            }}
            onCancel={() => setIsVisible(false)}
          />
        );
      }}
    />
  );
};

export default DatePickerModal;
