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
import { Filters } from '../../sections/@dashboard/filePublisher';

// ---------------------------------------------------------------------- //

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
          <FormControl component="fieldset" sx={{ width: '100%' }}>
            <Filters />
          </FormControl>
        </Box>
      </Container>
    </>
  );
}
