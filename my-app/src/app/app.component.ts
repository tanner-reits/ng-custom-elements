import { Component } from '@angular/core';
import { defineCustomElementMyComponent } from 'stencil-library';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-app';

  size = 'small';

  // Create a class for the web component
  myElement = class extends HTMLElement {
    static observedAttributes = ['size', 'my-prop'];

    myProp = 'myProp';

    constructor() {
      super();
    }

    connectedCallback() {
      console.log('connectedCallback');
      const shadow = this.attachShadow({ mode: 'open' });

      const p = document.createElement('p');
      p.textContent = 'I am a custom element';
      shadow.appendChild(p);
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
      console.log('attributeChangedCallback', name, oldValue, newValue);
    }
  };

  ngOnInit() {
    // Test some watch callback and shadowed property scenarios for Stencil CE build

    // Vanilla WC
    // setTimeout(() => customElements.define('my-element', this.myElement), 1000);
    // customElements.define('my-element', this.myElement);
    // const myElement = document.querySelector('my-element')! as any;
    // myElement.setAttribute('size', 'large');

    // Stencil
    // document.querySelector('my-component')!.setAttribute('size', 'large');
    setTimeout(() => {
      defineCustomElementMyComponent();
      setTimeout(() => {
        (document.querySelector('my-component')! as any).size = 'large';
        // this.size = 'large';
      }, 2000);
    }, 1000);
  }
}
