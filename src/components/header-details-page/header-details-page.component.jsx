import './header-details-page.styles.scss';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Switch from '@mui/material/Switch';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';

import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(12px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#ffffff59',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: '#ffffff59',
    boxSizing: 'border-box',
  },
}));

const HeaderDP = () => {
  const [issue, setIssue] = useState('');
  const handleChange = (event) => {
    setIssue(event.target.value);
  };

  return (
    <div className='header-dp'>
      <div className='first'>
        <div className='stack-name-box'>
          <ReportProblemOutlinedIcon />
          <span className='stack-name'>Sample Stack</span>
        </div>
        <p className='stack-id-box'>
          <span className='label'>Stack Id:&nbsp;</span>
          <span className='value'>234342134134(demo)</span>
          <span><ViewListOutlinedIcon /></span>
        </p>
        <div className='fcast'>
          <div className='content'>
            <div className='prt1'>
              <p className='title'>FORECAST(Absolute)</p>
              <p>89%</p>
            </div>
            <div className='prt2'>
              <p className='title'>FORECAST(%)</p>
              <p>80%</p>
            </div>
          </div>
          <div className='flag'>
            <OutlinedFlagRoundedIcon />
          </div>
        </div>
      </div>
      <hr style={{ backgroundColor: '#000', height: '0.3rem', border: 'none' }} />
      <div className='second'>
        <FilePresentOutlinedIcon />
        <p className='requirements'>
          <span className='title'>SPECIAL REQUIREMENTS</span>
          <FormControlLabel control={<Switch />} label="INCLUDE" />
        </p>
        <ExpandMoreOutlinedIcon />
      </div>
      <div className='third'>
        <p>Forecast Horizon</p>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <Select
            value={issue}
            onChange={handleChange}
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            sx={{ border: '0px solid red' }}
          >
            <MenuItem value=''>Latest Issue</MenuItem>
            <MenuItem value={0}>Previous Issue</MenuItem>
          </Select>
        </FormControl>
        <InfoOutlinedIcon />
        <FormGroup>
          <Stack direction="row" spacing={1} alignItems="center">
            <AntSwitch inputProps={{ 'aria-label': 'ant design' }} />
            <Typography>SHOW CONFIDENCE INTERVAL</Typography>
          </Stack>
        </FormGroup>
      </div>
    </div>
  )
}

export default HeaderDP;