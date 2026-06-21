interface SliderControlProps {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix?: string;
  onChange: (value: number) => void;
}

export function SliderControl({
  label,
  value,
  min,
  max,
  step,
  suffix = "",
  onChange
}: SliderControlProps) {
  return (
    <label className="slider-control">
      <span>
        <strong>{label}</strong>
        <em>
          {value.toFixed(step < 0.01 ? 3 : step < 0.1 ? 2 : 1)}
          {suffix}
        </em>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
    </label>
  );
}
