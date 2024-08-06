Базовый пример

```js
<RatingInput />
```

#### Размер

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <RatingInput value={3} size="micro" />
  <RatingInput value={3} size="small" />
  <RatingInput value={3} />
  <RatingInput value={3} size="large" />
  <RatingInput value={3} size="extra" />
</Gapped>;
```

#### Количество звёзд

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <RatingInput value={3} starsCount={3} />
  <RatingInput value={3} />
  <RatingInput value={3} starsCount={7} />
  <RatingInput value={3} starsCount={10} />
</Gapped>;
```

#### Дробные значения

Для компонента возможно включить заливку звёзд, исходя из дробных значений `value`. Для этого предусмотрен параметр `allowFraction`.

Для `readonly` компонентов будет отображаться точное значение заливки, например 2.3, иначе для выбора будет доступны значения, кратные 0.5.

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <RatingInput value={2.3} />
  <RatingInput value={2.3} allowFraction />
  <RatingInput value={2.3} allowFraction readonly />
</Gapped>;
```

#### Состояния

У инпута есть несколько состояний

```js
import { Gapped } from '../../components/Gapped';

<Gapped align="stretch" isVertical>
  <Gapped align="center">
    <RatingInput readonly />
    <span>только для чтения</span>
  </Gapped>

  <Gapped align="center">
    <RatingInput disabled />
    <span>в отключённом состоянии</span>
  </Gapped>

  <Gapped align="center">
    <RatingInput isInvalid />
    <span>в состоянии ошибки</span>
  </Gapped>

  <Gapped align="center">
    <RatingInput isWaiting />
    <span>в режиме ожидания</span>
  </Gapped>
</Gapped>;
```

#### Обработка событий

##### onChange

Этот обработчик принимает в себя цифровое значение текущего клика по звезде.

```js
import { Gapped } from '../../components/Gapped';
const [value, setValue] = React.useState(4);

<Gapped align="center">
  <RatingInput value={value} onChange={setValue} />
  <span>{value} / 5</span>
</Gapped>;
```
