export default class Card {
  constructor({ title, price, image }, cardSelector) {
    this._title = title;
    this._price = price;
    this._image = image;

    this._cardSelector = cardSelector;

  }

  _getTamplate() {
    const card = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return card;
  }

  generateCard() {
    this._element = this._getTamplate();

    this._elemTitle = this._element.querySelector('.element__title');
    this._elemPrice = this._element.querySelector('.element__price');
    this._elemImg = this._element.querySelector('.element__img');


    this._elemTitle.textContent = this._title;
    this._elemPrice.textContent = this._price;
    this._elemImg.src = this._image;

    return this._element;
  }
}