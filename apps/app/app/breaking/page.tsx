"use client"

import '../../styles/globals.css'
import styles from './breaking.module.css';
import { useState } from 'react';

type State = { a: { b: { c: string } } } | null
const  stateDefault: State = { a: { b: { c: 'BREAKING' } } }

const getError = ()=>{ throw 'my error'}

export default function Page() :JSX.Element {
  const [state, setState] = useState<State>(stateDefault)
  return (
    <div className={styles.component}>
      <div>{state ? state?.a.b.c : getError()}</div>
      <div>
        <button onClick={(e) => setState(state ? null : stateDefault )}>
          Break this
        </button>
      </div>
    </div>
  );
}
