// codesandbox.io/s/fp-ts-react-o5t7m?file=/src/index.tsx
// https://serokell.io/blog/kinds-and-hkts-in-haskell
// https://serokell.io/blog/whats-that-typeclass-functor
// https://serokell.io/blog/haskell-typeclasses

import { A } from "@vercel/examples-ui";
import { Tree } from "fp-ts/lib/Tree"
import O, { Option, none } from "fp-ts/Option";

interface HKT {
    readonly _R?: unknown
    readonly _E?: unknown
    readonly _A?: unknown

    readonly type?: unknown
}

type Kind<F extends HKT, R, E, A> =
    F extends {
        readonly type: unknown
    } ?
    (F & {
        readonly _R: R
        readonly _E: E
        readonly _A: A
    })["type"] :
    {
        readonly _F: F
        readonly _R: (_: R) => void
        readonly _E: () => E
        readonly _A: () => A
    }

interface MappableSimple<F extends HKT> {
    readonly map:
    <R, E, A, B>(
        self: Kind<F, R, E, A>,
        f: (a: A) => B
    ) => Kind<F, R, E, B>
}

interface ArrayHKT extends HKT {
    readonly type: Array<this["_A"]>
}

const stringify = <F extends HKT>(T: Mappable<F>) =>
    <R, E>(self: Kind<F, R, E, number>) =>
        T.map(self, (n) => `number: ${n}`)

declare const ArrayMappable: Mappable<ArrayHKT>

const res = stringify(ArrayMappable)([0, 1, 2])

interface TypeClass<F extends HKT> {
    readonly _F?: F
}

interface Mappable<F extends HKT> extends TypeClass<F> {
    readonly map:
    <R, E, A, B>(
        self: Kind<F, R, E, A>,
        f: (a: A) => B
    ) => Kind<F, R, E, B>
}