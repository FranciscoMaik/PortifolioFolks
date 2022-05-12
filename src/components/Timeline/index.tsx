import React, { useContext } from 'react';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ThemeContext } from '../../context/ThemeContext';

import { Container, Description, SubTitle, Title } from './styles';

import { items } from './dataInformation';

export const Timeline: React.FC = function () {
  const { themeItem } = useContext(ThemeContext);

  const style = {
    contentStyle: {
      background: themeItem.backgroundCard,
      color: themeItem.colorText,
    },
    iconStyle: {
      background: themeItem.fourColor,
      color: themeItem.colorText,
      height: '24px',
      width: '24px',
      marginTop: '18px',
      marginLeft: '-12px',
    },
    contentArrowStyle: {
      borderRight: `7px solid  ${themeItem.backgroundCard}`,
    },
  };

  return (
    <Container>
      <VerticalTimeline lineColor={`${themeItem.fourColor}`}>
        {items.map(item => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--work"
            date={item.title}
            contentStyle={style.contentStyle}
            contentArrowStyle={style.contentArrowStyle}
            iconStyle={style.iconStyle}
          >
            <Title>{item.cardTitle}</Title>
            <SubTitle>{item.cardSubtitle}</SubTitle>
            <Description>{item.cardDetailedText}</Description>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Container>
  );
};
