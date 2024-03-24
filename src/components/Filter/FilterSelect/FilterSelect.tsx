import './FilterSelect.css';
import { useState } from 'react';
import { MenuItem, FormControl, Select, SelectChangeEvent } from '@mui/material';
import FilterArrow from '../../../assets/FilterArrow.svg';
import { FilterSelectOptionsData } from '../../../utils/constants';

interface FilterSelectProps {
  onChange?: (value: string) => void;
}

export default function FilterSelect({ onChange }: FilterSelectProps) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('');

  const handleChange = (evt: SelectChangeEvent<string>) => {
    const value = evt.target.value;
    if (onChange) {
      onChange(value);
    }
    if (setSelectedFilter) {
      setSelectedFilter(value);
    }
  };

  const toggleSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  const handleSelectClick = () => {
    toggleSelect();
  };

  const handleMenuClose = () => {
    setIsOpenSelect(false);
  };

  const styles = {
    container: {
      backgroundColor: '#F9F9F9',
      borderRadius: '16px'
    },
    select: {
      width: '175px',
      height: '36px',
      border: 'none',
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      overflow: 'visible'
    },
    image: {
      width: '14px',
      height: '7px',
      cursor: 'pointer',
      position: 'absolute',
      top: '50%',
      right: '8px',
      transform: 'translateY(-50%)'
    },
    title: {
      fontFamily: 'Inter',
      fontSize: '14px',
      fontWeight: '400',
      textAlign: 'center'
    }
  };

  return (
    <div>
      <FormControl
        sx={{
          ...styles.container,
          '& .MuiOutlinedInput-notchedOutline': {
            outline: 'none',
            border: 'none'
          }
        }}
      >
        <Select
          sx={{
            ...styles.select,
            '& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input': {
              padding: '0'
            }
          }}
          displayEmpty
          value={selectedFilter || ''}
          onChange={handleChange}
          IconComponent={() => null}
          open={isOpenSelect}
          onClose={handleMenuClose}
          onClick={handleSelectClick}
          renderValue={selected => {
            if (!selected) {
              return 'Выберите фильтр';
            }
            return selected;
          }}
          endAdornment={
            <img
              src={FilterArrow}
              alt="Arrow icon"
              onClick={toggleSelect}
              className="filter__icon"
            />
          }
        >
          {FilterSelectOptionsData.map((option, index) => (
            <MenuItem key={index} value={option}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
