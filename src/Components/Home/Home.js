import Schedule from './Schedule';
import './Home.css';
import Memories from '../Memories/Memories';
import Nametype from './Nametype';

function Home() {
    const scrollTomemories = () => {
        const element = document.getElementById('memories')
        if (element) {
            element.scrollIntoView({ behaviour: 'smooth' })
        }

    }
    return (
        <div className='home-page'>
            <div className='content'>
                <div className='f-name'>
                    <Nametype />
                    <h5 onClick={scrollTomemories} className='btn-more'>Explore More . . . </h5>
                </div>
            </div>
            <div className='bg'>
                <h3 className='glimpse'>Glimpse Of Tech Carnival</h3>
                <div className='video'>
                    <video
                        src="assets/video.mp4"
                        controls
                        muted
                        autoPlay={"autoplay"}
                        preLoad="auto"
                        loop
                    > something</video>
                </div>
                <div id='memories'>
                    <Memories />
                </div>
                <div className='schedule'>
                    <Schedule />
                </div>
            </div>
        </div>
    )
}
export default Home
