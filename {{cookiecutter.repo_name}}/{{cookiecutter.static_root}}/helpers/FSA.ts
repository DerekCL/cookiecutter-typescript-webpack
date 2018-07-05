/** Flux standard action. */
export type FSA<Type, Payload = never> = [Payload] extends [never]
    ? { type: Type }
    : { type: Type; payload: Payload };
