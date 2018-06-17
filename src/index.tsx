import './style'
import { h, Component, render } from 'preact'
import Comp1 from './comp1'
import Comp2 from './comp2'

export default class App extends Component<{}, {}> {
  render(props, state) {
    return (
      <div>
        <Comp1 />
        <Comp2 />
      </div>
    )
  }
}

render(<App />, document.body)

// import $ from "jquery";
// import Rx from "rxjs";

// const searchInput = document.getElementById("search");
// Rx.Observable.fromEvent(searchInput, "keyup")
//   .map(e => e.target.value)
//   .switchMap(value => {
//     return Rx.Observable.fromPromise(service(value, 5000 / value.length));
//   })
//   .subscribe(value => {
//     $("#result").text(value);
//   });

// // an echo service that returns response in a few seconds
// let count = 1;
// function service(message, timeout) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       $("<p>")
//         .text(count++ + "- returned " + message)
//         .prependTo("#service-status");
//       resolve(message);
//     }, timeout);
//   });
// }
