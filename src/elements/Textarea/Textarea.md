Базовый пример

```js
<Textarea placeholder="Ваше мнение важно для нас" />
```

#### Количество символов

Для отображения текущего количества символов предусмотрен флаг `showCounter`. Ограничить количество символов можно стандартным параметром `maxLength`.

При установке ограничения по умолчанию счётчик выводится. Чтобы его скрыть, нужно явно передать `showCounter={false}`

```js
import { Gapped } from '../../components/Gapped';

<Gapped justify="stretch">
  <Textarea showCounter placeholder="Простой счётчик" />
  <Textarea maxLength={10} placeholder="Количество ограничено" />
  <Textarea
    maxLength={10}
    showCounter={false}
    placeholder="Количество ограничено, но счётчик отключён"
  />
</Gapped>;
```

#### Размер

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <Textarea value="Размер micro" size="micro" />
  <Textarea value="Размер small" size="small" />
  <Textarea value="Размер base" />
  <Textarea value="Размер large" size="large" />
  <Textarea value="Размер extra" size="extra" />
</Gapped>;
```

#### Состояния

У инпутов есть несколько состояний

```js
import { Gapped } from '../../components/Gapped';

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
  <Textarea value="в отключенном состоянии" disabled />
  <Textarea value="в состоянии ошибки" isInvalid />
  <Textarea value="в режиме ожидания" isWaiting />
  <Textarea
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
    }}
  />
</Gapped>;
```

#### Обработка событий

Компонент поддерживает все стандарные обработчики нативного `textarea`.

##### onChange

```js
const removeJo = (value) => value.replaceAll('ё', 'е').replaceAll('Ё', 'Е');
const [value, setValue] = React.useState('');

<Textarea
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

<Textarea
  placeholder="Только цифры"
  value={value}
  onChange={(e) => {
    setValue(getOnlyNumbers(e.target.value));
  }}
/>;
