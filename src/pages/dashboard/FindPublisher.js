import { Helmet } from 'react-helmet-async';
// @mui
import { alpha } from '@mui/material/styles';
import { Container, Typography, Box, ToggleButtonGroup, ToggleButton } from '@mui/material';
import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';

// components
import { useSettingsContext } from '../../components/settings';
import { MultipleSelect } from '../../components/select/index';

// ----------------------------------------------------------------------

export default function BlankPage() {
  const { themeStretch } = useSettingsContext();
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

  const [formats, setFormats] = React.useState(() => ['bold', 'italic']);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };

  return (
    <>
      <Helmet>
        <title> Find Publisher | Minimal UI</title>
      </Helmet>

      <Container maxWidth={themeStretch ? false : 'xl'}>
        <Typography variant="h4"> Find Publisher </Typography>

        <Box
          sx={{
            mt: 5,
            // width: 1,
            // height: 320,
            p: 4,
            borderRadius: 2,
            bgcolor: (theme) => alpha(theme.palette.grey[500], 0.04),
            border: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          <FormControl component="fieldset">
            {/* <FormGroup aria-label="position" row className="publisher-tabs">
              <FormControlLabel
                value="All"
                control={<Checkbox />}
                label="All"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Analytics"
                control={<Checkbox />}
                label="Analytics"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Customer Service"
                control={<Checkbox />}
                label="Customer Service"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Social"
                control={<Checkbox />}
                label="Social"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Ad Tech"
                control={<Checkbox />}
                label="Ad Tech"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Core"
                control={<Checkbox />}
                label="Core"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Adult"
                control={<Checkbox />}
                label="Adult"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Commenting"
                control={<Checkbox />}
                label="Commenting"
                labelPlacement="end"
              />
              <FormControlLabel
                value="Video Players"
                control={<Checkbox />}
                label="Video Players"
                labelPlacement="end"
              />
              <FormControlLabel
                value="CMP"
                control={<Checkbox />}
                label="CMP"
                labelPlacement="end"
              />
            </FormGroup> */}
            <Box sx={{ width: '100%', mb: 4 }}>
              <ToggleButtonGroup value={formats} onChange={handleFormat}>
                <ToggleButton value="bold">Analytics</ToggleButton>
                <ToggleButton value="italic">Customer Service</ToggleButton>
                <ToggleButton value="underlined">Social</ToggleButton>
                <ToggleButton value="color">Ad Tech</ToggleButton>
                <ToggleButton value="Core">Core</ToggleButton>
                <ToggleButton value="Adult">Adult</ToggleButton>
                <ToggleButton value="Commenting">Commenting</ToggleButton>
                <ToggleButton value="Player">Video Player</ToggleButton>
                <ToggleButton value="CMP">CMP</ToggleButton>
                <ToggleButton value="ALL">ALL</ToggleButton>
              </ToggleButtonGroup>
            </Box>
            <FormGroup>
              <MultipleSelect name={names} select_key="name" />
            </FormGroup>
            {/* <FormGroup>
          <TextField id="search" label="Outlined" variant="outlined" />
          </FormGroup> */}
          </FormControl>
        </Box>
      </Container>
    </>
  );
}
