import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface ToggleProps extends React.HTMLAttributes<HTMLInputElement> {
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
 * Стилизованный `<input type="toggle">`.
 *
 * Поддерживает все стандартные атрибуты и события элемента `input`.
 */
export class Toggle extends React.Component<ToggleProps> {
  myRef: React.RefObject<HTMLInputElement>;

  constructor(props: ToggleProps) {
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
          'toggle',
          isInvalid && 'toggle--invalid',
          disabled && 'toggle--disabled',
          this.state.checked && 'toggle--checked',
          isWaiting && 'toggle--waiting',
          size !== 'base' && `toggle--${size}`,
          className
        )}
      >
        <div className="toggle__container">
          <input
            className="toggle__field"
            type="checkbox"
            value={value}
            checked={this.state.checked}
            disabled={disabled || isWaiting}
            onChange={this.handleChange}
            {...props}
            ref={this.myRef}
          />
          <div className="toggle__back" />
          <div className="toggle__circle" />
        </div>
        {children && <div className="toggle__title">{children}</div>}
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

  componentDidUpdate(prevProps: Readonly<ToggleProps>): void {
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }
  }
}
