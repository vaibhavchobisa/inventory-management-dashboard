import './header-details-page.styles.scss';
import ReportProblemOutlinedIcon from '@mui/icons-material/ReportProblemOutlined';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import OutlinedFlagRoundedIcon from '@mui/icons-material/OutlinedFlagRounded';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

const HeaderDP = () => {
  return (
    <div className='header-dp'>
      <div className='first'>
        <div className='stack-name-box'>
          <ReportProblemOutlinedIcon />
          <span className='stack-name'>Sample Stack</span>
        </div>
        <p className='stack-id-box'>
          <span>Stack Id:&nbsp;</span>234342134134(demo)
          <span><ViewListOutlinedIcon /></span>
        </p>
        <div className='fcast'>
          <div className='fcast-in'>
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
          <FormControlLabel control={<Switch defaultChecked />} label="INCLUDE" />
        </p>
        <ExpandMoreOutlinedIcon />
      </div>
    </div>
  )
}

export default HeaderDP;