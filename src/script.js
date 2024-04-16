import {setChildren} from 'redom';
import createCard from './modules/createModule.js';
import CreditCardInputMask from 'credit-card-input-mask';
import {formControle, inputControle} from './modules/eventModule.js';


const init = () => {
  const {
    divWrapper,
    form,
    input1,
    input2,
    input3,
    input4,
    spanCardNumber,
    cardName,
    cardDate,
  } = createCard();

  setChildren(document.body, divWrapper);
  inputControle(
      input1, input2, input3, input4, cardName, cardDate, spanCardNumber);
  formControle(form, input1, input2, input3, input4);

  // маска банковской карты
  const formattedCreditCardInput2 = new CreditCardInputMask({
    element: input2,
    pattern: '{{9999}} {{9999}} {{9999}} {{9999}}',
  });
  const formattedCreditCardInput3 = new CreditCardInputMask({
    element: input3,
    pattern: '{{99}}/{{99}}',
  });
  const formattedCreditCardInput4 = new CreditCardInputMask({
    element: input4,
    pattern: '{{999}}',
  });
};

init();
