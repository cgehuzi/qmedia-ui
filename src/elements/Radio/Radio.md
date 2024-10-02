Базовый пример

```js
import { Gapped } from '../Gapped';
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
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <Radio checked value="value">
    children
  </Radio>
  <Radio checked value="value" />
</Gapped>;
```

#### Размеры

```js
import { Gapped } from '../Gapped';

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
import { Gapped } from '../Gapped';

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
import { Gapped } from '../Gapped';

const [tryCount, setTryCount] = React.useState(0);
const [value, setValue] = React.useState('1');

const handleChange = (e) => {
  setTryCount(tryCount + 1);
  if (tryCount < 3) return;
  setValue(e.target.value);
};

<Gapped isVertical>
  <strong>Первые 3 попытки будут проигнорированы</strong>
  <Radio checked={value === '1'} value="1" onChange={handleChange}>
    1 вариант
  </Radio>
  <Radio checked={value === '2'} value="2" onChange={handleChange}>
    2 вариант
  </Radio>
  <small>Текущее количество попыток: {tryCount}</small>
</Gapped>;
```
