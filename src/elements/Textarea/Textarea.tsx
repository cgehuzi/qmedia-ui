import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import _, { get } from 'lodash';

export interface TextareaProps extends React.HTMLAttributes<HTMLTextAreaElement> {
  /** Значение `value` корневого `textarea` */
  value: string;
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Состояние ошибки */
  isInvalid?: boolean;
  /** Состояние ожидания */
  isWaiting?: boolean;
  /** Максимальное число символов в `value` */
  maxLength?: number;
  /** Показывать количество символов */
  showCounter?: boolean;
  /** Ссылка на HTML-элемент */
  myRef?: React.RefObject<HTMLTextAreaElement>;
  /** Отключает компонент */
  disabled?: boolean;
  /** Обработчик изменения значения. Возвращаемое значение заменит `value` */
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => string | number;
}

const getValueLength = (value: string) => {
  return _.toArray(value).length;
};

/**
 * Стилизованный `<textarea>`.
 *
 * Поддерживает все стандартные атрибуты и события элемента `textarea`.
 */
export class Textarea extends React.Component<TextareaProps> {
  myRef: React.RefObject<HTMLTextAreaElement>;

  constructor(props: TextareaProps) {
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
      maxLength,
      showCounter,
      isInvalid,
      isWaiting,
      value,
      disabled,
      className,
      myRef,
      onChange,
      ...props
    } = this.props;

    return (
      <label
        className={classNames(
          'textarea',
          isInvalid && 'textarea--invalid',
          disabled && 'textarea--disabled',
          isWaiting && 'textarea--waiting',
          size !== 'base' && `textarea--${size}`,
          className
        )}
      >
        <textarea
          className="textarea__field"
          value={this.state.value}
          disabled={disabled || isWaiting}
          onChange={this.handleChange}
          {...props}
          ref={this.myRef}
        />
        {((maxLength && showCounter !== false) || showCounter) && (
          <div className="textarea__counter">
            {getValueLength(this.state.value)} {maxLength && `/${maxLength}`}
          </div>
        )}
      </label>
    );
  }

  setValue = (value: string) => {
    const valueLength = getValueLength(value);

    if (!this.props.maxLength) {
      this.setState({
        value,
      });
      return;
    }

    if (valueLength <= this.props.maxLength) {
      this.setState({
        value,
      });
      return;
    }

    const trimmedValue = _.toArray(value).slice(0, this.props.maxLength).join('');

    this.setState({
      value: trimmedValue,
    });
  };

  handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    // если передан обработчик, то используем его
    if (this.props.onChange) {
      const nextValue = this.props.onChange(event);
      // если обработчик передал значение
      if (typeof nextValue === 'string' || typeof nextValue === 'number') {
        // сохраняем изменение
        this.setValue(String(nextValue));
      }
      // иначе отменяем изменение
      return;
    }

    // если обработчик не передан, то используем состояние HTML-элемента
    this.setValue(event.target.value);
  };

  componentDidUpdate(prevProps: Readonly<TextareaProps>): void {
    if (prevProps.value !== this.props.value) {
      console.log('asd');
      this.setState({
        value: this.props.value,
      });
    }
  }
}
