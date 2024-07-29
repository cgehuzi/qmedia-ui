import './index.css';
import React from 'react';

const Color = ({ color, lvl }) => (
  <div className="guide-color__item">
    {lvl ? (
      <div className="guide-color__item-lvl">{lvl}</div>
    ) : (
      <div className="guide-color__item-title" style={{ color: `var(--color-${color}-text)` }}>
        --color-{color}
      </div>
    )}
    <div
      className="guide-color__item-square"
      style={{ backgroundColor: `var(--color-${color}${lvl ? `-${lvl}` : ''})` }}
    />
  </div>
);

const ColorGroup = ({ color }) => (
  <div className="guide-color__group">
    <div className="guide-color__group-title">--color-{color}-__</div>
    <Color color={color} lvl="50" />
    <Color color={color} lvl="100" />
    <Color color={color} lvl="200" />
    <Color color={color} lvl="300" />
    <Color color={color} lvl="400" />
    <Color color={color} lvl="500" />
    <Color color={color} lvl="600" />
    <Color color={color} lvl="700" />
    <Color color={color} lvl="800" />
    <Color color={color} lvl="900" />
    <Color color={color} lvl="950" />
  </div>
);

const ColorTransparentGroup = ({ color }) => (
  <div className="guide-color__group">
    <div className="guide-color__group-title">--color-{color}-__</div>
    <Color color={color} lvl="5" />
    <Color color={color} lvl="10" />
    <Color color={color} lvl="15" />
    <Color color={color} lvl="20" />
    <Color color={color} lvl="25" />
    <Color color={color} lvl="30" />
    <Color color={color} lvl="35" />
    <Color color={color} lvl="40" />
    <Color color={color} lvl="45" />
    <Color color={color} lvl="50" />
    <Color color={color} lvl="55" />
    <Color color={color} lvl="60" />
    <Color color={color} lvl="65" />
    <Color color={color} lvl="70" />
    <Color color={color} lvl="75" />
    <Color color={color} lvl="80" />
    <Color color={color} lvl="85" />
    <Color color={color} lvl="90" />
    <Color color={color} lvl="95" />
  </div>
);

export const GuideColor = ({ color = '' }) => color && (
    <div className="guide-color">
      <div className="guide-color">
        <div className="guide-color__group">
          <Color color={color} />
        </div>
        <ColorGroup color={color} />
        <ColorTransparentGroup color={`${color}-transparent`} />
      </div>
    </div>
);
