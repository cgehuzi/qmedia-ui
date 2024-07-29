import './styles/index.css';
import React from 'react';
import classNames from 'classnames';

export interface BadgeProps {
  /** Размер компонента */
  size?: 'small' | 'large' | 'extra';
  /** Ссылка на ключевой HTML-элемент */
  myRef?: React.Ref<HTMLDivElement>;
}

/**
 * Индикатор, обозначающий статус или количество элементов.
 */
export class Badge extends React.Component<React.HTMLAttributes<HTMLDivElement> & BadgeProps> {
  myRef: React.Ref<HTMLDivElement>;

  constructor(props: BadgeProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  render() {
    const { size, className, children, ...props } = this.props;

    return (
      <div
        className={classNames('badge', size && `badge--size-${size}`, className)}
        {...props}
        ref={this.myRef}
      >
        {children ? <span>{children}</span> : null}
      </div>
    );
  }
}
