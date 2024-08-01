import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement & HTMLAnchorElement> {
  /** Является ли компонент ссылкой. Будет использован тег `<a>` */
  isLink?: boolean;
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Цвет компонента. Формат – имя цвета из CSS-переменных, предоставляемых дизайн-системой (без префикса `--color-`).<br><br> Например: `first`, `first-black-20`, `first-white-20`, `first-trans-20` */
  color?: string;
  /** Вариант внешнего вида компонента */
  variant?: 'filled' | 'outline' | 'transparent';
  /** Тип подчёркивания текста */
  underline?: 'none' | 'dashed' | 'solid';
  /** Является ли компонент квадратным. Будут применены вертикальные паддинги `--control-padding-block` по всему периметру. */
  isSquare?: boolean;
  /** Занимает ли компонент всю доступную ширину. */
  isFullwidth?: boolean;
  /** Переводит компонент в состояние ожидания */
  isWaiting?: boolean;
  /** Название иконки Feather для отображения в левой части компонента */
  feather?: string;
  /** Название иконки Feather для отображения в правой части компонента */
  featherRight?: string;
  /** Ссылка на HTML-элемент */
  myRef?: React.Ref<HTMLButtonElement & HTMLAnchorElement>;
  /** Отключает компонент */
  disabled?: boolean;
}

/**
 * Кнопка. Либо ссылка, визуально представляющая собой кнопку.
 *
 * Поддерживает все стандартные атрибуты и события элементов `button` и `а`.
 */
export class Button extends React.Component<ButtonProps> {
  myRef: React.Ref<HTMLButtonElement & HTMLAnchorElement>;

  constructor(props: ButtonProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  static defaultProps = {
    isLink: false,
    size: 'base',
    color: 'first',
    isSquare: false,
    variant: 'filled',
    isWaiting: false,
    underline: 'none',
  };

  render() {
    const {
      isLink,
      size,
      color,
      isSquare,
      variant,
      underline,
      isFullwidth,
      isWaiting,
      feather,
      featherRight,
      disabled,
      className,
      children,
      ...props
    } = this.props;

    const Component = isLink ? 'a' : 'button';

    const mappedChildren = React.Children.map(children, (child, index) => {
      if (typeof child === 'string') return <span className="button__text">{child}</span>;
      return child;
    });

    return (
      <Component
        className={classNames(
          'button',
          size !== 'base' && `button--${size}`,
          color && `button--${color}`,
          isSquare && 'button--square',
          variant !== 'filled' && `button--${variant}`,
          underline !== 'none' && `button--underline-${underline}`,
          isFullwidth && 'button--fullwidth',
          isWaiting && 'button--waiting',
          disabled && 'button--disabled',
          className
        )}
        disabled={isWaiting || disabled}
        {...props}
        ref={this.myRef}
      >
        {isWaiting ? (
          <>
            {feather && (
              <FeatherIcon icon="loader" className="button__icon button__icon--spinner" />
            )}
            {mappedChildren}
            {featherRight &&
              (!feather ? (
                <FeatherIcon icon="loader" className="button__icon button__icon--spinner" />
              ) : (
                <FeatherIcon className="button__icon" icon={featherRight} />
              ))}
          </>
        ) : (
          <>
            {feather && <FeatherIcon className="button__icon" icon={feather} />}
            {mappedChildren}
            {featherRight && <FeatherIcon className="button__icon" icon={featherRight} />}
          </>
        )}
      </Component>
    );
  }
}
