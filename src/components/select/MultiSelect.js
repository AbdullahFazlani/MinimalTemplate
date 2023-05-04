/* eslint-disable import/no-extraneous-dependencies */
import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Input,
  InputAdornment,
  InputLabel,
  Slider,
  TextField,
  Typography,
} from '@mui/material';

import FieldCheckbox from './section/FieldCheckbox';
import Selection from './section/Selection';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];


const checkbox_items = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

// function valuetext(value) {
//   return `${value}°C`;
// }

// function getStyles(name, personName, theme) {
//   return {
//     fontWeight:
//       personName.indexOf(name) === -1
//         ? theme.typography.fontWeightRegular
//         : theme.typography.fontWeightMedium,
//   };
// }

export default function MultipleSelect() {
  // const theme2 = useTheme();
  // const [personName, setPersonName] = React.useState([]);
  // const [age, setAge] = React.useState('');

  // const handleChange2 = (event) => {
  //   setAge(event.target.value);
  // };

  // const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  //   padding: theme.spacing(1),
  //   textAlign: 'center',
  // }));

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;
  //   setPersonName(
  //     // On autofill we get a stringified value.
  //     typeof value === 'string' ? value.split(',') : value
  //   );
  // };

  // const [value, setValue] = React.useState([20, 37]);

  // const handleSelectChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  // for country select options

  // const [country, setCountry] = React.useState('');

  // const handleCountryChange = (event) => {
  //   setCountry(event.target.value);
  // };

  // // for site select options

  // const [siteCat, setSiteCat] = React.useState('');

  // const handleSiteChange = (event) => {
  //   setSiteCat(event.target.value);
  // };

  // for site language select options

  // const [siteLang, setSiteLang] = React.useState('');

  // const handleSiteLangChange = (event) => {
  //   setSiteLang(event.target.value);
  // };
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <TextField
          label="Domain Search"
          id="outlined-start-adornment"
          sx={{
            m: 1,
            backgroundColor: '#fff',
            width: '20%',
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div>
      
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Select Country </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FieldCheckbox items={checkbox_items} />
              <Selection field="country" items={names} />
              <Selection field="country2" items={names} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Select Site Category</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                <FormControlLabel
                  label="Select All"
                  control={
                    <Checkbox
                      checked={checked[0] && checked[1]}
                      indeterminate={checked[0] !== checked[1]}
                      onChange={handleChange1}
                    />
                  }
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
                  <FormControlLabel
                    label="Arts"
                    control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                  <FormControlLabel
                    label="Entertainment"
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                  <FormControlLabel
                    label="Humour"
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                </Box>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Select Site language</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <div>
                <FormControlLabel
                  label="Select All"
                  control={
                    <Checkbox
                      checked={checked[0] && checked[1]}
                      indeterminate={checked[0] !== checked[1]}
                      onChange={handleChange1}
                    />
                  }
                />
                <Box sx={{ display: 'flex', flexDirection: 'row', ml: 3 }}>
                  <FormControlLabel
                    label="English"
                    control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                  <FormControlLabel
                    label="German"
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                  <FormControlLabel
                    label="French"
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                </Box>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
