import React from 'react';
import classNames from 'classnames';

export interface RadioSmartTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Строка HTML-кода. Если не указано, то будет выведен параметр `children` */
  html?: string;
}

/**
 * Заголовок для стилизованного элемента `input` с типом `radio`.
 * @visibleName RadioSmart.Title
 */
export class RadioSmartTitle extends React.Component<RadioSmartTitleProps> {
  render() {
    const { html, className, children, ...props } = this.props;

    if (!html && !children) {
      return null;
    }

    if (html) {
      return (
        <div
          className={classNames('radio-smart__title', className)}
          dangerouslySetInnerHTML={{ __html: html }}
          {...props}
        />
      );
    }

    return (
      <div className={classNames('radio-smart__title', className)} {...props}>
        {children}
      </div>
    );
  }
}
