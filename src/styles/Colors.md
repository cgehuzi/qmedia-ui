### Общий принцип

В дизайн-системе предусмотрено несколько основных цветов. Для каждого из них создаётся палитра оттенков, которые можно использовать в коде посредством CSS-переменных.

Палитра оттенков предоставлена двумя шкалами:

1. Непрозрачные: от тёмного к светлому
2. Прозрачные: от 5% до 95%

### --color-grey

Максимально обесцвеченный оттенок серого. Используется для текста, безыветных тонов, теней и различных светлых и тёмных подложек (попапы и пр.).

```js
import { GuideColor } from '/guide/components/GuideColor';

<GuideColor color="grey" />;
```

### --color-first

Первый основной цвет бренда.

```js
import { GuideColor } from '/guide/components/GuideColor';

<GuideColor color="first" />;
```

### --color-second

Второй основной цвет бренда. Если не указан, будет равен `--color-first`.

```js
import { GuideColor } from '/guide/components/GuideColor';

<GuideColor color="second" />;
```

### --color-third

Третий основной цвет бренда. Если не указан, будет равен `--color-first`.

```js
import { GuideColor } from '/guide/components/GuideColor';

<GuideColor color="third" />;
```

### --color-success

Цвет, ассоциирующийся с успешным действием. Используется в различных сообщениях, маркерах, кнопках и пр.

```js
import { GuideColor } from '/guide/components/GuideColor';

<GuideColor color="success" />;
```

### --color-error

Цвет, ассоциирующийся с неудачным действием или ошибкой. Используется в различных сообщениях, маркерах, кнопках и пр.

```js
import { GuideColor } from '/guide/components/GuideColor';

<GuideColor color="error" />;
```
