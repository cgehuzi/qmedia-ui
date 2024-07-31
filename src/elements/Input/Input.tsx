import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  /** Значение `value` корневого `input` */
  value: string;
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Цвет компонента */
  color?: 'grey' | 'first' | 'second' | 'third' | 'success' | 'error';
  /** Название иконки Feather для отображения в левой части компонента */
  feather?: string;
  /** Состояние ошибки */
  isInvalid?: boolean;
  /** Состояние ожидания */
  isWaiting?: boolean;
  /** Ссылка на HTML-элемент */
  myRef?: React.Ref<HTMLInputElement>;
  /** Отключает компонент */
  disabled?: boolean;
  /** Обработчик изменения значения. Возвращаемое значение заменит `value` */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => string;
}

/**
 * Стилизованный элемент `input`. Поддерживает все стандартные атрибуты и события элемента `input`.
 */
export class Input extends React.Component<InputProps> {
  myRef: React.Ref<HTMLInputElement>;

  constructor(props: InputProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  static defaultProps = {
    size: 'base',
    isInvalid: false,
    isWaiting: false,
  };

  state = {
    value: this.props.value || '',
  };

  render() {
    const {
      size,
      color,
      feather,
      isInvalid,
      isWaiting,
      value,
      disabled,
      defaultChecked,
      className,
      children,
      onChange,
      ...props
    } = this.props;

    return (
      <label
        className={classNames(
          'input',
          isInvalid && '_invalid',
          disabled && '_disabled',
          isWaiting && '_waiting',
          color && `input--${color}`,
          size !== 'base' && `input--${size}`,
          feather && 'input--has-feather',
          className
        )}
      >
        <input
          className="input__field"
          value={this.state.value}
          disabled={disabled || isWaiting}
          onChange={this.handleChange}
          {...props}
          ref={this.myRef}
        />
        {feather && (
          <FeatherIcon
            icon={isWaiting ? 'loader' : feather}
            className={classNames('input__feather', isWaiting && '_spinner')}
          />
        )}
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (this.props.onChange) {
      this.setState({
        value: this.props.onChange(event),
      });
      return;
    }

    this.setState({
      value: event.target.value,
    });
  };

  componentDidUpdate(prevProps: Readonly<InputProps>): void {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value,
      });
    }
  }
}
