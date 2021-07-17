# ProxyBuilder
## Description

ProxyBuilder is a typescript builder that uses typing to suggest and control available input and output properties on a builder class data.

## Installation

WIP

## Usage

```typescript
import { Builder, IProxyBuilder, ProxyBuilder } from "proxybuilder";

interface IPricesInput {
    base: number;
    tax: number;
    additionalFee: number;
}

interface IPricesOutput {
    net: number;
    gross: number;
}

class InnerLogic extends Builder<IPricesInput, IPricesOutput> {
    public data: IPricesInput;

    constructor() {
        super();
        this.data = {
            base: 0,
            tax: 0,
            additionalFee: 0,
        }
    }

    public build(): IPricesOutput {
        return {
            net: this.data.base + this.data.additionalFee,
            gross: this.data.base + this.data.tax + this.data.additionalFee,
        }
    }
}

const proxyBuilder: IProxyBuilder = new ProxyBuilder(InnerLogic);

const result: IPricesOutput = proxyBuilder
    .create<IPricesInput, IPricesOutput>()
    .base(2210)
    .tax(22)
    .additionalFee(10)
    .build();

console.log(result);
// { net: 2220, gross: 2242 }
```

## Running demo

WIP
