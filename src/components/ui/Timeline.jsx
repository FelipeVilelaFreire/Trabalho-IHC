import { useEffect, useRef, useState } from 'react';
import './Timeline.css';

const Timeline = ({ items }) => {
  const [visibleItems, setVisibleItems] = useState([]);
  const itemRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.indexOf(entry.target);
            if (index !== -1 && !visibleItems.includes(index)) {
              setVisibleItems((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      itemRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [visibleItems]);

  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      {items.map((item, index) => (
        <div
          key={index}
          ref={(el) => (itemRefs.current[index] = el)}
          className={`timeline-item ${
            index % 2 === 0 ? 'timeline-item-left' : 'timeline-item-right'
          } ${visibleItems.includes(index) ? 'timeline-item-visible' : ''}`}
        >
          <div className="timeline-content">
            <div className="timeline-icon">
              {item.icon || (
                <span className="timeline-number">{index + 1}</span>
              )}
            </div>
            <h3 className="timeline-title">{item.title}</h3>
            <p className="timeline-description">{item.description}</p>
            {item.date && <span className="timeline-date">{item.date}</span>}
          </div>
          <div className="timeline-dot"></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;