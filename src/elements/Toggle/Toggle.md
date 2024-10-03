Базовый пример

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <Toggle>Обычный переключатель</Toggle>
  <Toggle>Обычный переключатель</Toggle>
</Gapped>;
```

#### Контент

Если `children` не передан, то будет выведен просто контроллер.

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <Toggle checked value="value">
    children
  </Toggle>
  <Toggle checked value="value" />
</Gapped>;
```

#### Размеры

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <Toggle checked size="micro">
    Размер micro
  </Toggle>
  <Toggle checked size="small">
    Размер small
  </Toggle>
  <Toggle checked>Размер base (по умолчанию)</Toggle>
  <Toggle checked size="large">
    Размер large
  </Toggle>
  <Toggle checked size="extra">
    Размер extra
  </Toggle>
</Gapped>;
```

#### Состояния

У переключателей есть несколько состояний

```js
import { Gapped } from '../Gapped';

const [isWaiting, setIsWaiting] = React.useState(false);
const [checked, setChecked] = React.useState(false);

const handleChange = (e) => {
  setIsWaiting(true);
  setTimeout(() => {
    setIsWaiting(false);
    setChecked(!checked);
  }, 3000);
};

<Gapped isVertical>
  <Toggle checked disabled>
    в отключенном состоянии
  </Toggle>
  <Toggle isInvalid>
    в состоянии ошибки
  </Toggle>
  <Toggle checked isWaiting>
    в режиме ожидания
  </Toggle>
  <Toggle checked={checked} isWaiting={isWaiting} onChange={handleChange}>
    действие после ожидания
  </Toggle>
</Gapped>;
```

#### Обработка событий

Компонент поддерживает все стандарные обработчики нативного `input`.

##### onChange

```js
import { Gapped } from '../Gapped';

const [tryCount, setTryCount] = React.useState(0);
const [checked, setChecked] = React.useState(false);

const handleChange = (e) => {
  setTryCount(tryCount + 1);
  setChecked(tryCount < 3 ? false : e.target.checked);
};

<Gapped isVertical>
  <Toggle checked={checked} onChange={handleChange}>
    Первые 3 попытки будут проигнорированы
  </Toggle>
  <small>Текущее количество попыток: {tryCount}</small>
</Gapped>;
```
