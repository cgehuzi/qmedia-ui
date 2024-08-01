import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface LinkProps extends React.HTMLAttributes<HTMLAnchorElement & HTMLButtonElement> {
  /** Является ли компонент кнопкой. Будет использован тег `<button>` */
  isButton?: boolean;
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Цвет компонента. Формат – имя цвета из CSS-переменных, предоставляемых дизайн-системой (без префикса `--color-`).<br><br> Например: `first`, `first-black-20`, `first-white-20`, `first-trans-20` */
  color?: string;
  /** Тип подчёркивания текста */
  underline?: 'none' | 'dashed' | 'solid';
  /** Переводит компонент в состояние ожидания */
  isWaiting?: boolean;
  /** Название иконки Feather для отображения в левой части компонента */
  feather?: string;
  /** Название иконки Feather для отображения в правой части компонента */
  featherRight?: string;
  /** Ссылка на HTML-элемент */
  myRef?: React.RefObject<HTMLAnchorElement & HTMLButtonElement>;
  /** Отключает компонент */
  disabled?: boolean;
}

/**
 * Ссылка. Либо кнопка, визуально представляющая собой ссылку.
 *
 * Поддерживает все стандартные атрибуты и события элементов `а` и `button`.
 */
export class Link extends React.Component<LinkProps> {
  myRef: React.RefObject<HTMLAnchorElement & HTMLButtonElement>;

  constructor(props: LinkProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  static defaultProps = {
    isButton: false,
    size: 'base',
    color: 'first',
    underline: 'solid',
    isWaiting: false,
  };

  render() {
    const {
      isButton,
      size,
      color,
      underline,
      isWaiting,
      feather,
      featherRight,
      disabled,
      className,
      children,
      ...props
    } = this.props;

    const Component = isButton ? 'button' : 'a';

    return (
      <Component
        className={classNames(
          'link',
          size !== 'base' && `link--${size}`,
          color && `link--${color}`,
          underline !== 'solid' && `link--underline-${underline}`,
          isWaiting && 'link--waiting',
          disabled && 'link--disabled',
          className
        )}
        disabled={isWaiting || disabled}
        {...props}
        ref={this.myRef}
      >
        {isWaiting ? (
          <>
            {feather && <FeatherIcon icon="loader" className="link__icon link__icon--spinner" />}
            <span className="link__text">{children}</span>
            {featherRight &&
              (!feather ? (
                <FeatherIcon icon="loader" className="link__icon link__icon--spinner" />
              ) : (
                <FeatherIcon className="link__icon" icon={featherRight} />
              ))}
          </>
        ) : (
          <>
            {feather && <FeatherIcon className="link__icon" icon={feather} />}
            <span className="link__text">{children}</span>
            {featherRight && <FeatherIcon className="link__icon" icon={featherRight} />}
          </>
        )}
      </Component>
    );
  }
}
