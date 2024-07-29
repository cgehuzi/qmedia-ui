```js
<Alert>🤷‍♂️ Упс! По заданным параметрам товаров не найдено...</Alert>
```

#### Размеры

```js
import { Gapped } from '../Gapped';

<Gapped vertical align="strentch">
  <Alert size="micro">micro – Сообщение размера micro</Alert>
  <Alert size="small">Сообщение размера small</Alert>
  <Alert>Сообщение без указания размера (base)</Alert>
  <Alert size="large">Сообщение размера large</Alert>
  <Alert size="extra">Сообщение размера extra</Alert>
</Gapped>;
```

#### Цвета

```js
import { Gapped } from '../Gapped';

<Gapped vertical align="strentch">
  <Alert>Сообщение без указания цвета</Alert>
  <Alert color="first">Сообщение цвета first</Alert>
  <Alert color="second">Сообщение цвета second</Alert>
  <Alert color="third">Сообщение цвета third</Alert>
  <Alert color="success">🤷‍♂️ Упс! По заданным параметрам товаров не найдено...</Alert>
  <Alert color="error">🤷‍♂️ Упс! По заданным параметрам товаров не найдено...</Alert>
</Gapped>;
```

#### Контент

Компонент по умолчанию выводит `children`. Но если задать значение параметру `content` (строка HTML-кода), то все `children` будут проигнорированы.

```js
<Alert content="<p>Это сообщение содержит children, но вы видите значение параметра content 😱</p><p>Детали под спойлером VIEW CODE</p>">
  Вот этому контенту не суждено прорваться в DOM
</Alert>
```
