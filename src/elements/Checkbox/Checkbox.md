Базовый пример

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <Checkbox>Обычный чекбокс</Checkbox>
  <Checkbox>Обычный чекбокс</Checkbox>
</Gapped>;
```

#### Контент

Если `children` не передан, то будет выведен просто контроллер.

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <Checkbox checked value="value">
    children
  </Checkbox>
  <Checkbox checked value="value" />
</Gapped>;
```

#### Размеры

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <Checkbox checked size="micro">
    Размер micro
  </Checkbox>
  <Checkbox checked size="small">
    Размер small
  </Checkbox>
  <Checkbox checked>Размер base (по умолчанию)</Checkbox>
  <Checkbox checked size="large">
    Размер large
  </Checkbox>
  <Checkbox checked size="extra">
    Размер extra
  </Checkbox>
</Gapped>;
```

#### Состояния

У чекбоксов есть несколько состояний

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
  <Checkbox checked disabled>
    в отключенном состоянии
  </Checkbox>
  <Checkbox checked isInvalid>
    в состоянии ошибки
  </Checkbox>
  <Checkbox checked isWaiting>
    в режиме ожидания
  </Checkbox>
  <Checkbox checked={checked} isWaiting={isWaiting} onChange={handleChange}>
    действие после ожидания
  </Checkbox>
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
  <Checkbox checked={checked} onChange={handleChange}>
    Первые 3 попытки будут проигнорированы
  </Checkbox>
  <small>Текущее количество попыток: {tryCount}</small>
</Gapped>;
```
