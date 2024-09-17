import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
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
 * Стилизованный `<input type="checkbox">`.
 *
 * Поддерживает все стандартные атрибуты и события элемента `input`.
 */
export class Checkbox extends React.Component<CheckboxProps> {
  myRef: React.RefObject<HTMLInputElement>;

  constructor(props: CheckboxProps) {
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
          'checkbox',
          isInvalid && 'checkbox--invalid',
          disabled && 'checkbox--disabled',
          this.state.checked && 'checkbox--checked',
          isWaiting && 'checkbox--waiting',
          size !== 'base' && `checkbox--${size}`,
          className
        )}
      >
        <input
          className="checkbox__field"
          type="checkbox"
          value={value}
          checked={this.state.checked}
          disabled={disabled || isWaiting}
          onChange={this.handleChange}
          {...props}
          ref={this.myRef}
        />
        {isWaiting ? (
          <FeatherIcon icon="loader" className="checkbox__spinner" />
        ) : (
          <div className="checkbox__icon" />
        )}
        <div className="checkbox__title">{children || value}</div>
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

  componentDidUpdate(prevProps: Readonly<CheckboxProps>): void {
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }
  }
}
