import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface CheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
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
 * Информационное сообщение или предупреждение.
 */
export class Checkbox extends React.Component<CheckboxProps> {
  myRef: React.Ref<HTMLInputElement>;

  constructor(props: CheckboxProps) {
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
          'checkbox',
          this.state.invalid && '_invalid',
          this.state.disabled && '_disabled',
          this.state.checked && '_checked',
          this.state.waiting && '_waiting',
          color && `checkbox--${color}`,
          size !== 'base' && `checkbox--${size}`,
          className
        )}
      >
        <input
          className="checkbox__input"
          type="checkbox"
          disabled={this.state.disabled || this.state.waiting}
          defaultChecked={this.state.checked}
          onChange={this.handleChange}
          {...props}
          ref={this.myRef}
        />
        {this.state.waiting ? (
          <FeatherIcon icon="loader" className="checkbox__spinner" />
        ) : (
          <div className={classNames('checkbox__visible', color && `_color-${color}`)} />
        )}
        <span className="checkbox__title">{children || value}</span>
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.props.onChange(event);
      return;
    }
  };

  componentDidUpdate(prevProps: Readonly<CheckboxProps>): void {
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
