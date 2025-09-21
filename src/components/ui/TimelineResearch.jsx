import './TimelineResearch.css';

const TimelineResearch = ({ items }) => {
  return (
    <div className="research-timeline">
      {items.map((item, index) => (
        <div key={index} className="research-timeline-item">
          <div className="research-timeline-marker">
            <span className="research-timeline-icon">{item.icon}</span>
            <div className="research-timeline-line"></div>
          </div>
          <div className="research-timeline-content">
            <div className="research-timeline-card">
              <div className="research-timeline-header">
                <h3 className="research-timeline-title">{item.title}</h3>
                <span className="research-timeline-date">{item.date}</span>
              </div>
              <p className="research-timeline-description">{item.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineResearch;