https://www.solidjs.com/tutorial/introduction_basics

solid:
```jsx
import { render } from 'solid-js/web';

const props = {};

function App() {
  const show = Math.random() > 0.5;
  return <div class={show ? 'show' : 'hid'} style={show ? {} : {}} {...props} data-show={show}><HelloWorld /></div>;
}

function HelloWorld() {
  return <div>Hello World!</div>;
}

render(() => <><App /><App /></>, document.getElementById('app'))

```

output:
```jsx
import { template as _$template } from "solid-js/web";
import { style as _$style } from "solid-js/web";
import { effect as _$effect } from "solid-js/web";
import { insert as _$insert } from "solid-js/web";
import { createComponent as _$createComponent } from "solid-js/web";
import { setAttribute as _$setAttribute } from "solid-js/web";
import { spread as _$spread } from "solid-js/web";
import { className as _$className } from "solid-js/web";

const _tmpl$ = /*#__PURE__*/_$template(`<div></div>`, 2),
      _tmpl$2 = /*#__PURE__*/_$template(`<div>Hello World!</div>`, 2);

import { render } from 'solid-js/web';
const props = {};

function App() {
  const show = Math.random() > 0.5;
  return (() => {
    const _el$ = _tmpl$.cloneNode(true);

    _$className(_el$, show ? 'show' : 'hid');

    _$spread(_el$, props, false, true);

    _$setAttribute(_el$, "data-show", show);

    _$insert(_el$, _$createComponent(HelloWorld, {}));

    _$effect(_$p => _$style(_el$, show ? {} : {}, _$p));

    return _el$;
  })();
}

function HelloWorld() {
  return _tmpl$2.cloneNode(true);
}

render(() => [_$createComponent(App, {}), _$createComponent(App, {})], document.getElementById('app'));
```
