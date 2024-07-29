import './styles/index.css';
import React from 'react';
import classNames from 'classnames';

export interface AlertProps {
  /** Размер компонента */
  size?: 'micro' | 'small' | 'large' | 'extra';
  /** Цвет компонента */
  color?: string;
  /** HTML-контент для отображения внутри компонента.<br> Если указано, то `children` игнорируется */
  content?: string;
  /** Ссылка на компонент. Будет передан в ключевой элемент как `ref` */
  myRef?: React.Ref<HTMLDivElement>;
}

/**
 * Информационное сообщение или предупреждение.
 */
export class Alert extends React.Component<React.HTMLAttributes<HTMLDivElement> & AlertProps> {
  myRef: React.Ref<HTMLDivElement>;

  constructor(props: AlertProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  render() {
    const { size, color, content, className, children, ...props } = this.props;
    const componentProps = {
      className: classNames(
        'alert',
        size && `alert--size-${size}`,
        color && `alert--color-${color}`,
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
