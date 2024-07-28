import Cloud from "./Cloud";

interface Props {
  count: number;
  yOffset?: string | number;
}

export const Clouds: React.FC<Props> = ({ count, yOffset = 0 }) => {
  let cloudArray = [];

  for (let i = 0; i < count; i++) {
    const isReversed = Math.random() < 0.5;
    cloudArray.push(<Cloud key={i} reversed={isReversed} />);
  }

  return (
    <div className="clouds" style={{ top: yOffset }}>
      {cloudArray}
    </div>
  );
};
