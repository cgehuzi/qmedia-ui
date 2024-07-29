import './styles/index.css';
import React from 'react';
import classNames from 'classnames';

export interface GappedProps {
  /** Расстояние между элементами в пикселях */
  gap?: number;
  /** Направление потока дочерних элементов */
  vertical?: boolean;
  /** Выравнивание элементов относительно оси потока */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /** Выравнивание элементов относительно оси, перпендикулярной потоку */
  justify?: 'start' | 'end' | 'center';
  /** Перенос элементов на новую строку */
  wrap?: boolean;
  /** Ссылка на компонент. Будет передан в ключевой элемент как `ref` */
  myRef?: React.Ref<HTMLDivElement>;
}

/**
 * Блок, расстояние между элементами в котором равно `gap`
 */
export class Gapped extends React.Component<React.HTMLAttributes<HTMLDivElement> & GappedProps> {
  myRef: React.Ref<HTMLDivElement>;

  static defaultProps = {
    gap: 8,
    vertical: false,
    align: 'start',
    justify: 'start',
    wrap: false,
  };

  constructor(props: GappedProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  render() {
    const { gap, vertical, align, justify, wrap, className, children, ...props } = this.props;

    return (
      <div
        className={classNames(
          'gapped',
          vertical && `gapped--vertical`,
          align && `gapped--align-${align}`,
          justify && `gapped--justify-${justify}`,
          wrap && 'gapped--wrap',
          className
        )}
        style={{
          gap: `${gap}px`,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
}
