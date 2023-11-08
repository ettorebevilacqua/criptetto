"use client"

import '../../styles/globals.css'
import styles from './fp.module.css';
import { useState } from 'react';

import O, { Option, none } from "fp-ts/Option";
import { useStable, useStableEffect, useStableO } from "fp-ts-react-stable-hooks";
import * as Eq from "fp-ts/Eq";
import  { Button } from '@acme/ui';


type Ingredient = { tag: string }
type Extra = { tag: string }
type PizzaOrder = NoMainIngredient | SelectedMain
type NoMainIngredient = {
  tag: 'NoMainIngredient'
}
type SelectedMain = {
  selection: {
    main: Ingredient
    second: Option<Ingredient>
  }
  extras: Array<Extra>
  tag: 'SelectedMain'
}

const isPizzaOrder = (b: NoMainIngredient | SelectedMain): b is SelectedMain => {
  return (b as SelectedMain).selection !== undefined
}

export const noIngredient: PizzaOrder = { tag: 'NoMainIngredient' }
export const mkSelection = (main: Ingredient): PizzaOrder => ({
  selection: {
    main,
    second: O.some({ tag: 'aaa' }),
  },
  extras: [{ tag: 'meat' }],
  tag: 'SelectedMain',
})

export const pizzaOrderEq: Eq.Eq<PizzaOrder> = {
  equals: (poA: PizzaOrder, poB: PizzaOrder) =>isPizzaOrder(poA) ? (poA as SelectedMain).selection === (poB as SelectedMain).selection : poA.tag === poB.tag  //&& typeof poA === typeof
}

/*
export const getPrice = (order: PizzaOrder): number => 5;


const order: PizzaOrder = {
  mainIngredient: O.none,
  secondIngredient: O.none,
  extras: ['meat'],
}
*/

type State = null
const stateDefault = null


export default function Page(): JSX.Element {
  const [state, setState] = useState<State>(stateDefault)

  const [pizzaOrder, setPizzaOrder] = useStable(
    [noIngredient], Eq.tuple(pizzaOrderEq))

  useStableEffect(
    () => {
      console.log('state', pizzaOrder)
    }, [ pizzaOrder[0] ],
    Eq.tuple(pizzaOrderEq),
  )

  const  changeOrder = ()=>{
    setPizzaOrder([mkSelection({tag:'aaa'})])
  }

  return (
    <div className={styles.component}>
      <h3>ts-fp</h3>
      <Button onClick={changeOrder}>
            Change Order
          </Button>
    </div>
  );
}
