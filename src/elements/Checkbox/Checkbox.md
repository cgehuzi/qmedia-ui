Базовый пример

```js
<Checkbox>Обычный чекбокс</Checkbox>
```

#### Контент

На внутренне содержимое компонента могут повлиять 2 параметра.

1. `children` – все потомки попадут в область справа от чекбокса
2. `value` – если children пустой

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <Checkbox value="Значение value">Значение children</Checkbox>
  <Checkbox value="Значение value" />
</Gapped>;
```

#### Цвета

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <Checkbox color="grey" checked>
    Цвет grey
  </Checkbox>
  <Checkbox color="first" checked>
    Цвет first (по умолчанию)
  </Checkbox>
  <Checkbox color="second" checked>
    Цвет second
  </Checkbox>
  <Checkbox color="third" checked>
    Цвет third
  </Checkbox>
  <Checkbox color="success" checked>
    Цвет success
  </Checkbox>
  <Checkbox color="error" checked>
    Цвет error
  </Checkbox>
</Gapped>;
```

#### Размеры

```js
import { Gapped } from '../../components/Gapped';

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
import { Gapped } from '../../components/Gapped';

const [isWaiting, setIsWaiting] = React.useState(false);
const [checked, setChecked] = React.useState(false);

const handleWaiting = (e) => {
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
  <Checkbox checked={checked} isWaiting={isWaiting} onChange={handleWaiting}>
    действие после ожидания
  </Checkbox>
</Gapped>;
```
