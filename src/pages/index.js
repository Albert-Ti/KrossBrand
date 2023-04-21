import './index.css';

import { arr } from '../components/constants';
import Card from '../components/Card';
import Section from '../components/Section';

const section = new Section({
  arr, renderer: (item) => {
    const card = new Card(item, '.template-card')
    section.additem(card.generateCard())
  }
}, '.content')

section.renderItem()
