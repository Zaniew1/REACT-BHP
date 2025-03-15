import React, { useState } from 'react';
import { Paragraph } from '../../atoms/Paragraph/Paragraph';
import { Icon } from '../../atoms/Icon/Icon';
import { ClipboardCheck, GraduationCap, ListTodo, TriangleAlert } from 'lucide-react';

export const InfoBar = (): React.JSX.Element => {
  const [trainingsThisYear] = useState('0');
  const [controllsThisYear] = useState('0');
  const [accidentsThisYear] = useState('0');
  return (
    <div className={'infoBar'}>
      <div className="infoBar_wrapper">
        <Icon class="icon--yellow">
          <GraduationCap />
        </Icon>
        <div className={'infoBar_wrapper_text'}>
          <Paragraph class="infoBar_wrapper_text_paragraph" text="Szkolenia" />
          <Paragraph class="infoBar_wrapper_text_paragraph" text={trainingsThisYear} />
          <Paragraph class="infoBar_wrapper_text_paragraph" text="od początku roku" />
        </div>
      </div>
      <div className="infoBar_wrapper">
        <Icon class="icon--gray">
          <ListTodo />
        </Icon>
        <div className={'infoBar_wrapper_text'}>
          <Paragraph class="infoBar_wrapper_text_paragraph" text="Kontrole" />
          <Paragraph class="infoBar_wrapper_text_paragraph" text={controllsThisYear} />
          <Paragraph class="infoBar_wrapper_text_paragraph" text="od początku roku" />
        </div>
      </div>
      <div className="infoBar_wrapper">
        <Icon class="icon--red">
          <TriangleAlert />
        </Icon>
        <div className={'infoBar_wrapper_text'}>
          <Paragraph class="infoBar_wrapper_text_paragraph" text="Wypadki" />
          <Paragraph class="infoBar_wrapper_text_paragraph" text={accidentsThisYear} />
          <Paragraph class="infoBar_wrapper_text_paragraph" text="od początku roku" />
        </div>
      </div>
      <div className="infoBar_wrapper">
        <Icon class="icon--green">
          <ClipboardCheck />
        </Icon>
        <div className={'infoBar_wrapper_text'}>
          <Paragraph class="infoBar_wrapper_text_paragraph" text="Ocena Ryzyka" />
          <Paragraph class="infoBar_wrapper_text_paragraph" text={accidentsThisYear} />
          <Paragraph class="infoBar_wrapper_text_paragraph" text="od początku roku" />
        </div>
      </div>
    </div>
  );
};
