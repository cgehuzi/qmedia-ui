import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
  /** Значение `value` корневого `input` */
  value: string;
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Цвет компонента */
  color?: 'grey' | 'first' | 'second' | 'third' | 'success' | 'error';
  /** Состояние ошибки */
  isInvalid?: boolean;
  /** Состояние ожидания */
  isWaiting?: boolean;
  /** Ссылка на HTML-элемент */
  myRef?: React.Ref<HTMLInputElement>;
  /** Отключает компонент */
  disabled?: boolean;
  /** Отмечен ли компонент */
  checked?: boolean;
  /** Обработчик изменения. Возвращаемое значение будет передано в состояние `checked` */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => boolean;
}

/**
 * Стилизованный `<input type="radio">`.
 *
 * Поддерживает все стандартные атрибуты и события элемента `input`.
 */
export class Radio extends React.Component<RadioProps> {
  myRef: React.Ref<HTMLInputElement>;

  constructor(props: RadioProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  static defaultProps = {
    color: 'first',
    size: 'base',
    isInvalid: false,
    isWaiting: false,
  };

  render() {
    const {
      size,
      color,
      isInvalid,
      isWaiting,
      value,
      disabled,
      checked,
      defaultChecked,
      className,
      children,
      onChange,
      ...props
    } = this.props;

    return (
      <label
        className={classNames(
          'radio',
          isInvalid && 'radio--invalid',
          disabled && 'radio--disabled',
          checked && 'radio--checked',
          isWaiting && 'radio--waiting',
          color && `radio--${color}`,
          size !== 'base' && `radio--${size}`,
          className
        )}
      >
        <input
          className="radio__field"
          type="radio"
          disabled={disabled || isWaiting}
          checked={checked}
          onChange={this.handleChange}
          value={value}
          {...props}
          ref={this.myRef}
        />
        {isWaiting ? (
          <FeatherIcon icon="loader" className="radio__spinner" />
        ) : (
          <div className="radio__icon" />
        )}
        <div className="radio__title">{children || value}</div>
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // если передан обработчик, то вызываем его
    if (this.props.onChange) {
      this.props.onChange(event);
    }

    // отменяем нативное изменение
    return;
  };
}
