import { Element, Component, Prop, h, Watch } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Element() el: HTMLElement;

  @Prop({ reflect: true }) size: string;
  @Watch('size')
  onSizeChange(newVal: string, oldVal: string) {
    console.log('Size changed', newVal, oldVal);
  }

  render() {
    return <div>{this.el.getAttribute('id')}</div>;
  }
}
