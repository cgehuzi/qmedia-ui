Базовый пример

```js
import { Button } from '../../elements/Button';

<Gapped>
  <Button size="micro">1</Button>
  <Button size="small">2</Button>
  <Button>3</Button>
  <Button size="large">4</Button>
  <Button size="extra">5</Button>
</Gapped>;
```

#### Направление и выравнивание

```js
import { Button } from '../../elements/Button';

const [isVertical, setIsVertical] = React.useState(false);
const [align, setAlign] = React.useState('start');
const [justify, setJustify] = React.useState('start');

const VerticalSwitcher = ({ value }) => {
  const isActive = isVertical === value;

  return (
    <Button
      size="micro"
      color="grey-trans-10"
      variant={isActive ? 'filled' : 'outline'}
      onClick={() => {
        setIsVertical(value);
      }}
    >
      {value ? 'isVertical: true' : 'isVertical: false'}
    </Button>
  );
};

const JustifySwitcher = ({ value }) => {
  const isActive = justify === value;

  return (
    <Button
      size="micro"
      color="grey-trans-10"
      variant={isActive ? 'filled' : 'outline'}
      onClick={() => {
        setJustify(value);
      }}
    >
      justify: {value}
    </Button>
  );
};

const AlignSwitcher = ({ value }) => {
  const isActive = align === value;

  return (
    <Button
      size="micro"
      color="grey-trans-10"
      variant={isActive ? 'filled' : 'outline'}
      onClick={() => {
        setAlign(value);
      }}
    >
      align: {value}
    </Button>
  );
};

<Gapped align="stretch" gap={20} isVertical>
  <Gapped align="center">
    <VerticalSwitcher value={false} />
    <VerticalSwitcher value={true} />
  </Gapped>
  <Gapped align="center">
    <AlignSwitcher value="start" />
    <AlignSwitcher value="end" />
    <AlignSwitcher value="center" />
    <AlignSwitcher value="baseline" />
    <AlignSwitcher value="stretch" />
  </Gapped>

  <Gapped align="center">
    <JustifySwitcher value="start" />
    <JustifySwitcher value="end" />
    <JustifySwitcher value="center" />
    <JustifySwitcher value="stretch" />
  </Gapped>

  <Gapped isVertical={isVertical} align={align} justify={justify}>
    <Button size="micro">1</Button>
    <Button size="small">2</Button>
    <Button>3</Button>
    <Button size="large">4</Button>
    <Button size="extra">5</Button>
  </Gapped>
</Gapped>;
```
