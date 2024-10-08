import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';
import { RadioSmartTitle } from './RadioSmartTitle';
import { RadioSmartCaption } from './RadioSmartCaption';

export interface RadioSmartProps extends React.HTMLAttributes<HTMLInputElement> {
  /** Значение `value` корневого `input` */
  value: string;
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Состояние ошибки */
  isInvalid?: boolean;
  /** Состояние ожидания */
  isWaiting?: boolean;
  /** Ссылка на HTML-элемент */
  myRef?: React.RefObject<HTMLInputElement>;
  /** Отключает компонент */
  disabled?: boolean;
  /** Отмечен ли компонент */
  checked?: boolean;
}

/**
 * Стилизованный `<input type="radio">`. Оформлен в виде интерактивной плашки с заголовком и пояснением.
 *
 * Поддерживает все стандартные атрибуты и события элемента `input`.
 *
 * ---
 *
 * Содержит вложенные компоненты: `<RadioSmart.Title>` и `<RadioSmart.Caption>`
 */
export class RadioSmart extends React.Component<RadioSmartProps> {
  myRef: React.RefObject<HTMLInputElement>;

  constructor(props: RadioSmartProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  static defaultProps = {
    size: 'base',
    isInvalid: false,
    isWaiting: false,
  };

  state = {
    checked: this.props.checked || this.props.defaultChecked || false,
  };

  static Title = RadioSmartTitle;
  static Caption = RadioSmartCaption;

  render() {
    const {
      size,
      isInvalid,
      isWaiting,
      value,
      disabled,
      checked,
      defaultChecked,
      className,
      children,
      myRef,
      onChange,
      ...props
    } = this.props;

    return (
      <label
        className={classNames(
          'radio-smart',
          isInvalid && 'radio-smart--invalid',
          disabled && 'radio-smart--disabled',
          this.state.checked && 'radio-smart--checked',
          isWaiting && 'radio-smart--waiting',
          size !== 'base' && `radio-smart--${size}`,
          className
        )}
      >
        <input
          className="radio-smart__field"
          type="radio"
          value={value}
          checked={this.state.checked}
          disabled={disabled || isWaiting}
          onChange={this.handleChange}
          {...props}
          ref={this.myRef}
        />
        {isWaiting ? (
          <FeatherIcon icon="loader" className="radio-smart__spinner" />
        ) : (
          <div className="radio-smart__icon" />
        )}
        <div className="radio-smart__body">{children || value}</div>
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // если передан обработчик, то вызываем его
    if (this.props.onChange) {
      this.props.onChange(event);
    }

    if (typeof this.props.checked !== 'boolean') {
      this.setState({
        checked: event.target.checked,
      });
    }
  };

  componentDidUpdate(prevProps: Readonly<RadioSmartProps>): void {
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }
  }
}
