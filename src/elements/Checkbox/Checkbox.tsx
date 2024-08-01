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
 * Стилизованный `<input type="checkbox">`.
 * 
 * Поддерживает все стандартные атрибуты и события элемента `input`.
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
          isInvalid && 'checkbox--invalid',
          disabled && 'checkbox--disabled',
          this.state.checked && 'checkbox--checked',
          isWaiting && 'checkbox--waiting',
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
          <div className="checkbox__icon" />
        )}
        <div className="checkbox__title">{children || value}</div>
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // если передан обработчик, то используем его
    if (this.props.onChange) {
      const nextChecked = this.props.onChange(event);
      // если обработчик передал значение
      if (typeof nextChecked === 'boolean') {
        // сохраняем изменение
        this.setState({
          checked: nextChecked,
        });
      }
      // иначе отменяем изменение
      return;
    }

    // если обработчик не передан, то используем состояние HTML-элемента
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
