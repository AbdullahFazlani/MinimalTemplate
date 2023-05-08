import * as React from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


FieldCheckbox.propTypes = {
  items: PropTypes.array
};

export default function FieldCheckbox({items}) {  
  return (
    <FormControl component="fieldset">
      <FormGroup aria-label="position" row>
      {items.map((item) => (
          <FormControlLabel sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px', margin:'5px' }}
          value={item}
          control={<Checkbox />}
          label={item}
          labelPlacement="end"
        />
        ))}
      </FormGroup>
    </FormControl>
  );
}