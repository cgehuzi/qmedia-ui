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
import { Gapped } from '../../components/Gapped';

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
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <CheckboxSmart checked value="Значение value">
    Значение children
  </CheckboxSmart>
  <CheckboxSmart checked value="Значение value" />
</Gapped>;
```

#### Цвета

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <CheckboxSmart color="grey" checked>
    <CheckboxSmart.Title>Цвет grey</CheckboxSmart.Title>
  </CheckboxSmart>
  <CheckboxSmart color="first" checked>
    <CheckboxSmart.Title>Цвет first</CheckboxSmart.Title>
    <CheckboxSmart.Caption> Цвет по умолчанию</CheckboxSmart.Caption>
  </CheckboxSmart>
  <CheckboxSmart color="second" checked>
    <CheckboxSmart.Title>Цвет second</CheckboxSmart.Title>
  </CheckboxSmart>
  <CheckboxSmart color="third" checked>
    <CheckboxSmart.Title>Цвет third</CheckboxSmart.Title>
  </CheckboxSmart>
  <CheckboxSmart color="success" checked>
    <CheckboxSmart.Title>Цвет success</CheckboxSmart.Title>
  </CheckboxSmart>
  <CheckboxSmart color="error" checked>
    <CheckboxSmart.Title>Цвет error</CheckboxSmart.Title>
  </CheckboxSmart>
</Gapped>;
```

#### Размеры

```js
import { Gapped } from '../../components/Gapped';

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
import { Gapped } from '../../components/Gapped';

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

Компонент поддерживает все стандарные обработчики нативного `input`. Но есть исключения...

##### onChange

Этот обработчик не только вызывает коллбэк, но и требует явно передать итоговое значение `checked`.

```js
import { Gapped } from '../../components/Gapped';

const [tryCount, setTruyCount] = React.useState(0);

const handleChange = (e) => {
  setTruyCount(tryCount + 1);
  if (tryCount < 5) return false;
  return e.target.checked;
};

<Gapped isVertical>
  <CheckboxSmart onChange={handleChange}>
    <CheckboxSmart.Title>Первые 5 попыток будут проигнорированы</CheckboxSmart.Title>
    <CheckboxSmart.Caption>Текущее количество попыток: {tryCount}</CheckboxSmart.Caption>
  </CheckboxSmart>
</Gapped>;
```
