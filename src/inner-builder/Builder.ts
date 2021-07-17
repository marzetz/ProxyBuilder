import { IBuilder } from "./IBuilder";

export abstract class Builder<TInput, TOutput> implements IBuilder<TInput, TOutput> {
    abstract data: TInput;
    abstract build(...args: unknown[]): TOutput;
}
