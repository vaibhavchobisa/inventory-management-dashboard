import Button from '@mui/material/Button';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import './welcome-header.styles.scss';

const WelcomeHeader = () => {
  return (
    <div className='welcome-container'>
      <h1 className='welcome'>
        Hello User, &nbsp;
      </h1>
      <Button startIcon={<InfoOutlinedIcon />} sx={{ backgroundColor: '#72cfff', fontSize: '1.4rem', color: '#000', textTransform: 'none', fontWeight: '500' }} variant="contained">There are 2 to action items.</Button>
    </div>
  )
}

export default WelcomeHeader;