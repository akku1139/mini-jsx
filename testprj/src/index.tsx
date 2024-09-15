import type { Component } from "mj"

const Counter: Component = (props) => {
  return <>
    <button type="button">click</button>
  </>
}

const App = <div>
  hello
  <Counter />
</div>
