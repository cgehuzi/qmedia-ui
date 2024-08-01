import './styles/index.css';
import React from 'react';
import classNames from 'classnames';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Цвет компонента */
  color?: 'grey' | 'first' | 'second' | 'third' | 'success' | 'error';
  /** Позиционирование компонента */
  position?: 'left' | 'right';
  /** Ссылка на HTML-элемент */
  myRef?: React.RefObject<HTMLDivElement>;
}

/**
 * Индикатор уведомления об активностях (счётчик).
 * 
 * Поддерживает все стандартные атрибуты и события элемента `div`.
 */
export class Badge extends React.Component<BadgeProps> {
  myRef: React.RefObject<HTMLDivElement>;

  constructor(props: BadgeProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  static defaultProps = {
    size: 'base',
  };

  render() {
    const { size, color, position, className, style, children, ...props } = this.props;

    return (
      <div
        className={classNames(
          'badge',
          size !== 'base' && `badge--${size}`,
          color && `badge--${color}`,
          position && `badge--${position}`,
          className
        )}
        {...props}
        ref={this.myRef}
      >
        {children ? <span>{children}</span> : null}
      </div>
    );
  }
}
