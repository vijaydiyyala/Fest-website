import './Schedule.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import CelebrationIcon from '@mui/icons-material/Celebration';
import Groups3Icon from '@mui/icons-material/Groups3';
import FlatwareRoundedIcon from '@mui/icons-material/FlatwareRounded';
import PsychologyAltRoundedIcon from '@mui/icons-material/PsychologyAltRounded';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import AcUnitRoundedIcon from '@mui/icons-material/AcUnitRounded';
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import TapasRoundedIcon from '@mui/icons-material/TapasRounded';

function Schedule() {
    return (
        <div className='main-div'>
            <h1 className='heading-text'>Schedule</h1>
            <p className='heading-p'>15'th March</p>
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3a6186', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3a6186' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CelebrationIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Inaugural Function </h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">9:30am - 11:00am</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#2c3e50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<HandshakeRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Student Association starting</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">11:00am - 11:30am</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000428', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000428' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Groups3Icon />}

                >
                    <h3 className="vertical-timeline-element-title event-text">Stalls Opening</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">11:30am - 11:45am</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3a6186', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3a6186' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<Groups3Icon />}

                >
                    <h3 className="vertical-timeline-element-title event-text">Paper / Poster / Project Presentation</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">11:45am - 1:00pm</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#2c3e50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FlatwareRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Lunch</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">1:00pm - 2:00pm</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000428', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000428' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<PsychologyAltRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Spot Events</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">2:00 - 4:20</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#3a6186', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3a6186' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<TapasRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Snacks</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">4:20 - 4:30</h4>
                </VerticalTimelineElement>

                <p className='heading-p'>16'th March</p>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000428', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000428' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<WorkspacePremiumRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">SCADA Workshop</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">9:30am - 11:00am</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c3e50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<AcUnitRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Break</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">11:00am - 11:15am</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3a6186', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3a6186' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<WorkspacePremiumRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">SCADA Workshop</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">11:15am - 1:15pm</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#000428', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000428' }}
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<FlatwareRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Lunch</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">1:15pm - 2:30pm</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c3e50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<EmojiEventsRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Spot Events</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">2:30pm - 4:20pm</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3a6186', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3a6186' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<AcUnitRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Break</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">4:20pm - 4:30pm</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#000428', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000428' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<MilitaryTechRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Flash Mob</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">4:30pm - 6:30pm</h4>
                </VerticalTimelineElement>



                <p className='heading-p'>17'th March</p>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c3e50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkspacePremiumRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Design of EV's using MATLAB workshop</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">9:30am - 11:00am</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000428', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000428' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<AcUnitRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Break</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">11:00am - 11:15am</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3a6186', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3a6186' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<WorkspacePremiumRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Design of EV's using MATLAB workshop</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">11:15am - 1:00pm</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#2c3e50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<FlatwareRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Lunch</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">1:00pm - 2:00pm</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#000428', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #000428' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<EmojiEventsRoundedIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Spot Events</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">2:00pm - 3:00pm</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#3a6186', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #3a6186' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<CelebrationIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Valedictory Ceremony</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">3:00pm - 3:20pm</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c3e50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CelebrationIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">Culturals</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">3:20pm - 6:30pm</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#2c3e50', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #2c3e50' }}
                    // date="9:00 - 10:30"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<CelebrationIcon />}
                >
                    <h3 className="vertical-timeline-element-title event-text">The END</h3>
                    <h4 className="vertical-timeline-element-subtitle date-text">Thanks for Participating...</h4>
                    {/* <p>10:30 - 10:40</p> */}
                </VerticalTimelineElement>

            </VerticalTimeline>

            {/* <div className='end-div'>The End</div> */}

        </div>

    )

}

export default Schedule;
