import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface RadioProps extends React.HTMLAttributes<HTMLInputElement> {
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
 * Стилизованный `<input type="radio">`.
 *
 * Поддерживает все стандартные атрибуты и события элемента `input`.
 */
export class Radio extends React.Component<RadioProps> {
  myRef: React.RefObject<HTMLInputElement>;

  constructor(props: RadioProps) {
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
          'radio',
          isInvalid && 'radio--invalid',
          disabled && 'radio--disabled',
          this.state.checked && 'radio--checked',
          isWaiting && 'radio--waiting',
          size !== 'base' && `radio--${size}`,
          className
        )}
      >
        <input
          className="radio__field"
          type="radio"
          value={value}
          checked={this.state.checked}
          disabled={disabled || isWaiting}
          onChange={this.handleChange}
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

    if (typeof this.props.checked !== 'boolean') {
      this.setState({
        checked: event.target.checked,
      });
    }
  };

  componentDidUpdate(prevProps: Readonly<RadioProps>): void {
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }
  }
}
