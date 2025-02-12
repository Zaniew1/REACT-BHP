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
            <Icon iconClass='infoBar_wrapper_icon'><GraduationCap /></Icon>
            <div className={'infoBar_wrapper_text'} >
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText='Szkolenia'/>
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText={trainingsThisYear}/>
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText="od początku roku"/>
            </div>
        </div>
         <div className="infoBar_wrapper">
            <Icon iconClass='infoBar_wrapper_icon'><ListTodo /></Icon>
            <div className={'infoBar_wrapper_text'} >
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText='Kontrole'/>
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText={controllsThisYear}/>
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText="od początku roku"/>
            </div>
        </div>
         <div className="infoBar_wrapper">
            <Icon iconClass='infoBar_wrapper_icon'><TriangleAlert /></Icon>
            <div className={'infoBar_wrapper_text'} >
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText='Wypadki'/>
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText={accidentsThisYear}/>
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph'  paragraphText="od początku roku"/>
            </div>
        </div>
        <div className="infoBar_wrapper">
            <Icon iconClass='infoBar_wrapper_icon'><ClipboardCheck /></Icon>
            <div className={'infoBar_wrapper_text'} >
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText='Ocena Ryzyka'/>
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph' paragraphText={accidentsThisYear}/>
                <Paragraph paragraphClass='infoBar_wrapper_text_paragraph'  paragraphText="od początku roku"/>
            </div>
        </div>
    </div>
  )
}
