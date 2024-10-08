Базовый пример

```js
<Input placeholder="Иванов Иван" />
```

#### Иконка

Инпуту можно задать feather-иконку. [Feather](https://feathericons.com/) – библиотека интерфейсных SVG-иконок.

Иконка будет находиться слева от текста.

```js
<Input feather="search" placeholder="Поиск по сайту..." />
```

#### Размер

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <Input value="Размер micro" size="micro" />
  <Input value="Размер small" size="small" />
  <Input value="Размер base" />
  <Input value="Размер large" size="large" />
  <Input value="Размер extra" size="extra" />
</Gapped>;
```

#### Состояния

У инпутов есть несколько состояний

```js
import { Gapped } from '../Gapped';

const [isWaiting, setIsWaiting] = React.useState(false);
const [isInvalid, setIsInvalid] = React.useState(false);
const [feather, setFeather] = React.useState('help-circle');

const checkValue = (e) => {
  const { value } = e.target;
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

const handleKeyDown = (e) => {
  if (e.key === 'Enter') {
    checkValue(e);
  }
};

<Gapped align="stretch" isVertical>
  <Input value="в отключенном состоянии" disabled />
  <Input value="в состоянии ошибки" isInvalid />
  <Input value="в режиме ожидания" isWaiting />
  <Input
    feather={feather}
    placeholder="2 + 2 * 2"
    isWaiting={isWaiting}
    isInvalid={isInvalid}
    onKeyDown={handleKeyDown}
    onBlur={checkValue}
    onChange={(e) => {
      const { value } = e.target;
      setIsInvalid(false);
      setFeather(value ? 'corner-down-left' : 'help-circle');
      return value;
    }}
  />
</Gapped>;
```

#### Обработка событий

Компонент поддерживает все стандарные обработчики нативного `input`.

##### onChange

```js
const removeJo = (value) => value.replaceAll('ё', 'е').replaceAll('Ё', 'Е');
const [value, setValue] = React.useState('');

<Input
  placeholder="Никаких букв ё!"
  value={value}
  onChange={(e) => {
    setValue(removeJo(e.target.value));
  }}
/>;
```

```js
const getOnlyNumbers = (value) => value.replaceAll(/\D/g, '');
const [value, setValue] = React.useState('');

<Input
  placeholder="Только цифры"
  value={value}
  onChange={(e) => {
    setValue(getOnlyNumbers(e.target.value));
  }}
/>;
```
