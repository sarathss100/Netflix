import './Home.css';
import Navbar from '../../components/Navbar/Navbar';
import hero_banner from '../../assets/hero_banner.jpg';
import hero_title from '../../assets/hero_title.png';
import play_icon from '../../assets/play_icon.png';
import info_icon from '../../assets/info_icon.png';
import TitleCards from '../../components/TitleCards/TitleCards';
import Footer from '../../components/Footer/Footer';

const Home: React.FC = function() {
    return (
        <div className='home'>
            <Navbar />
            <div className='hero'>
                <img src={hero_banner} alt='banner image' className='banner-img' />
                <div className='hero-caption'>
                    <img src={hero_title} alt='banner title' className='caption-img' />
                    <p>
                        Discovering his ties to a secret anciet order, a young
                        man living in modern Istanbul embarks on a quest to save
                        the city from and immortal enemy.
                    </p>
                    <div className='hero-btns'>
                        <button className='btn'><img src={play_icon} alt='play icon' />Play</button>
                        <button className='btn dark-btn'><img src={info_icon} alt='information icon' />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className='more-cards'>
                <TitleCards title={'Blockbustor Movies'} />
                <TitleCards title={'Only on Netflix'} />
                <TitleCards title={'Upcoming'} />
                <TitleCards title={'Top Pics for You'} />
            </div>
            <Footer />
        </div>
    );
};

export default Home;