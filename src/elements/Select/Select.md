Базовый пример

```js
<Select value="price_asc">
  <option value="default">По популярности</option>
  <option value="price_asc">По возрастанию цены</option>
  <option value="price_desc">По убыванию цены</option>
</Select>
```

#### Плейсхолдер

Селекту можно задать `placeholder`.

```js
<Select placeholder="Выберите сортировку">
  <option value="">Не выбрана</option>
  <option value="default">По популярности</option>
  <option value="price_asc">По возрастанию цены</option>
  <option value="price_desc">По убыванию цены</option>
</Select>
```

#### Иконка

Селекту можно задать feather-иконку. [Feather](https://feathericons.com/) – библиотека интерфейсных SVG-иконок.

Иконка будет находиться слева от текста.

```js
<Select defaultValue="price_asc" feather="bar-chart">
  <option value="">Не выбрана</option>
  <option value="default">По популярности</option>
  <option value="price_asc">По возрастанию цены</option>
  <option value="price_desc">По убыванию цены</option>
</Select>
```

#### Размер

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <Select placeholder="Размер micro" size="micro" />
  <Select placeholder="Размер small" size="small" />
  <Select placeholder="Размер base" />
  <Select placeholder="Размер large" size="large" />
  <Select placeholder="Размер extra" size="extra" />
</Gapped>;
```

#### Состояния

У селектов есть несколько состояний

```js
import { Gapped } from '../../components/Gapped';

const [isWaiting, setIsWaiting] = React.useState(false);
const [isInvalid, setIsInvalid] = React.useState(false);
const [feather, setFeather] = React.useState('help-circle');

const checkValue = (value) => {
  if (!value) return;

  // имитация асинхронного запроса
  setIsWaiting(true);
  setTimeout(() => {
    if (value !== '6') {
      setIsInvalid(true);
      setFeather('x');
    } else {
      setIsInvalid(false);
      setFeather('check');
    }

    setIsWaiting(false);
  }, 3000);
};

<Gapped align="stretch" isVertical>
  <Select disabled>
    <option>в отключенном состоянии</option>
  </Select>
  <Select isInvalid>
    <option>в состоянии ошибки</option>
  </Select>
  <Select isWaiting>
    <option>в режиме ожидания</option>
  </Select>
  <Select
    feather={feather}
    placeholder="2 + 2 * 2"
    isWaiting={isWaiting}
    isInvalid={isInvalid}
    onChange={(e) => {
      const { value } = e.target;
      setIsInvalid(false);
      setFeather(value ? 'corner-down-left' : 'help-circle');
      checkValue(value);
      return value;
    }}
  >
    <option value="">Не знаю</option>
    <option>8</option>
    <option>6</option>
  </Select>
</Gapped>;
```

#### Обработка событий

Компонент поддерживает все стандарные обработчики нативного `input`. Но есть исключения...

##### onChange

Этот обработчик не только вызывает коллбэк, но и требует явно передать итоговое значение `value`.

```js
const removeJo = (value) => value.replaceAll('ё', 'е').replaceAll('Ё', 'Е');
const [value, setValue] = React.useState('');

<Select
  placeholder="Никаких букв ё!"
  value={value}
  onChange={(e) => {
    setValue(removeJo(e.target.value));
  }}
>
  <option value="">Не участвую в этом</option>
  <option>Ежик</option>
  <option>Елка</option>
  <option>Ёжик</option>
  <option>Ёлка</option>
  <option>Все ясно, е мое!</option>
</Select>;
```
