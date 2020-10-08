import React from 'react';

export default class CurrencyConverter extends React.Component {
    constructor(props) {
        super(props);
        if (props.from && props.to && props.value) {
            this.state = {
                from: props.from.toUpperCase(),
                to: props.to.toUpperCase(),
                value: props.value,
                date: props.date ? props.date : 'latest',
                convertedValue: null,
                precision: props.precision ? (props.precision > 0 ? props.precision : 2) : 2
            }
        } else {
            throw new Error('Enter valid value as props');
        }
    }

    componentDidMount() {
        const codes = ['CAD', 'HKD', 'ISK', 'PHP', 'DKK', 'HUF', 'CZK', 'AUD', 'RON', 'SEK', 'IDR', 'INR', 'BRL', 'RUB', 'HRK', 'JPY', 'THB', 'CHF', 'SGD', 'PLN', 'BGN', 'TRY', 'CNY', 'NOK', 'NZD', 'ZAR', 'USD', 'MXN', 'ILS', 'GBP', 'KRW', 'MYR', 'EUR'];
        if (!(codes.includes(this.state.from) && codes.includes(this.state.to))) {
            throw new Error(`Country code is not supprted, supported country codes are: ${codes}`);
        } else if (typeof this.state.value !== "number") {
            throw new Error(`Input value of exchange is not of type number`);
        } else {
            fetch(`https://api.exchangeratesapi.io/${this.state.date}?base=${this.state.from}`, {
                type: 'GET'
            })
                .then(data => data.json())
                .then(res => {
                    if (res.error) {
                        throw new Error(res.error)
                    } else {
                        let value = this.state.value * res.rates[this.state.to];
                        this.setState({
                            convertedValue: value.toFixed(this.state.precision)
                        })
                    }
                })
                .catch(err => {
                    throw new Error(err)
                })
        }
    }

    render() {
        return (
            <div>{this.state.convertedValue}</div>
        )
    }
}