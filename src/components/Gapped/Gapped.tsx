import './styles/index.css';
import React from 'react';
import classNames from 'classnames';

export interface GappedProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Расстояние между элементами в пикселях */
  gap?: number;
  /** Направление потока дочерних элементов */
  isVertical?: boolean;
  /** Выравнивание элементов относительно оси потока */
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch';
  /** Выравнивание элементов относительно оси, перпендикулярной потоку */
  justify?: 'start' | 'end' | 'center' | 'stretch';
  /** Перенос элементов на новую строку */
  isWrap?: boolean;
  /** Ссылка на HTML-элемент */
  myRef?: React.Ref<HTMLDivElement>;
}

/**
 * Блок, расстояние между элементами в котором равно `gap`
 */
export class Gapped extends React.Component<GappedProps> {
  myRef: React.Ref<HTMLDivElement>;

  static defaultProps = {
    gap: 8,
    isVertical: false,
    align: 'start',
    justify: 'start',
    isWrap: false,
  };

  constructor(props: GappedProps) {
    super(props);
    this.myRef = props.myRef || React.createRef();
  }

  render() {
    const { gap, isVertical, align, justify, isWrap, className, style, children, ...props } =
      this.props;

    return (
      <div
        className={classNames(
          'gapped',
          isVertical && `gapped--vertical`,
          align && `gapped--align-${align}`,
          justify && `gapped--justify-${justify}`,
          isWrap && 'gapped--wrap',
          className
        )}
        style={{
          gap: `${gap}px`,
          ...style,
        }}
        {...props}
      >
        {children}
      </div>
    );
  }
}
