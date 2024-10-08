Базовый пример

```js
<CheckboxSmart>
  <CheckboxSmart.Title>Обычный чекбокс</CheckboxSmart.Title>
  <CheckboxSmart.Caption>С коротким описанием</CheckboxSmart.Caption>
</CheckboxSmart>
```

#### Дочерние компонтенты

Для использования в пределах `children` доступны 2 дочерних компонента:

1. `CheckboxSmart.Title` – заголовок
2. `CheckboxSmart.Caption` – описание

Оба имеют параметр `html` для передачи на рендер HTML-контента в виде строки.

```js
import { Gapped } from '../Gapped';

<Gapped justify="stretch">
  <CheckboxSmart checked>Без дочерних элементов</CheckboxSmart>

  <Gapped isVertical align="stretch">
    <CheckboxSmart checked>
      <CheckboxSmart.Title>С children-заголовком</CheckboxSmart.Title>
    </CheckboxSmart>
    <CheckboxSmart checked>
      <CheckboxSmart.Title>С children-заголовком</CheckboxSmart.Title>
      <CheckboxSmart.Caption>
        И небольшим children-описанием со <a href="#">ссылкой</a>
      </CheckboxSmart.Caption>
    </CheckboxSmart>
  </Gapped>

  <Gapped isVertical align="stretch">
    <CheckboxSmart checked>
      <CheckboxSmart.Title html="С html-заголовком" />
    </CheckboxSmart>
    <CheckboxSmart checked>
      <CheckboxSmart.Title html="С html-заголовком" />
      <CheckboxSmart.Caption html="И небольшим html-описанием со <a href='#'>ссылкой</a>" />
    </CheckboxSmart>
  </Gapped>
</Gapped>;
```

#### Контент

На внутренне содержимое компонента могут повлиять 2 параметра.

1. `children` – все потомки попадут в область справа от чекбокса
2. `value` – если children пустой

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <CheckboxSmart checked value="value">
    children
  </CheckboxSmart>
  <CheckboxSmart checked value="value" />
</Gapped>;
```

#### Размеры

```js
import { Gapped } from '../Gapped';

<Gapped isVertical>
  <CheckboxSmart size="micro" checked>
    <CheckboxSmart.Title>Размер micro</CheckboxSmart.Title>
    <CheckboxSmart.Caption> Вот так выглядит описание</CheckboxSmart.Caption>
  </CheckboxSmart>

  <CheckboxSmart size="small" checked>
    <CheckboxSmart.Title>Размер small</CheckboxSmart.Title>
    <CheckboxSmart.Caption> Вот так выглядит описание</CheckboxSmart.Caption>
  </CheckboxSmart>

  <CheckboxSmart size="base" checked>
    <CheckboxSmart.Title>Размер base</CheckboxSmart.Title>
    <CheckboxSmart.Caption> Размер по умолчанию</CheckboxSmart.Caption>
  </CheckboxSmart>

  <CheckboxSmart size="large" checked>
    <CheckboxSmart.Title>Размер large</CheckboxSmart.Title>
    <CheckboxSmart.Caption> Вот так выглядит описание</CheckboxSmart.Caption>
  </CheckboxSmart>

  <CheckboxSmart size="extra" checked>
    <CheckboxSmart.Title>Размер extra</CheckboxSmart.Title>
    <CheckboxSmart.Caption> Вот так выглядит описание</CheckboxSmart.Caption>
  </CheckboxSmart>
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
  <CheckboxSmart checked disabled>
    <CheckboxSmart.Title>disabled</CheckboxSmart.Title>
    <CheckboxSmart.Caption>в отключенном состоянии</CheckboxSmart.Caption>
  </CheckboxSmart>

  <CheckboxSmart checked isInvalid>
    <CheckboxSmart.Title>isInvalid</CheckboxSmart.Title>
    <CheckboxSmart.Caption>в состоянии ошибки</CheckboxSmart.Caption>
  </CheckboxSmart>

  <CheckboxSmart checked isWaiting>
    <CheckboxSmart.Title>isWaiting</CheckboxSmart.Title>
    <CheckboxSmart.Caption>в режиме ожидания</CheckboxSmart.Caption>
  </CheckboxSmart>

  <CheckboxSmart checked={checked} isWaiting={isWaiting} onChange={handleChange}>
    <CheckboxSmart.Title>Нажми на меня</CheckboxSmart.Title>
    <CheckboxSmart.Caption>действие после ожидания</CheckboxSmart.Caption>
  </CheckboxSmart>
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
  <CheckboxSmart checked={checked} onChange={handleChange}>
    <CheckboxSmart.Title>Первые 3 попытки будут проигнорированы</CheckboxSmart.Title>
    <CheckboxSmart.Caption>Текущее количество попыток: {tryCount}</CheckboxSmart.Caption>
  </CheckboxSmart>
</Gapped>;
```
