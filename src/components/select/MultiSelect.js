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
import { Box, Input, InputAdornment, InputLabel, Slider, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

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

function valuetext(value) {
  return `${value}°C`;
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect() {
  const theme2 = useTheme();
  const [personName, setPersonName] = React.useState([]);
  const [age, setAge] = React.useState('');

  const handleChange2 = (event) => {
    setAge(event.target.value);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    padding: theme.spacing(1),
    textAlign: 'center',
  }));

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  const [value, setValue] = React.useState([20, 37]);

  const handleSelectChange = (event, newValue) => {
    setValue(newValue);
  };

  // for country select options

  const [country, setCountry] = React.useState('');

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  // for site select options

  const [siteCat, setSiteCat] = React.useState('');

  const handleSiteChange = (event) => {
    setSiteCat(event.target.value);
  };

  // for site language select options

  const [siteLang, setSiteLang] = React.useState('');

  const handleSiteLangChange = (event) => {
    setSiteLang(event.target.value);
  };

  return (
    <div>
      <Grid container rowSpacing={4} columnSpacing={{ xs: 1, sm: 2, md: 6 }}>
        <Grid item xs={12}>
          <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">Domain Search</InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <SearchOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{ width: '50%' }}>
            <Typography id="input-slider" gutterBottom>
              Page Views
            </Typography>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleSelectChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              id="input-slider"
              step={10}
              marks
              min={10}
              max={110}
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              border: '2px solid lightgray',
              borderRadius: '7px',
              padding: '5px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ width: '70%' }}>
              <FormControl fullWidth>
                <InputLabel id="select-country">Select Country</InputLabel>
                <Select
                  labelId="select-country"
                  id="select-country"
                  value={country}
                  label="Select Country"
                  onChange={handleCountryChange}
                  fullWidth
                >
                  <MenuItem value="USA">USA</MenuItem>
                  <MenuItem value="UK">UK</MenuItem>
                  <MenuItem value="France">France</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: '25%', display: 'flex', alignItems: 'center' }}>
              <FormControl fullWidth size="small">
                <Select
                  labelId="select-include"
                  id="select-include"
                  // value={country}
                  // label="Select Country"
                  // onChange={handleCountryChange}
                  defaultValue="Include"
                >
                  <MenuItem value="include">Include</MenuItem>
                  <MenuItem value="exclude">Exclude</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              border: '2px solid lightgray',
              borderRadius: '7px',
              padding: '5px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ width: '70%' }}>
              <FormControl fullWidth>
                <InputLabel id="select-site">Select Site Category</InputLabel>
                <Select
                  labelId="select-site"
                  id="select-site"
                  value={siteCat}
                  label="Select Site Category"
                  onChange={handleSiteChange}
                  fullWidth
                >
                  <MenuItem value="Animations">Animations</MenuItem>
                  <MenuItem value="Comics">Comics</MenuItem>
                  <MenuItem value="Arts">Arts</MenuItem>
                  <MenuItem value="Humor">Humor</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: '25%', display: 'flex', alignItems: 'center' }}>
              <FormControl fullWidth size="small">
                <Select
                  labelId="select-include"
                  id="select-include"
                  // value={country}
                  // label="Select Country"
                  // onChange={handleCountryChange}
                  defaultValue="Include"
                >
                  <MenuItem value="include">Include</MenuItem>
                  <MenuItem value="exclude">Exclude</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              border: '2px solid lightgray',
              borderRadius: '7px',
              padding: '5px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ width: '70%' }}>
              <FormControl fullWidth>
                <InputLabel id="select-site-lang">Select Site Language</InputLabel>
                <Select
                  labelId="select-site-lang"
                  id="select-site-lang"
                  value={siteLang}
                  label="Select Site Category"
                  onChange={handleSiteLangChange}
                  fullWidth
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Arabic">Arabic</MenuItem>
                  <MenuItem value="Greek">Greeek</MenuItem>
                  <MenuItem value="French">French</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: '25%', display: 'flex', alignItems: 'center' }}>
              <FormControl fullWidth size="small">
                <Select
                  labelId="select-include"
                  id="select-include"
                  // value={country}
                  // label="Select Country"
                  // onChange={handleCountryChange}
                  defaultValue="Include"
                >
                  <MenuItem value="include">Include</MenuItem>
                  <MenuItem value="exclude">Exclude</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box
            sx={{
              border: '2px solid lightgray',
              borderRadius: '7px',
              padding: '5px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ width: '100%' }}>
              <FormControl fullWidth>
                <InputLabel id="select-site-lang">Select Site Language</InputLabel>
                <Select
                  labelId="select-site-lang"
                  id="select-site-lang"
                  value={siteLang}
                  label="Select Site Category"
                  onChange={handleSiteLangChange}
                  fullWidth
                >
                  <MenuItem value="English">English</MenuItem>
                  <MenuItem value="Arabic">Arabic</MenuItem>
                  <MenuItem value="Greek">Greeek</MenuItem>
                  <MenuItem value="French">French</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Grid>
        {/* <Grid item xs={4}>
          <Item>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme2)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange2}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FormControl>
              <FormControlLabel
                value="Must appear on homepage"
                control={<Checkbox />}
                label="Must appear on homepage"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Search in Ads.txt"
                control={<Checkbox />}
                label="Search in Ads.txt"
                labelPlacement="end"
              />
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FormControl sx={{ m: 1, width: 300 }}>
              <InputLabel id="demo-multiple-name-label">Name</InputLabel>
              <Select
                labelId="demo-multiple-name-label"
                id="demo-multiple-name"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Name" />}
                MenuProps={MenuProps}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name} style={getStyles(name, personName, theme2)}>
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-select-small-label">Age</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={age}
                label="Age"
                onChange={handleChange2}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <FormControl>
              <FormControlLabel
                value="Must appear on homepage"
                control={<Checkbox />}
                label="Must appear on homepage"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Search in Ads.txt"
                control={<Checkbox />}
                label="Search in Ads.txt"
                labelPlacement="end"
              />
            </FormControl>
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={12}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={6}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>1</Item>
        </Grid>

        <Grid item xs={3}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={3}>
          <Item>1</Item>
        </Grid> */}
      </Grid>
    </div>
  );
}
