import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';
import { CheckboxSmartTitle } from './CheckboxSmartTitle';
import { CheckboxSmartCaption } from './CheckboxSmartCaption';

export interface CheckboxSmartProps extends React.HTMLAttributes<HTMLInputElement> {
  /** Значение `value` корневого `input` */
  value?: string;
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
 * Стилизованный `<input type="checkbox">`. Оформлен в виде интерактивной плашки с заголовком и пояснением.
 *
 * Поддерживает все стандартные атрибуты и события элемента `input`.
 *
 * ---
 *
 * Содержит вложенные компоненты: `<CheckboxSmart.Title>` и `<CheckboxSmart.Caption>`
 */
export class CheckboxSmart extends React.Component<CheckboxSmartProps> {
  myRef: React.RefObject<HTMLInputElement>;

  constructor(props: CheckboxSmartProps) {
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

  static Title = CheckboxSmartTitle;
  static Caption = CheckboxSmartCaption;

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
          'checkbox-smart',
          isInvalid && 'checkbox-smart--invalid',
          disabled && 'checkbox-smart--disabled',
          this.state.checked && 'checkbox-smart--checked',
          isWaiting && 'checkbox-smart--waiting',
          size !== 'base' && `checkbox-smart--${size}`,
          className
        )}
      >
        <input
          className="checkbox-smart__field"
          type="checkbox"
          value={value}
          checked={this.state.checked}
          disabled={disabled || isWaiting}
          onChange={this.handleChange}
          {...props}
          ref={this.myRef}
        />
        {isWaiting ? (
          <FeatherIcon icon="loader" className="checkbox-smart__spinner" />
        ) : (
          <div className="checkbox-smart__icon" />
        )}
        <div className="checkbox-smart__body">{children || value}</div>
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

  componentDidUpdate(prevProps: Readonly<CheckboxSmartProps>): void {
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }
  }
}
