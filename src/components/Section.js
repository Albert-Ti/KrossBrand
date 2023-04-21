export default class Section {
  constructor({ arr, renderer }, selector) {
    this._container = document.querySelector(selector)
    this._array = arr;
    this._renderer = renderer;
  }

  additem(item) {
    this._container.prepend(item);
  }

  renderItem() {
    this._array.forEach(item => {
      this._renderer(item);
    })
  }
}