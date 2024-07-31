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
  /** Обработчик изменения. Возвращаемое значение будет передано в состояние `checked` */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => boolean;
}

/**
 * Стилизованный элемент `input` с типом `checkbox`. Поддерживает все стандартные атрибуты и события элемента `input`.
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
    checked: this.props.checked || this.props.defaultChecked || false,
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
          isInvalid && '_invalid',
          disabled && '_disabled',
          this.state.checked && '_checked',
          isWaiting && '_waiting',
          color && `checkbox--${color}`,
          size !== 'base' && `checkbox--${size}`,
          className
        )}
      >
        <input
          className="checkbox__field"
          type="checkbox"
          disabled={disabled || isWaiting}
          checked={this.state.checked}
          onChange={this.handleChange}
          {...props}
          ref={this.myRef}
        />
        {isWaiting ? (
          <FeatherIcon icon="loader" className="checkbox__spinner" />
        ) : (
          <div className={classNames('checkbox__icon', color && `_color-${color}`)} />
        )}
        <div className="checkbox__title">{children || value}</div>
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.setState({
        checked: this.props.onChange(event),
      });
      return;
    }

    this.setState({
      checked: event.target.checked,
    });
  };

  componentDidUpdate(prevProps: Readonly<CheckboxProps>): void {
    if (prevProps.checked !== this.props.checked) {
      this.setState({
        checked: this.props.checked,
      });
    }
  }
}
