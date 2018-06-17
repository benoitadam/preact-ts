import './comp1.scss'
import { h, Component, render } from 'preact'
import { a$ } from './subjects'

export default () => (
  <button class="comp1" onClick={() => a$.next(a$.value + 1)}>
    Add
  </button>
)
