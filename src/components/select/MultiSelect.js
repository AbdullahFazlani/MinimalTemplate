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
import Divider from '@mui/material/Divider';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  FormLabel,
  Input,
  InputAdornment,
  InputLabel,
  Radio,
  RadioGroup,
  Slider,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material';



import FieldCheckbox from './section/FieldCheckbox';
import Selection from './section/Selection';
import AutoComplete from './section/AutoComplete';
import SingleSelect from './section/SingleSelect';
import RadioField from './section/Radio';
import RangeSlider from './section/Slider';

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
  'Kelly Snyder'
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
  'Kelly Snyder'
];

const countries = [
  "Afghanistan",
	"Albania",
	"Algeria",
  'United kingdom',
  'Pakistan',
  'India'
  
];

const site_categories = [
  'Arts and Entertainment',
  'Animation and Comics',
  'Humor'
];

const site_lang = [
  'English',
  'Spanish',
  'chinese',
  'Urdu',
  'Sindhi'
];


const traffic_source = [
  'Minimum %',
  'Maximum %',
  'Direct %',
  'Social %'
];

const other_filter = [
  'Keyword Search',
  'Has Articles',
  'Has Infinite Scroll',
  'Supports AMP'
];

const loading_experience = [
  'Slow',
  'Average',
  'Fast',
];


const tld = [
  '.abbott',
  '.com',
  '.in',
  '.pk',
  '.academy',
  '.edu',
];






const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 10,
    label: '50k',
  },
  {
    value: 20,
    label: '100k',
  },
  {
    value: 30,
    label: '500k',
  },
  {
    value: 40,
    label: '1m',
  },
  {
    value: 50,
    label: '3m',
  },
  {
    value: 60,
    label: '5m',
  },
  {
    value: 70,
    label: '10m',
  },
  {
    value: 80,
    label: '25m',
  },
  {
    value: 90,
    label: '50m',
  },
  {
    value: 100,
    label: '100m',
  },
  {
    value: 110,
    label: '200m',
  },
  {
    value: 120,
    label: '500m',
  },
  {
    value: 130,
    label: '1b+',
  }
];


function valuetext(value) {
  return `${value}°C`;
}

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

  const [value, setValue] = React.useState([20, 37]);

  const handleSelectChange = (event, newValue) => {
    setValue(newValue);
  };

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

  const [alignment, setAlignment] = React.useState('web');

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  const [traffic_search, set_traffic_search] = React.useState('');

  const trafficHandle = (event, newAlignment) => {
    set_traffic_search(newAlignment);
  };

  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '10px' }}>
      

      <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }} expanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Page Views</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{textAlign:'center'}}>
              <Slider  sx={{width:'90%', textAlign:'center'}}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleSelectChange}
                getAriaValueText={valuetext}
                id="input-slider"
                step={10}
                marks={marks}
                min={10}
                max={110}
              />              
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>


      <Divider />

      <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }}  expanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Select Technology </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <AutoComplete  field="technology" items={countries} defaults={[]}/>
              <Typography sx={{marginTop:'20px'}}>Compound</Typography>
              <RadioField field="technology" items={['and', 'or', 'only']} value1='and' />
              <Typography sx={{marginTop:'20px'}}>With</Typography>
              <FieldCheckbox field="technology" items={['Must appear on homepage', 'Search in Ads.txt']} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Divider />

       <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }} expanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header1"
          >
            <Typography>Select Country </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <AutoComplete  field="countries" items={countries} defaults={[]}/>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Divider />

       <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }} expanded>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header2"
          >
            <Typography>Select Site Category </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <AutoComplete field="Site category" items={site_categories} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Divider />

       <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header3"
          >
            <Typography>Select Site Language </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FieldCheckbox items={site_lang} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Divider />


       <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header4"
          >
            <Typography>Traffic Source Filter </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <FieldCheckbox items={traffic_source} />
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>

      <Divider />

      <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header5"
          >
            <Typography>Geo Traffic Search</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <SingleSelect field='Select Traffic location' items={countries} trafficHandle={trafficHandle} />
            </Typography>
            {(traffic_search !== '' ? 
            <Typography sx={{marginTop:'20px'}}> 
              <RadioField field="tier_traffic" items={[`Traffic From ${traffic_search} (0-100)`, `Pageviews From ${traffic_search}`]} />
              <Typography sx={{marginTop:'20px'}}> 
                <AutoComplete  field="Ignore countries" items={countries} defaults={[]} />
              </Typography>
              
            </Typography>
            : null)}
          </AccordionDetails>
        </Accordion>
      </div>

      <Divider />



      <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }} >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header5"
          >
            <Typography>Other</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <Typography>Select Ads Text</Typography>
            <RadioField field="has_adstxt" items={['Yes', 'No']} />

            <Divider variant='middle' sx={{marginTop:'20px', marginBottom:'20px'}} />

            <Typography sx={{marginTop:'20px'}}>Loading Experince</Typography>
            <FieldCheckbox field="loading_experience" items={loading_experience} />

            <Divider variant='middle' sx={{marginTop:'20px', marginBottom:'20px'}} />

            <Typography sx={{marginTop:'20px'}}>Select TLD</Typography>
            <AutoComplete field="tld" items={tld} />

            <Divider variant='middle' sx={{marginTop:'20px', marginBottom:'20px'}} />

            <FieldCheckbox field="has_adstxt" items={other_filter} />

          </AccordionDetails>
        </Accordion>
      </div>

      {/* <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
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
       <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
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
      <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Traffic Source Filter</Typography>
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
                    label="USA"
                    control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                  <FormControlLabel
                    label="UK"
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                  <FormControlLabel
                    label="India"
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                </Box>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
      <div style={{ border: '1px solid #8080800d', borderRadius: '10px' }}>
        <Accordion sx={{ width: '100%', backgroundColor: '#fff' }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Select Traffic Location</Typography>
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
                    label="USA"
                    control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                  <FormControlLabel
                    label="UK"
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                  <FormControlLabel
                    label="India"
                    control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
                    sx={{ border: '1px solid gray', borderRadius: '20px', pr: '10px' }}
                  />
                </Box>
              </div>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div> 


      
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
      <FormControl sx={{}}>
          <FormLabel>Select Ads Text</FormLabel>
            <RadioField field="has_adstxt" items={['Installed', 'Not Installed']} />
        </FormControl>

        <FormControl>
          <FormLabel id="outlined-basic">Publisher Views</FormLabel>
          <TextField id="outlined-basic" variant="outlined" type="number" size="small" />
        </FormControl>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <FormControl sx={{}}>
          <FormLabel>Select Ads Text</FormLabel>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            // sx={{ width: '50%' }}
          >
            <ToggleButton value="installed">Installed</ToggleButton>
            <ToggleButton value="uninstalled">Uninstalled</ToggleButton>
          </ToggleButtonGroup>
        </FormControl>
        <FormControl sx={{ width: '40%' }}>
          <FormLabel>Show Sites With</FormLabel>
          <div style={{ display: 'flex', gap: '10px' }}>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="number"
              // size="small"
              label="Min"
              // sx={{ width: '10%' }}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="number"
              // size="small"
              label="Max"
              // sx={{ width: '10%' }}
            />
          </div>
        </FormControl>
      </div>
      <FormGroup row sx={{ display: 'flex', justifyContent: 'center' }}>
        <FormControlLabel control={<Checkbox defaultChecked />} label="Keyword Search" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Has Articles" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Has Infinite Scroll" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Ignore DNS Server Sites" />
        <FormControlLabel control={<Checkbox defaultChecked />} label="Support AMP" />
      </FormGroup>

      */}
    </div>
  );
}
