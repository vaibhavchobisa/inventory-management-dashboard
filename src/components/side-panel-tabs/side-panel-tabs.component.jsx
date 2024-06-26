import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const theme = createTheme({
  palette: {
    secondary: {
      main: '#63f7db'
    }
  }
});

function SidePanelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: '#272928' }}>
          <Tabs textColor='secondary' indicatorColor='secondary' value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{ color: '#b6b8b7', fontSize: '1rem', fontWeight: '800' }} label="BACKLOG (238)" {...a11yProps(0)} />
            <Tab sx={{ color: '#b6b8b7', fontSize: '1rem', fontWeight: '800' }} label="PENDING (0)" {...a11yProps(1)} />
            <Tab sx={{ color: '#b6b8b7', fontSize: '1rem', fontWeight: '800' }} label="FINAL SIGN-OFF (0)" {...a11yProps(2)} />
          </Tabs>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default SidePanelTabs;