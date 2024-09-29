import type { JSX, Component, ChildNode, EventHandlerProps } from "./jsx"

type Props = {
  [T in EventHandlerProps]: EventListenerOrEventListenerObject
} & {
  [key in PropertyKey]: string
} | {[key: string]: never}

// https://github.com/hyperhype/hyperscript
// https://qiita.com/murasuke/items/1b914440361977b7028e
export const h = (
  tag: keyof HTMLElementTagNameMap | Function,
  props: Props,
  ...children: Array<ChildNode>
) => {
  if(typeof tag === "function") {
    return tag(props, children)
  }

  const e = document.createElement(tag)

  // https://www.tohoho-web.com/html/memo/attr.htm
  for(const propName in props) {
    if(((name: string): name is EventHandlerProps => name.startsWith('on'))(propName)) {
      e.addEventListener(
        propName.slice(3).toLowerCase(),
        props[propName]
      )
    } else {
      e.setAttribute(propName, props[propName])
    }
  }

  for(const child of children) {
    if(typeof child === "string") {
      e.appendChild(
        document.createTextNode(child)
      )
    } else {
      e.appendChild(child)
    }
  }
}

export const Flagment = (props: { children: JSX.Element }) => props.children

// TODO: render
export const render = (child: Component, root: HTMLElement) => {
  root.appendChild(child({ children: [] }))
}
