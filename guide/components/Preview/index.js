import classNames from 'classnames';
import './index.css';
import React from 'react';
import DefaultPreview from 'react-styleguidist/lib/client/rsg-components/Preview/Preview';

const Preview = ({ ...props }) => {
  const [background, setBackground] = React.useState('white');
  const [hasGrid, setHasGrid] = React.useState(false);

  return (
    <div className={classNames('guide-preview', `_${background}`, hasGrid && '_has-grid')}>
      <div className="guide-preview__switcher">
        <button
          className={classNames('guide-preview__switcher-button', {
            _active: background === 'white',
          })}
          type="button"
          onClick={() => setBackground('white')}
        >
          Белый фон
        </button>
        <button
          className={classNames('guide-preview__switcher-button', {
            _active: background === 'black',
          })}
          type="button"
          onClick={() => setBackground('black')}
        >
          Чёрный фон
        </button>
        <div className="guide-preview__switcher-separator" />
        <button
          className={classNames('guide-preview__switcher-button', {
            _active: !hasGrid,
          })}
          type="button"
          onClick={() => setHasGrid(false)}
        >
          Без сетки
        </button>
        <button
          className={classNames('guide-preview__switcher-button', {
            _active: hasGrid,
          })}
          type="button"
          onClick={() => setHasGrid(true)}
        >
          С сеткой
        </button>
      </div>
      <DefaultPreview {...props} />
    </div>
  );
};

export default Preview;
