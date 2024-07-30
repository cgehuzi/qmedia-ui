import classNames from 'classnames';
import './index.css';
import React from 'react';
import DefaultPreview from 'react-styleguidist/lib/client/rsg-components/Preview/Preview';

const Preview = ({ ...props }) => {
  const [background, setBackground] = React.useState('white');

  return (
    <div className={classNames('guide-preview', `_${background}`)}>
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
      </div>
      <DefaultPreview {...props} />
    </div>
  );
};

export default Preview;
