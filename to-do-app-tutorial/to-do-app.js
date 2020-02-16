// Tutorial: 
// https://dev.to/thepassle/web-components-from-zero-to-hero-4n4m

// create a template element
const template = document.createElement('template')

// add some HTML in the template element
// this is done once
template.innerHTML = `
  <style>
    /* add styling to the component from the inside */
    :host {
      display: block;
      font-family: sans-serif;
      text-align: center;
    }

    button {
      border: none;
      cursor: pointer;
    }

    ul {
      list-style: none;
      padding: 0;
    }
  </style>

  <h1> To Do </h1>

  <input type="text" placeholder="Add a new item!"></input>
  <button> ✅ </button>

  <ul id="todo-list"></ul>
`;

class TodoApp extends HTMLElement {
  constructor() {
    super(); // always all this first!

    // attach shadowroot
    // open - allows us to create a sub DOM three next to the light DOM
    //        to provide encapsulation for our components

    // closed - prevents external JS from accessing the shadowroot
    //          makes the component less flexible (ex: <video>) 
    this._shadowRoot = this.attachShadow({ 'mode': 'open' });

    // clone template into shadowroot
    // shadow-roots don't get overwritten by global styles

    this._shadowRoot.appendChild(template.content.cloneNode(true));

    this.$todoList = this._shadowRoot.querySelector('ul');
  }

  _renderTodoList() {
    this.$todoList.innerHTML = '';

    this._renderTodoList.forEach((todo, index) => {
      let $todoList = document.createElement('div')
      $todoList.innerHTML = todo.text;
      this.$todoList.appendChild($todoItem);
    });
  }

  set todos(value) {
    this._todos = value;
    this._renderTodoList();
  }

  get todos() {
    return this._todos;
  }
}