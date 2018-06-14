# React multi labels

[![Build Status](https://travis-ci.org/ematipico/react-multi-labels.svg?branch=master)](https://travis-ci.org/ematipico/react-multi-labels)
[![devDependencies Status](https://david-dm.org/ematipico/react-multi-labels/dev-status.svg)](https://david-dm.org/ematipico/react-multi-labels?type=dev)
[![Coverage Status](https://coveralls.io/repos/github/ematipico/react-multi-labels/badge.svg)](https://coveralls.io/github/ematipico/react-multi-labels)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fematipico%2Freact-multi-labels.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fematipico%2Freact-multi-labels?ref=badge_shield)

Provide static labels to your application, whichever language you want

## How to use it

React multi labels rely on the React `16.3.*`, this means that if you use an earlier version, it won't work.

### Setup

Fist of all you have to initialize the provider by giving it the default language of our labels and the labels themselves:

```js
import { LabelsProvider } from 'react-multi-labels';
import { App } from './app';
import React from 'react';
import { render } from 'react-dom';

const labels = {
    en_GB: {
        REMOVE: 'Remove',
        CREATE: 'Create',
        CHANGE: 'Change',
        EDIT: 'Edit'
    },
    it_IT: {
        REMOVE: 'Rimuovi',
        CREATE: 'Crea',
        CHANGE: 'Cambia',
        EDIT: 'Modifica'
    }
}

// 'en_GB' will be the first language
render(
    <LabelsProvider language={'en_GB'} labels={labels}>
        <App />
    </LabelsProvider>
    document.getElementById('app')
)
```

### Consuming

The library provides different high order components to consume your labels.

```js
import { Label } from 'react-multi-labels';

function Button() {
  return (
    <button>
      <Label text={'REMOVE'} />
    </button>
  );
}

// result will be <button>Remove</button> for 'en_GB'
// result will be <button>Rimuovi</button> for 'it_IT'
```

## API

* [Label](#label)
* [GetLabel](#getlabel)
* [GetLabels](#getlabels)
* [ChangeLanguage](#changelanguage)
* [ChangeLabels](#changelabels)

### Label

It simply returns the label that you want. It doesn't return any markup. Only text. If it doesn't exist, it will return `undefined`

### GetLabel

High Order Component to return the label, so you can provide it all your components

```js
import { GetLabels } from 'react-multi-labels';
import { Button } from './Button';
function Form() {
  return (
    <GetLabel text={'REMOVE'}>
      {label => {
        return <Button buttonLabel={label} />;
      }}
    </GetLabel>
  );
}
```

### GetLabels

Sometimes you need to retrieve multiple labels in one go. You can use this guy. It's an high order component that requires an array of the labels that you want and it returns an object, so you can identify your labels with their own name.

```js
import { GetLabels } from 'react-multi-labels';
import { Button } from './Button'
import React from 'react'

function Form () {
    return (
        <GetLabels list={['REMOVE', 'CREATE']}>
            {({ REMOVE, CREATE }) => {
                return (
                    <React.Fragment>
                        <Button buttonLabel={CREATE} />
                        <Button buttonLabel={REMOVE} />
                    </React.Fragment>
                )
            }}
        </GetLabel>
    )
}
```

### ChangeLanguage

```js
import { GetLabels, ChangeLanguage } from 'react-multi-labels';
import { Button } from './Button';
import React from 'react';

function Form() {
  return (
    <GetLabels list={['REMOVE', 'CHANGE']}>
      {({ REMOVE, CHANGE }) => {
        return (
          <React.Fragment>
            <Button buttonLabel={REMOVE} />
            <ChangeLanguage>
              {changeLanguage => {
                <Button
                  buttonLabel={CHANGE}
                  onClick={() => changeLanguage('it_IT')}
                />;
              }}
            </ChangeLanguage>
          </React.Fragment>
        );
      }}
    </GetLabels>
  );
}
```

### ChangeLabels

```js
const LABELS = {
    en_GB: {
        LOGIN: 'Login'
        EMAIL: 'Email'
    }
};

const NEW_LABELS = {
    en_GB: {
        LOGIN: 'Fancy Login'
        EMAIL: 'Fancy Email'
    }
};


<LabelsProvider language="en_GB" labels={LABELS}>
  <React.Fragment>
    <GetLabels list={['LOGIN', 'EMAIL']}>
      {({ LOGIN, EMAIL }) => {
        return (
          <p>
            {LOGIN} - {EMAIL}
          </p>
        );
      }}
    </GetLabels>
    <ChangeLabels>
      {({ changeLabels }) => {
        return (
          <button onClick={() => changeLabels(newLabels)}>
            Click me!
          </button>
        );
      }}
    </ChangeLabels>
  </React.Fragment>
</LabelsProvider>
```


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fematipico%2Freact-multi-labels.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fematipico%2Freact-multi-labels?ref=badge_large)
