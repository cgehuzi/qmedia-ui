Базовый пример

```js
import { Gapped } from '../../components/Gapped';
const [value, setValue] = React.useState('');

<Gapped isVertical>
  <Radio checked={value === 'cash'} onChange={() => setValue('cash')}>
    Оплата при получении
  </Radio>
  <Radio checked={value === 'online'} onChange={() => setValue('online')}>
    Оплата онлайн
  </Radio>
</Gapped>;
```

#### Контент

На внутренне содержимое компонента могут повлиять 2 параметра.

1. `children` – все потомки попадут в область справа от радио-кнопки
2. `value` – если children пустой

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <Radio checked value="value">
    children
  </Radio>
  <Radio checked value="value" />
</Gapped>;
```

#### Цвета

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <Radio color="grey" checked>
    Цвет grey
  </Radio>
  <Radio color="first" checked>
    Цвет first (по умолчанию)
  </Radio>
  <Radio color="second" checked>
    Цвет second
  </Radio>
  <Radio color="third" checked>
    Цвет third
  </Radio>
  <Radio color="success" checked>
    Цвет success
  </Radio>
  <Radio color="error" checked>
    Цвет error
  </Radio>
</Gapped>;
```

#### Размеры

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <Radio checked size="micro">
    Размер micro
  </Radio>
  <Radio checked size="small">
    Размер small
  </Radio>
  <Radio checked>Размер base (по умолчанию)</Radio>
  <Radio checked size="large">
    Размер large
  </Radio>
  <Radio checked size="extra">
    Размер extra
  </Radio>
</Gapped>;
```

#### Состояния

У радио-кнопок есть несколько состояний

```js
import { Gapped } from '../../components/Gapped';

const [isWaiting, setIsWaiting] = React.useState(false);
const [checked, setChecked] = React.useState(false);

const handleChange = (e) => {
  setIsWaiting(true);
  setTimeout(() => {
    setIsWaiting(false);
    setChecked(true);
  }, 3000);
};

<Gapped isVertical>
  <Radio checked disabled>
    в отключенном состоянии
  </Radio>
  <Radio checked isInvalid>
    в состоянии ошибки
  </Radio>
  <Radio checked isWaiting>
    в режиме ожидания
  </Radio>
  <Radio checked={checked} isWaiting={isWaiting} onChange={handleChange}>
    действие после ожидания
  </Radio>
</Gapped>;
```

#### Обработка событий

Компонент поддерживает все стандарные обработчики нативного `input`.

##### onChange

```js
import { Gapped } from '../../components/Gapped';

const [tryCount, setTryCount] = React.useState(0);
const [checked, setChecked] = React.useState(false);

const handleChange = (e) => {
  setTryCount(tryCount + 1);
  if (tryCount < 3) return;
  setChecked(true);
};

<Gapped isVertical>
  <Radio checked={checked} onChange={handleChange}>
    Первые 3 попытки будут проигнорированы
  </Radio>
  <small>Текущее количество попыток: {tryCount}</small>
</Gapped>;
```
