import React from 'react';
import { InfoBar } from '../../components/organisms/InfoBar/InfoBar';
import { BookCheck, GraduationCap, HeartPulse } from 'lucide-react';
import { WelcomeCard } from '../../components/molecules/WelcomeCard/WelcomeCard';
import { ExpireTile } from '../../components/molecules/ExpireTile/ExpireTile';
import { HistoryBlock } from '../../components/organisms/HistoryBlock/HistoryBlock';
// import { EventsBlock } from '../../components/organisms/EventsBlock/EventsBlock';

export const Home = (): React.JSX.Element => {
  return (
    <div id="page_home">
      <InfoBar />
      <WelcomeCard name={'Bartłomiej'} text={'Bartłomiej'}/>
      <div className="expire__block">
          <ExpireTile quantity={0} icon={<GraduationCap />} iconColor='icon--green' linkHref="/" linkText={'Wygasająca ważność'}  text="szkoleń u pracowników"/>
          <ExpireTile style={{margin: '0 2rem'}} quantity={0} icon={<HeartPulse />} iconColor='icon--gray' linkHref="/" linkText={'Wygasająca ważność'} text="badań lekarskich u pracowników"/>
          <ExpireTile quantity={0} icon={<BookCheck />} iconColor='icon--yellow' linkHref="/" linkText={'Wygasająca ważność'} text="uprawnień u pracowników"/>
    
      </div>
          <HistoryBlock/>

    </div>
  );
};
        {/* <EventsBlock/> */}