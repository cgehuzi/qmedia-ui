import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface InputProps extends React.HTMLAttributes<HTMLInputElement> {
  /** Значение `value` корневого `input` */
  value: string;
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Название иконки Feather для отображения в левой части компонента */
  feather?: string;
  /** Состояние ошибки */
  isInvalid?: boolean;
  /** Состояние ожидания */
  isWaiting?: boolean;
  /** Ссылка на HTML-элемент */
  myRef?: React.RefObject<HTMLInputElement>;
  /** Отключает компонент */
  disabled?: boolean;
  /** Обработчик изменения значения. Возвращаемое значение заменит `value` */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => string | number;
}

/**
 * Стилизованный `<input>`.
 *
 * Поддерживает все стандартные атрибуты и события элемента `input`.
 */
export class Input extends React.Component<InputProps> {
  myRef: React.RefObject<HTMLInputElement>;

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
      feather,
      isInvalid,
      isWaiting,
      value,
      disabled,
      className,
      onChange,
      ...props
    } = this.props;

    return (
      <label
        className={classNames(
          'input',
          isInvalid && 'input--invalid',
          disabled && 'input--disabled',
          isWaiting && 'input--waiting',
          size !== 'base' && `input--${size}`,
          feather && 'input--with-icon',
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
            className={classNames('input__icon', isWaiting && 'input__icon--spinner')}
          />
        )}
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // если передан обработчик, то используем его
    if (this.props.onChange) {
      const nextValue = this.props.onChange(event);
      // если обработчик передал значение
      if (typeof nextValue === 'string' || typeof nextValue === 'number') {
        // сохраняем изменение
        this.setState({
          value: String(nextValue),
        });
      }
      // иначе отменяем изменение
      return;
    }

    // если обработчик не передан, то используем состояние HTML-элемента
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
