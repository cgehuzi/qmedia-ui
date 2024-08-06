import './styles/index.css';
import React from 'react';
import classNames from 'classnames';
import FeatherIcon from 'feather-icons-react';
import { Rating } from 'react-simple-star-rating';

export interface RatingInputProps {
  /** Значение `value` корневого `Rating` */
  value: number;
  /** Размер компонента */
  size?: 'micro' | 'small' | 'base' | 'large' | 'extra';
  /** Состояние ошибки */
  isInvalid?: boolean;
  /** Состояние ожидания */
  isWaiting?: boolean;
  /** Отключает компонент */
  disabled?: boolean;
  /** Обработчик изменения значения */
  onChange?: (value: number) => void;
  /** Количество звезд */
  starsCount?: number;
  /** Дополнительный класс */
  className?: string;
  /** Состояние только для чтения */
  readonly?: boolean;
  /** Разрешить выбор дробного значения */
  allowFraction?: boolean;
}

/**
 * Стилизованный `<Rating>` из библиотеки "react-simple-star-rating".
 *
 * Поддерживает все стандартные атрибуты и события элемента `Rating`.
 */
export class RatingInput extends React.Component<RatingInputProps> {
  static defaultProps = {
    value: 5,
    size: 'base',
    isInvalid: false,
    isWaiting: false,
    starsCount: 5,
    readonly: false,
    allowFraction: false,
  };

  render() {
    const {
      value,
      size,
      isInvalid,
      isWaiting,
      disabled,
      readonly,
      starsCount,
      allowFraction,
      className,
    } = this.props;

    return (
      <div
        className={classNames(
          'rating-input',
          isInvalid && 'rating-input--invalid',
          disabled && 'rating-input--disabled',
          isWaiting && 'rating-input--waiting',
          size !== 'base' && `rating-input--${size}`,
          className
        )}
      >
        <Rating
          initialValue={value}
          emptyIcon={
            <FeatherIcon className="rating-input__star rating-input__star--empty" icon="star" />
          }
          fillIcon={
            <FeatherIcon className="rating-input__star rating-input__star--fill" icon="star" />
          }
          onClick={this.handleChange}
          iconsCount={starsCount}
          readonly={readonly || disabled || isWaiting}
          allowFraction={allowFraction}
        />
      </div>
    );
  }

  handleChange = (value: number) => {
    // если передан обработчик, то вызываем его
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  };
}
