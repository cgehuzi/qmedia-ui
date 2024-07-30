import './index.css';
import React from 'react';

const Color = ({ color, mixColor, mixPercent, textColor }) => {
  const fullColor = `${color}${mixColor ? `-${mixColor}` : ''}${mixPercent ? `-${mixPercent}` : ''}`;
  const defaultTextColor = `var(--color-${color}-text)`;
  textColor = mixPercent && mixPercent > 30 ? textColor : defaultTextColor;
  const backgroundColor = `var(--color-${fullColor})`;

  return (
    <div className="guide-color__item" style={{ color: textColor, backgroundColor }}>
      {mixPercent || `--color-${color}`}
    </div>
  );
};

const ColorGroup = ({ color, mixColor, textColor }) => (
  <div className="guide-color__group">
    <div className="guide-color__group-title">
      --color-{color}-{mixColor}-
    </div>
    <Color color={color} mixColor={mixColor} mixPercent={10} textColor={textColor} />
    <Color color={color} mixColor={mixColor} mixPercent={20} textColor={textColor} />
    <Color color={color} mixColor={mixColor} mixPercent={30} textColor={textColor} />
    <Color color={color} mixColor={mixColor} mixPercent={40} textColor={textColor} />
    <Color color={color} mixColor={mixColor} mixPercent={50} textColor={textColor} />
    <Color color={color} mixColor={mixColor} mixPercent={60} textColor={textColor} />
    <Color color={color} mixColor={mixColor} mixPercent={70} textColor={textColor} />
    <Color color={color} mixColor={mixColor} mixPercent={80} textColor={textColor} />
    <Color color={color} mixColor={mixColor} mixPercent={90} textColor={textColor} />
  </div>
);

const GuideColor = ({ color }) => (
  <div className="guide-color">
    <div className="guide-color">
      <div className="guide-color__header">
        <Color color={color} />
      </div>
      <ColorGroup color={color} mixColor="black" textColor="white" />
      <ColorGroup color={color} mixColor="white" textColor="var(--body-text-color)" />
      <ColorGroup color={color} mixColor="trans" textColor="inherit" />
    </div>
  </div>
);

export default GuideColor;
