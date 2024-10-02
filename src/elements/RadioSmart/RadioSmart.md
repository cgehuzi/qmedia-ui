Базовый пример

```js
import { Gapped } from '../Gapped';
const [value, setValue] = React.useState('');

<Gapped>
  <RadioSmart checked={value === 'cash'} onChange={() => setValue('cash')}>
    <RadioSmart.Title>Оплата при получении</RadioSmart.Title>
    <RadioSmart.Caption>Ниличными или картой</RadioSmart.Caption>
  </RadioSmart>
  <RadioSmart checked={value === 'online'} onChange={() => setValue('online')}>
    <RadioSmart.Title>Оплата онлайн</RadioSmart.Title>
    <RadioSmart.Caption>
      С помощью сервиса <a href="#">bepaid</a>
    </RadioSmart.Caption>
  </RadioSmart>
</Gapped>;
```

#### Дочерние компонтенты

Для использования в пределах `children` доступны 2 дочерних компонента:

1. `RadioSmart.Title` – заголовок
2. `RadioSmart.Caption` – описание

Оба имеют параметр `html` для передачи на рендер HTML-контента в виде строки.

```js
import { Gapped } from '../Gapped';

<Gapped justify="stretch">
  <RadioSmart checked>Без дочерних элементов</RadioSmart>

  <Gapped isVertical align="stretch">
    <RadioSmart checked>
      <RadioSmart.Title>С children-заголовком</RadioSmart.Title>
    </RadioSmart>
    <RadioSmart checked>
      <RadioSmart.Title>С children-заголовком</RadioSmart.Title>
      <RadioSmart.Caption>
        И небольшим children-описанием со <a href="#">ссылкой</a>
      </RadioSmart.Caption>
    </RadioSmart>
  </Gapped>

  <Gapped isVertical align="stretch">
    <RadioSmart checked>
      <RadioSmart.Title html="С html-заголовком" />
    </RadioSmart>
    <RadioSmart checked>
      <RadioSmart.Title html="С html-заголовком" />
      <RadioSmart.Caption html="И небольшим html-описанием со <a href='#'>ссылкой</a>" />
    </RadioSmart>
  </Gapped>
</Gapped>;
```

#### Контент

На внутренне содержимое компонента могут повлиять 2 параметра.

1. `children` – все потомки попадут в область справа от радио-кнопки
2. `value` – если children пустой

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <RadioSmart checked value="value">
    children
  </RadioSmart>
  <RadioSmart checked value="value" />
</Gapped>;
```

#### Размеры

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <RadioSmart size="micro" checked>
    <RadioSmart.Title>Размер micro</RadioSmart.Title>
    <RadioSmart.Caption> Вот так выглядит описание</RadioSmart.Caption>
  </RadioSmart>

  <RadioSmart size="small" checked>
    <RadioSmart.Title>Размер small</RadioSmart.Title>
    <RadioSmart.Caption> Вот так выглядит описание</RadioSmart.Caption>
  </RadioSmart>

  <RadioSmart size="base" checked>
    <RadioSmart.Title>Размер base</RadioSmart.Title>
    <RadioSmart.Caption> Размер по умолчанию</RadioSmart.Caption>
  </RadioSmart>

  <RadioSmart size="large" checked>
    <RadioSmart.Title>Размер large</RadioSmart.Title>
    <RadioSmart.Caption> Вот так выглядит описание</RadioSmart.Caption>
  </RadioSmart>

  <RadioSmart size="extra" checked>
    <RadioSmart.Title>Размер extra</RadioSmart.Title>
    <RadioSmart.Caption> Вот так выглядит описание</RadioSmart.Caption>
  </RadioSmart>
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
    setChecked(!checked);
  }, 3000);
};

<Gapped isVertical>
  <RadioSmart checked disabled>
    <RadioSmart.Title>disabled</RadioSmart.Title>
    <RadioSmart.Caption>в отключенном состоянии</RadioSmart.Caption>
  </RadioSmart>

  <RadioSmart checked isInvalid>
    <RadioSmart.Title>isInvalid</RadioSmart.Title>
    <RadioSmart.Caption>в состоянии ошибки</RadioSmart.Caption>
  </RadioSmart>

  <RadioSmart checked isWaiting>
    <RadioSmart.Title>isWaiting</RadioSmart.Title>
    <RadioSmart.Caption>в режиме ожидания</RadioSmart.Caption>
  </RadioSmart>

  <RadioSmart checked={checked} isWaiting={isWaiting} onChange={handleChange}>
    <RadioSmart.Title>Нажми на меня</RadioSmart.Title>
    <RadioSmart.Caption>действие после ожидания</RadioSmart.Caption>
  </RadioSmart>
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
  <RadioSmart checked={value === '1'} value="1" onChange={handleChange}>
    1 вариант
  </RadioSmart>
  <RadioSmart checked={value === '2'} value="2" onChange={handleChange}>
    2 вариант
  </RadioSmart>
  <small>Текущее количество попыток: {tryCount}</small>
</Gapped>;
```
