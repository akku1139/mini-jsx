// https://github.com/QwikDev/qwik/tree/main/packages/qwik/src/core/render/jsx/types/
// https://github.com/honojs/hono/blob/main/src/jsx/intrinsic-elements.ts
// https://www.typescriptlang.org/docs/handbook/jsx.html
// https://qiita.com/uhyo/items/adf6cb83333a25097f25
export namespace JSX {
  export interface IntrinsicElements {
    // [key in keyof HTMLElementTagNameMap]: {}
    div: {}
  }
  export interface Element {
  }
  export interface ElementClass {
    render: (props: {
      children: Array<ChildNode>
    }) => HTMLElement
  }
}

export type ChildNode = HTMLElement | string

export type Component = ((props: {
  children: Array<ChildNode>
}) => HTMLElement) | JSX.ElementClass

export type EventHandlerProps = `on:${keyof HTMLElementEventMap}`
