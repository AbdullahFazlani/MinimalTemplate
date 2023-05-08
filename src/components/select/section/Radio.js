import * as React from 'react';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function firstCap(word){

    const firstLetter = word.charAt(0)

    const firstLetterCap = firstLetter.toUpperCase()

    const remainingLetters = word.slice(1)

    const capitalizedWord = firstLetterCap + remainingLetters

    return capitalizedWord;

}



RowRadioButtonsGroup.propTypes = {
    field: PropTypes.string,
    items: PropTypes.object,
    value1: PropTypes.string,
};



export default function RowRadioButtonsGroup({field, items, value1}) {
    const [value, setValue] = React.useState(value1);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    
  return (
    <FormControl>
      <RadioGroup
        row
        aria-labelledby={field}
        name={field}
        value={value}
        onChange={handleChange}
      >
        {items.map((name) => (
            <FormControlLabel value={name} control={<Radio />} label={firstCap(name)} />
          ))}
      </RadioGroup>
    </FormControl>
  );
}