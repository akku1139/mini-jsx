import { JSX } from "./jsx"

type Props = {
  [T in keyof HTMLElementEventMap as `on:${T}`]: EventListenerOrEventListenerObject
} & {
  [key in PropertyKey]: string
} | {[key: string]: never}

// https://github.com/hyperhype/hyperscript
// https://qiita.com/murasuke/items/1b914440361977b7028e
export const h = (
  tag: keyof HTMLElementTagNameMap | Function,
  props: Props,
  ...children: Array<string | Element>
) => {
  if(typeof tag === "function") {
    return tag(props, children)
  }

  const e = document.createElement(tag)

  for(const propName in props) {
    if(((name: string): name is `on:${keyof HTMLElementEventMap}` => name.startsWith('on'))(propName)) {
      const prop = props[propName]
      e.addEventListener(propName.slice(3).toLowerCase(), prop)
    } else {
      const prop = props[propName]
      e.setAttribute(propName, prop)
    }
  }
}

export const Flagment = (props: { children: JSX.Element }) => props.children

// TODO: render
