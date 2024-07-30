import './styles/index.css';
import React from 'react';
import classNames from 'classnames';

export interface BadgeProps {
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Цвет компонента */
  color?: 'grey' | 'first' | 'second' | 'third' | 'success' | 'error';
  /** Позиционирование компонента */
  position?: 'left' | 'right';
  /** Ссылка на HTML-элемент */
  myRef?: React.Ref<HTMLDivElement>;
}

/**
 * Индикатор уведомления об активностях (счётчик)
 */
export class Badge extends React.Component<React.HTMLAttributes<HTMLDivElement> & BadgeProps> {
  myRef: React.Ref<HTMLDivElement>;

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
          size !== 'base' && `badge--size-${size}`,
          position && `badge--${position}`,
          className
        )}
        style={
          color
            ? {
                backgroundColor: `var(--color-${color})`,
                color: `var(--color-${color}-text)`,
                ...style,
              }
            : style
        }
        {...props}
        ref={this.myRef}
      >
        {children ? <span>{children}</span> : null}
      </div>
    );
  }
}
