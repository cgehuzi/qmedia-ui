import React from 'react';
import classNames from 'classnames';

export interface RadioSmartCaptionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Строка HTML-кода. Если не указано, то будет выведен параметр `children` */
  html?: string;
}

/**
 * Пояснительный текст для стилизованного элемента `input` с типом `radio`.
 * @visibleName RadioSmart.Caption
 */
export class RadioSmartCaption extends React.Component<RadioSmartCaptionProps> {
  render() {
    const { html, className, children, ...props } = this.props;

    if (!html && !children) {
      return null;
    }

    if (html) {
      return (
        <div
          className={classNames('radio-smart__caption', className)}
          dangerouslySetInnerHTML={{ __html: html }}
          {...props}
        />
      );
    }

    return (
      <div className={classNames('radio-smart__caption', className)} {...props}>
        {children}
      </div>
    );
  }
}
