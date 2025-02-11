import React, { useState } from 'react'
import { Paragraph } from '../../atoms/Paragraph'
import { Icon } from '../../atoms/Icon';
import { ClipboardCheck, GraduationCap, ListTodo, TriangleAlert } from 'lucide-react';

export const InfoBar = ():React.JSX.Element => {
    const [trainingsThisYear ] = useState("0");
    const [controllsThisYear ] = useState("0");
    const [accidentsThisYear] = useState("0");
  return (
    <div className={"infoBar"}>
        <div className="infoBar_wrapper">
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText='Szkolenia'/>
            <Icon iconClass='infoBar_wrapper_icon'><GraduationCap /></Icon>
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText={trainingsThisYear}/>
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText="od początku roku"/>
        </div>
         <div className="infoBar_wrapper">
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText='Kontrole'/>
            <Icon iconClass='infoBar_wrapper_icon'><ListTodo /></Icon>
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText={controllsThisYear}/>
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText="od początku roku"/>
        </div>
         <div className="infoBar_wrapper">
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText='Wypadki'/>
            <Icon iconClass='infoBar_wrapper_icon'><TriangleAlert /></Icon>
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText={accidentsThisYear}/>
            <Paragraph paragraphClass='infoBar_wrapper_paragraph'  paragraphText="od początku roku"/>
        </div>
        <div className="infoBar_wrapper">
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText='Ocena Ryzyka'/>
            <Icon iconClass='infoBar_wrapper_icon'><ClipboardCheck /></Icon>
            <Paragraph paragraphClass='infoBar_wrapper_paragraph' paragraphText={accidentsThisYear}/>
            <Paragraph paragraphClass='infoBar_wrapper_paragraph'  paragraphText="od początku roku"/>
        </div>
    </div>
  )
}
