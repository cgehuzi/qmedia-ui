import './styles/index.css';
import React from 'react';
import classNames from 'classnames';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Цвет компонента */
  color?: 'grey' | 'first' | 'second' | 'third' | 'success' | 'error';
  /** HTML-контент для отображения внутри компонента.<br> Если указан, то `children` игнорируется */
  content?: string;
  /** Ссылка на HTML-элемент */
  myRef?: React.Ref<HTMLDivElement>;
}

/**
 * Информационное сообщение или предупреждение.
 */
export class Alert extends React.Component<AlertProps> {
  myRef: React.Ref<HTMLDivElement>;

  constructor(props: AlertProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  static defaultProps = {
    size: 'base',
  };

  render() {
    const { size, color, content, className, children, ...props } = this.props;
    const componentProps = {
      className: classNames(
        'alert',
        size !== 'base' && `alert--${size}`,
        color && `alert--${color}`,
        className
      ),
      ...props,
    };

    return content ? (
      <div dangerouslySetInnerHTML={{ __html: content }} {...componentProps} ref={this.myRef} />
    ) : (
      <div {...componentProps} ref={this.myRef}>
        {children}
      </div>
    );
  }
}
