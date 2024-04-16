import {el, mount, setChildren} from 'redom';

const createCard = () => {
  const divWrapper = el('div', {className: 'wrapper'});
  const divCard = el('.card');
  mount(divWrapper, divCard);

  const pElem = el('p', {className: 'secure'}, 'Secure Checkout');
  const divCreditCard = el('.credit-card');
  const form = el('form', {action: '#', className: 'form', id: 'form'});
  setChildren(divCard, [pElem, divCreditCard, form]);

  const spanCardNumber = el('span',
      {className: 'card__number'}, 'xxxx xxxx xxxx xxxx');
  const cardPersonal = el('.card__personal');
  setChildren(divCreditCard, [spanCardNumber, cardPersonal]);

  const cardName = el('span', {className: 'card__name'}, 'John Doe');
  const cardDate = el('span', {className: 'card__date'}, '04/24');
  setChildren(cardPersonal, [cardName, cardDate]);

  const formInputWrap1 = el('.form__input-wrap form__input-wrap_holder');

  const label1 = el('label',
      {for: '', className: 'form__label form__holder-label'}, 'Card Holder');
  const input1 = el('input', {type: 'text', className: 'input input__holder'});
  setChildren(formInputWrap1, [label1, input1]);

  const formInputWrap2 = el('.form__input-wrap form__input-wrap_number');

  const label2 = el('label',
      {for: '', className: 'form__label form__number-label'}, 'Card Number');
  const input2 = el('input',
      {id: 'cardNumber', className: 'input input__number'});
  setChildren(formInputWrap2, [label2, input2]);

  const formInputWrap3 = el('.form__input-wrap form__input-wrap_date');

  const label3 = el('label',
      {for: '', className: 'form__label form__date-label'}, 'Card Expiry');
  const input3 = el('input', {type: 'text', className: 'input input__date'});
  setChildren(formInputWrap3, [label3, input3]);

  const formInputWrap4 = el('.form__input-wrap form__input-wrap_cvv');

  const label4 = el('label',
      {for: '', className: 'form__label form__cvv-label'}, 'CVV');
  const input4 = el('input', {type: 'text', className: 'input input__cvv'});
  setChildren(formInputWrap4, [label4, input4]);

  const button = el('button', {className: 'form__button'}, 'CHECK OUT');

  setChildren(form, [formInputWrap1,
    formInputWrap2, formInputWrap3, formInputWrap4, button]);

  return {
    divWrapper,
    form,
    input1,
    input2,
    input3,
    input4,
    spanCardNumber,
    cardName,
    cardDate,
  };
};


export default createCard;
