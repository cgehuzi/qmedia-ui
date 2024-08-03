Базовый пример

```js
<Link>Читать подробнее</Link>
```

#### Размеры

```js
import { Gapped } from '../../components/Gapped';

<Gapped align="center">
  <Link feather="home" size="micro">Размер micro</Link>
  <Link feather="home" size="small">Размер small</Link>
  <Link feather="home">Размер base</Link>
  <Link feather="home" size="large">Размер large</Link>
  <Link feather="home" size="extra">Размер extra</Link>
</Gapped>;
```

#### Подчёркивание текста

Текст может иметь разные подчёркиванияя.

```js
import { Gapped } from '../../components/Gapped';

<Gapped isWrap>
  <Link underline="none" href="." target="_blank">
    Без подчёркивания
  </Link>
  <Link underline="solid" href="." target="_blank">
    Перейти по ссылке
  </Link>
  <Link underline="dashed" href="." target="_blank">
    Показать все
  </Link>
</Gapped>;
```

#### Иконки

Ссылке можно задать feather-иконку. [Feather](https://feathericons.com/) – библиотека интерфейсных SVG-иконок.

Иконка может находиться как слева от текста, так и справа и даже в обоих позициях одновременно.

```js
import { Gapped } from '../../components/Gapped';

<Gapped isWrap>
  <Link feather="x">Закрыть</Link>
  <Link featherRight="x">Закрыть</Link>
  <Link feather="x" featherRight="x">
    Закрыть
  </Link>
</Gapped>;
```

#### Состояние ожидания

ссылка на время нахождения в состоянии ожидания отключается.

Если в ссылке есть иконка, на время ожидания иконка заменяется на спиннер, если иконки нет — ссылка начинает мигать. Когда иконки две — заменяется только левая.

```js
import { Gapped } from '../../components/Gapped';

const [isWaiting, setIsWaiting] = React.useState(false);

const handleWaiting = () => {
  if (isWaiting) return;

  setIsWaiting(true);
  setTimeout(() => setIsWaiting(false), 3000);
};

<Gapped isWrap>
  <Link isButton isWaiting={isWaiting} onClick={handleWaiting}>
    Удалить
  </Link>
  <Link isButton isWaiting={isWaiting} feather="x" onClick={handleWaiting}>
    Удалить
  </Link>
  <Link isButton isWaiting={isWaiting} featherRight="x" onClick={handleWaiting}>
    Удалить
  </Link>
  <Link isButton isWaiting={isWaiting} feather="x" featherRight="x" onClick={handleWaiting}>
    Удалить
  </Link>
  <Link isButton isWaiting={isWaiting} disabled={true} onClick={handleWaiting}>
    Удалить
  </Link>
</Gapped>;
```

#### Цвета

Ссылкам доступен полный набор цветов, предоставляемых дизайн-системой. Цвет задаётся параметром `color`. Значение – имя цвета из CSS-переменных дизайн-системы (без префикса `--color-`).

```js
import { Gapped } from '../../components/Gapped';
import { Button } from '../../elements/Button';

const [color, setColor] = React.useState('grey');

const ColorSwitcher = ({ colorName }) => {
  const isActive = colorName === color;

  return (
    <Button
      size="micro"
      color="grey-trans-10"
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
      <div>
        <Link color={`${color}`}>{color}</Link>
      </div>
      {color !== 'black' && color !== 'white' && (
        <>
          <div>
            <Link color={`${colorName}-10`}>{`${colorName}-10`}</Link>
          </div>
          <div>
            <Link color={`${colorName}-20`}>{`${colorName}-20`}</Link>
          </div>
          <div>
            <Link color={`${colorName}-30`}>{`${colorName}-30`}</Link>
          </div>
          <div>
            <Link color={`${colorName}-40`}>{`${colorName}-40`}</Link>
          </div>
          <div>
            <Link color={`${colorName}-50`}>{`${colorName}-50`}</Link>
          </div>
          <div>
            <Link color={`${colorName}-60`}>{`${colorName}-60`}</Link>
          </div>
          <div>
            <Link color={`${colorName}-70`}>{`${colorName}-70`}</Link>
          </div>
          <div>
            <Link color={`${colorName}-80`}>{`${colorName}-80`}</Link>
          </div>
          <div>
            <Link color={`${colorName}-90`}>{`${colorName}-90`}</Link>
          </div>
        </>
      )}
    </Gapped>
  );
};

<Gapped align="stretch" gap={20} isVertical>
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
