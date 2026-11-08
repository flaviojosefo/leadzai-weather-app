import './TemperatureToggle.css';

interface TemperatureToggleProps {
  celsius: boolean;
  onToggle: () => void;
}

function TemperatureToggle({ celsius, onToggle }: TemperatureToggleProps) {
  return (
    <div className="temperature-toggle">
      <span className={celsius ? 'active' : ''}>
        ºC
      </span>
      <button
        className={`temperature-toggle-button ${!celsius ? 'f' : ''}`}
        onClick={onToggle}
      >
        <span className="temperature-toggle-slider"></span>
      </button>
      <span className={!celsius ? 'active' : ''}>
        ºF
      </span>
    </div>
  );
}

export default TemperatureToggle;