export interface IBuilder<TInput, TOutput> {
    data: TInput;
    build: (...args: unknown[]) => TOutput;
}