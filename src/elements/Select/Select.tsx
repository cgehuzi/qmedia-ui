import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';

export interface SelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  /** Значение `value` корневого `select` */
  value: string;
  /** Подсказка, показываемая при пустом `value` */
  placeholder?: string;
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Название иконки Feather для отображения в левой части компонента */
  feather?: string;
  /** Отключает компонент */
  disabled?: boolean;
  /** Состояние ошибки */
  isInvalid?: boolean;
  /** Состояние ожидания */
  isWaiting?: boolean;
  /** Ссылка на HTML-элемент */
  myRef?: React.RefObject<HTMLSelectElement>;
}

/**
 * Стилизованный `<select>`.
 *
 * Поддерживает все стандартные атрибуты и события элемента `select`.
 */
export class Select extends React.Component<SelectProps> {
  myRef: React.RefObject<HTMLSelectElement>;

  constructor(props: SelectProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  static defaultProps = {
    size: 'base',
    isInvalid: false,
    isWaiting: false,
  };

  state = {
    value: this.props.value || this.props.defaultValue || '',
  };

  render() {
    const {
      size,
      feather,
      isInvalid,
      isWaiting,
      value,
      defaultValue,
      disabled,
      placeholder,
      className,
      myRef,
      onChange,
      ...props
    } = this.props;

    return (
      <label
        className={classNames(
          'select',
          isInvalid && 'select--invalid',
          disabled && 'select--disabled',
          isWaiting && 'select--waiting',
          size !== 'base' && `select--${size}`,
          feather && 'select--with-icon',
          className
        )}
      >
        <select
          className="select__field"
          value={this.state.value}
          disabled={disabled || isWaiting}
          onChange={this.handleChange}
          {...props}
          ref={this.myRef}
        />
        {placeholder && (
          <div
            className={classNames(
              'select__placeholder',
              !this.state.value && 'select__placeholder--visible'
            )}
          >
            {placeholder}
          </div>
        )}
        {feather && (
          <FeatherIcon
            icon={isWaiting ? 'loader' : feather}
            className={classNames('select__icon', isWaiting && 'select__icon--spinner')}
          />
        )}

        <FeatherIcon icon="chevron-down" className="select__icon select__icon--arrow" />
      </label>
    );
  }

  handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    // если передан обработчик, то вызываем его
    if (this.props.onChange) {
      this.props.onChange(event);
    }

    if (typeof this.props.value === 'undefined') {
      this.setState({
        value: event.target.value,
      });
    }
  };

  componentDidMount(): void {
    const value = this.myRef.current?.value || '';
    this.setState({
      value,
    });
  }

  componentDidUpdate(prevProps: Readonly<SelectProps>): void {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value,
      });
    }
  }
}
