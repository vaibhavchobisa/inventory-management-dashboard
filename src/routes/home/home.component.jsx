import Map from '../../components/map/map.component';
import WelcomeHeader from '../../components/welcome-header/welcome-header.component';
import CityWidgetContainer from '../../components/city-widget-container/city-widget-container.component';
import './home.styles.css';

const Home = () => {
  return (
    <div className="home">
      <WelcomeHeader />
      <CityWidgetContainer />
      <Map />
    </div>
  )
}

export default Home;