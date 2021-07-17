import { IProxy } from "../proxy/IProxy";

export interface IProxyBuilder {
    create<TInput, TOutput>(): IProxy<TInput, TOutput>;
}