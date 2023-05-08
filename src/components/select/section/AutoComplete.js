import * as React from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

LimitTags.propTypes = {
    field: PropTypes.string,
    items: PropTypes.object,
    defaults: PropTypes.array,
};

function firstCap(word){

    const firstLetter = word.charAt(0)

    const firstLetterCap = firstLetter.toUpperCase()

    const remainingLetters = word.slice(1)

    const capitalizedWord = firstLetterCap + remainingLetters

    return capitalizedWord;

}

export default function LimitTags({field, items, defaults = []}) {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-{field}-tags"
      options={items}
      getOptionLabel={(option) => option}
      defaultValue={defaults}
      renderInput={(params) => (
        <TextField {...params} label={field} placeholder={firstCap(field)} />
      )}
      sx={{ width: '500px' }}
    />
  );
}