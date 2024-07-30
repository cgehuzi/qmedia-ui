import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';
import { CheckboxSmartTitle } from './CheckboxSmartTitle';
import { CheckboxSmartCaption } from './CheckboxSmartCaption';

export interface CheckboxSmartProps extends React.HTMLAttributes<HTMLInputElement> {
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
}

/**
 * Стилизованный элемент `input` с типом `checkbox`. Оформлен в виде интерактивной плашки с заголовком и пояснением. Поддерживает все стандартные атрибуты и события элемента `input`.
 *
 * Содержит вложенные компоненты: `<CheckboxSmart.Title>` и `<CheckboxSmart.Caption>`
 */
export class CheckboxSmart extends React.Component<CheckboxSmartProps> {
  myRef: React.Ref<HTMLInputElement>;

  constructor(props: CheckboxSmartProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  static defaultProps = {
    color: 'first',
    size: 'base',
    isInvalid: false,
    isWaiting: false,
  };

  state = {
    checked: this.props.checked,
    disabled: this.props.disabled,
    invalid: this.props.isInvalid,
    waiting: this.props.isWaiting,
  };

  static Title = CheckboxSmartTitle;
  static Caption = CheckboxSmartCaption;

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
          'checkbox-smart',
          this.state.invalid && '_invalid',
          this.state.disabled && '_disabled',
          this.state.checked && '_checked',
          this.state.waiting && '_waiting',
          color && `checkbox-smart--${color}`,
          size !== 'base' && `checkbox-smart--${size}`,
          className
        )}
      >
        <input
          className="checkbox-smart__input"
          type="checkbox"
          disabled={this.state.disabled || this.state.waiting}
          defaultChecked={this.state.checked}
          onChange={this.handleChange}
          {...props}
          ref={this.myRef}
        />
        {this.state.waiting ? (
          <FeatherIcon icon="loader" className="checkbox-smart__spinner" />
        ) : (
          <div className={classNames('checkbox-smart__icon', color && `_color-${color}`)} />
        )}
        <div className="checkbox-smart__body">{children || value}</div>
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange(event);
      return;
    }

    this.setState({
      checked: event.target.checked,
    });
  };

  componentDidUpdate(prevProps: Readonly<CheckboxSmartProps>): void {
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }

    if (prevProps.isWaiting !== this.props.isWaiting) {
      this.setState({
        waiting: this.props.isWaiting,
      });
    }
  }
}
