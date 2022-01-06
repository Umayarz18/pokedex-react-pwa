export default function ProgressBar({ value, color, label }) {
  const max = 255;
  const width = value / max * 100;
  return (
    <div className="relative py-1">
      <div role="progress" className={`progress-outer `}>
        <div
          style={{ width: `${width}%` }}
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="progressbar"
          aria-label="Progress bar"
          aria-valuenow={width}
          aria-valuemax={100}
          aria-valuemin={0}
          className={`
          progress-inner text-center text-xs
       `}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
