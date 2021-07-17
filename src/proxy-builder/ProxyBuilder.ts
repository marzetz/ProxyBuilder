import { IProxyBuilder } from "./IProxyBuilder";
import { IProxy } from "../proxy/IProxy";
import { IBuilder } from "../inner-builder/IBuilder";

export class ProxyBuilder<TInnerBuilder extends IBuilder<Record<string, any>, any>>
    implements IProxyBuilder {

    private readonly _baseInstance: TInnerBuilder;

    constructor(baseConstructor: new (...args: unknown[]) => TInnerBuilder) {
        this._baseInstance = new baseConstructor();
    }

    public create<TInput, TOutput>(): IProxy<TInput, TOutput> {

        const proxyBuilder: IProxy<TInput, TOutput> = new Proxy(Object.create(null), {
            get: (
                target: never,
                property: string,
            ): ((value: unknown) => IProxy<TInput, TOutput>) | ((...args: unknown[]) => unknown) => {
                if (property === 'build') {
                    return this._baseInstance.build.bind(this._baseInstance);
                }

                return (value: unknown): IProxy<TInput, TOutput> => {
                    this._baseInstance.data[property] = value;
                    return proxyBuilder;
                }
            }
        });

        return proxyBuilder;
    }
}
