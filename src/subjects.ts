import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import 'rxjs/add/operator/map'

export const a$ = new BehaviorSubject(1)
export const b$ = a$.map(a => a * 10)
