import React from 'react';
import './ProgressBar.css';

/**
 * ProgressBar Component
 * Displays a visual progress bar with animated fill
 *
 * @param {Object} props - Component props
 * @param {number} props.currentValue - Current progress value
 * @param {number} props.maxValue - Maximum progress value
 * @param {string} props.label - Optional label for the progress bar
 * @param {boolean} props.showPercentage - Whether to show percentage text
 * @param {boolean} props.whitePercentage - Makes percentage text white (for Profile)
 */
const ProgressBar = ({
  currentValue,
  maxValue,
  label,
  showPercentage = false,
  whitePercentage = false
}) => {
  // Calculate progress percentage
  const progress = Math.min((currentValue / maxValue) * 100, 100);

  return (
    <div className="progress-bar-component">
      {label && <p className="progress-bar-label">{label}</p>}
      <div className="progress-bar-container">
        <div
          className="progress-bar-fill"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={currentValue}
          aria-valuemin="0"
          aria-valuemax={maxValue}
        >
          {showPercentage && (
            <span className={`progress-percentage ${whitePercentage ? 'white-text' : ''}`}>
              {Math.round(progress)}%
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
