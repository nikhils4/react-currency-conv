# react-currency-conv

React component for currency conversion. Supports fetching latest and historical currency exchange rate based on the input date alongwith specific precision.

## Changes

## v1.1.0:

- Update documentation
- Minor bug fixes

## Installation

```
npm install react-currency-conv --save
```

## Integration

You can get the converted value as the output of the react component and style it according to your preference.
- from: Initial currency
- to: Target currency
- value: The amount that you want to get converted

```javascript
import React from 'react';
import CurrencyConverter from 'react-currency-conv';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <CurrencyConverter from={'USD'} to={'CAD'} value={29}/>
      </div>
    );
  }
}
```

## Precision

Specify a specific precision:

```javascript
    // 2234.67 (default)
    <CurrencyConverter from={'USD'} to={'CAD'} value={29} precision={2}/>
```

```javascript
    // 78.2482
    <CurrencyConverter from={'USD'} to={'CAD'} value={29} precision={4}/>
```

## Date

To get the exchange rate value form :-

```javascript
	// NOTE: The date should be in `YYYY-MM-DD` format
    <CurrencyConverter from={'USD'} to={'CAD'} value={29} date={'2010-12-22'}/>
```

All other attributes are applied normally to the element. For example, you can integrate bootstrap styling as:

```javascript
    <CurrencyConverter from={'USD'} to={'CAD'} value={29} className="form-control"/>
```


## Options

Option            | Default Value | Description
----------------- | ------------- | -----------------------------------------------------------------------------------------
date              | null          | Date you want to fetch exchange rate of (YYYY-MM-DD)
precision         | 2             | Number of digits after the decimal separator


## Supported currencies

Code      |
----------|
INR       |             
IDR       |             
ILS       |            
MXN       |            
USD       |             
ZAR       |             
NZD       |            
NOK       |             
CNY       |             
BGN       |             
TRY       |             
PLN       |             
SGD       |             
CHF       |
THB       |             
JPY       |             
HRK       |             
RUB       |             
BRL       |             
CAD       |             
HKD       |             
ISK       |            
PHP       |            
DKK       |             
HUF       |             
CZK       |            
RON       |             
SEK       |             
AUD       |             
EUR       |             
MYR       |             
KRW       |             
GBP       |         
