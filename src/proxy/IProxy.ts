export type IProxy<TI, TO, TG = Record<string, unknown>> = TG extends TI
    ? { build: () => TO; }
    : { [TIK in keyof TI]-?: (value: TI[TIK]) => IProxy<Omit<TI, TIK>, TO, TG & Record<TIK, TI[TIK]>>; };