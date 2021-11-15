export default function ProgressBar({ value, color, label }) {
  const max = 255;
  const width = value / max * 100;
  return (
    <div className="relative py-1">
      <div role="progress" className={`progress-outer `}>
        <div
          style={{ width: `${width}%` }}
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
