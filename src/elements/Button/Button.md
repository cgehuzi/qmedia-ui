Базовый пример

```js
<Button>Отправить заявку</Button>
```

#### Размеры

```js
import { Gapped } from '../../components/Gapped';

<Gapped align="center">
  <Button size="micro">Micro</Button>
  <Button size="small">Small</Button>
  <Button>Base</Button>
  <Button size="large">Large</Button>
  <Button size="extra">Extra</Button>
</Gapped>;
```

#### Варианты

Кнопки могут быть 3 вариантов отображения.

- `filled` – c полной заливкой цветом
- `outline` – с обводкой
- `transparent` – с прозрачным фоном

```js
import { Gapped } from '../../components/Gapped';

<Gapped isWrap>
  <Button variant="filled">filled</Button>
  <Button variant="outline">outline</Button>
  <Button variant="transparent">transparent</Button>
</Gapped>;
```

#### Подчёркивание текста

Текст внутри кнопки может быть подчёркнут.

```js
import { Gapped } from '../../components/Gapped';

<Gapped isWrap>
  <Button underline="none">Без подчёркивания</Button>
  <Button underline="solid">Читать подробнее</Button>
  <Button underline="dashed">Смотреть все</Button>
</Gapped>;
```

#### Иконки

Кнопке можно задать feather-иконку. [Feather](https://feathericons.com/) – библиотека интерфейсных SVG-иконок.

Иконка может находиться как слева от текста кнопки, так и справа и даже в обоих позициях одновременно.

```js
import { Gapped } from '../../components/Gapped';

<Gapped isWrap>
  <Button feather="x">Закрыть</Button>
  <Button featherRight="x">Закрыть</Button>
  <Button feather="x" featherRight="x">
    Закрыть
  </Button>
</Gapped>;
```

#### Ширина

По умолчанию ширина кнопки зависит от внутреннего контента. Также есть возможность сделать конопку во всю ширину с помощью параметра `isFullwidth`.

Если ширины родительского блока не хватает для отображения текста в кнопке, то текст будет обрезан с добавлением ... в конце.

```js
import { Gapped } from '../../components/Gapped';

<Gapped isVertical>
  <Button>Обычная кнопка</Button>
  <Button isFullwidth>Кнопка во всю ширину</Button>
  <div style={{ width: '220px' }}>
    <Button>Кнопка с длинным контентом</Button>
  </div>
</Gapped>;
```

#### Квадратные кнопки

По умолчанию размеры паддингов у кнопок заданы CSS-переменными (можно измененить при кастомизации) и являются неравномерными.

С помощью параметра `isSquare` их можно привести к единому виду, что обеспечит квадратное отображение кнопок.

```js
import { Gapped } from '../../components/Gapped';

<Gapped align="center">
  <Button size="micro" feather="home" isSquare />
  <Button size="small" feather="home" isSquare />
  <Button size="base" feather="home" isSquare />
  <Button size="large" feather="home" isSquare />
  <Button size="extra" feather="home" isSquare />
</Gapped>;
```

#### Состояние ожидания

Кнопка на время нахождения в состоянии ожидания отключается.

Если в кнопке есть иконка, на время ожидания иконка заменяется на спиннер, если иконки нет — кнопка начинает мигать. Когда иконки две — заменяется только левая.

```js
import { Gapped } from '../../components/Gapped';

const [isWaiting, setIsWaiting] = React.useState(false);

const handleWaiting = () => {
  if (isWaiting) return;

  setIsWaiting(true);
  setTimeout(() => setIsWaiting(false), 3000);
};

<Gapped isWrap>
  <Button size="small" isWaiting={isWaiting} onClick={handleWaiting}>
    Удалить
  </Button>
  <Button size="small" isWaiting={isWaiting} feather="x" onClick={handleWaiting}>
    Удалить
  </Button>
  <Button size="small" isWaiting={isWaiting} featherRight="x" onClick={handleWaiting}>
    Удалить
  </Button>
  <Button size="small" isWaiting={isWaiting} feather="x" featherRight="x" onClick={handleWaiting}>
    Удалить
  </Button>
  <Button size="small" isWaiting={isWaiting} disabled={true} onClick={handleWaiting}>
    Удалить
  </Button>
</Gapped>;
```

#### Цвета

Кнопкам доступен полный набор цветов, предоставляемых дизайн-системой. Цвет задаётся параметром `color`. Значение – имя цвета из CSS-переменных дизайн-системы (без префикса `--color-`).

Для цветов с постфиксами `-10`, `-20` и `-30` цвет текста соответствует CSS-переменной `--color-___-text`, задаваемой при кастомизации цветов дизайн-системы.

Для остальных постфиксов цвет текста соответственно:

- -black-xx : `#ffffff`
- -white-xx : `var(--body-text-color)`
- -trans-xx : `inherit`

```js
import { Gapped } from '../../components/Gapped';

const [variant, setVariant] = React.useState('filled');
const [color, setColor] = React.useState('grey');

const VariantSwitcher = ({ variantName }) => {
  const isActive = variantName === variant;

  return (
    <Button
      size="micro"
      color="grey-trans-10"
      variant={isActive ? 'filled' : 'outline'}
      onClick={() => {
        setVariant(variantName);
      }}
    >
      {variantName}
    </Button>
  );
};

const ColorSwitcher = ({ colorName }) => {
  const isActive = colorName === color;

  return (
    <Button
      size="micro"
      variant={isActive ? 'filled' : 'outline'}
      onClick={() => {
        setColor(colorName);
      }}
    >
      {colorName}
    </Button>
  );
};

const ColorGroup = ({ colorName }) => {
  return (
    <Gapped align="stretch" isVertical>
      <Button variant={variant} color={`${color}`}>
        {color}
      </Button>
      {color !== 'black' && color !== 'white' && (
        <>
          <Button variant={variant} color={`${colorName}-10`}>{`${colorName}-10`}</Button>
          <Button variant={variant} color={`${colorName}-20`}>{`${colorName}-20`}</Button>
          <Button variant={variant} color={`${colorName}-30`}>{`${colorName}-30`}</Button>
          <Button variant={variant} color={`${colorName}-40`}>{`${colorName}-40`}</Button>
          <Button variant={variant} color={`${colorName}-50`}>{`${colorName}-50`}</Button>
          <Button variant={variant} color={`${colorName}-60`}>{`${colorName}-60`}</Button>
          <Button variant={variant} color={`${colorName}-70`}>{`${colorName}-70`}</Button>
          <Button variant={variant} color={`${colorName}-80`}>{`${colorName}-80`}</Button>
          <Button variant={variant} color={`${colorName}-90`}>{`${colorName}-90`}</Button>
        </>
      )}
    </Gapped>
  );
};

<Gapped align="stretch" gap={20} isVertical>
  <Gapped align="center" justify="center">
    <VariantSwitcher variantName="filled" />
    <VariantSwitcher variantName="outline" />
    <VariantSwitcher variantName="transparent" />
  </Gapped>
  <Gapped align="center" justify="stretch">
    <ColorSwitcher colorName="grey" />
    <ColorSwitcher colorName="first" />
    <ColorSwitcher colorName="second" />
    <ColorSwitcher colorName="third" />
    <ColorSwitcher colorName="success" />
    <ColorSwitcher colorName="error" />
    <ColorSwitcher colorName="black" />
    <ColorSwitcher colorName="white" />
  </Gapped>

  <Gapped justify="stretch">
    <ColorGroup colorName={`${color}-black`} />
    <ColorGroup colorName={`${color}-white`} />
    <ColorGroup colorName={`${color}-trans`} />
  </Gapped>
</Gapped>;
```
