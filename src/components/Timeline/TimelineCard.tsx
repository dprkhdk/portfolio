// components/TimelineCard.tsx
import React from 'react';
import './Timeline.css';

interface TimelineCardProps {
    date: string;
    title: string;
    subtitle: string;
    description: string;
}

const TimelineCard = React.forwardRef<HTMLDivElement, TimelineCardProps>(
    ({ date, title, subtitle, description }, ref) => {
        return (
            <div className="timeline-card-wrapper" ref={ref}>
                <div className="timeline-card">
                    <p className="timeline-date">{date}</p>
                    <h3 className="timeline-title">{title}</h3>
                    <h4 className="timeline-subtitle">{subtitle}</h4>
                    <p className="timeline-description">{description}</p>
                </div>
            </div>
        );
    }
);

export default TimelineCard;