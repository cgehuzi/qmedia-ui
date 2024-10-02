Базовый пример

```js
import { Gapped } from '../Gapped';
import { Button } from '../../elements/Button';

<Gapped align="center">
  <Button size="small">
    Уведомления
    <Badge />
  </Button>
  <Button size="small" feather="shopping-bag">
    Корзина
    <Badge>10</Badge>
  </Button>
</Gapped>;
```

#### Размеры

```js
import { Gapped } from '../Gapped';

<Gapped align="center">
  <Badge size="micro" />
  <Badge size="micro">10</Badge>

  <Badge size="small" />
  <Badge size="small">10</Badge>

  <Badge />
  <Badge>10</Badge>

  <Badge size="large" />
  <Badge size="large">10</Badge>

  <Badge size="extra" />
  <Badge size="extra">10</Badge>
</Gapped>;
```

#### Позиционирование

Доступно 2 варианта абсолютного позиционарования: `left` (вверху слева) и `right` (верху справа).

```js
import { Gapped } from '../Gapped';
import { Button } from '../../elements/Button';

<Gapped align="center">
  <Button size="small">
    Корзина
    <Badge position="left" />
  </Button>
  <Button size="small">
    Корзина
    <Badge position="left">10</Badge>
  </Button>
  <Button size="small">
    Корзина
    <Badge position="right" />
  </Button>
  <Button size="small">
    Корзина
    <Badge position="right">10</Badge>
  </Button>
</Gapped>;
```
