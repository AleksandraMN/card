import {setAttr} from 'redom';

export const inputControle = (
    input1, input2, input3, input4, cardName, cardDate, spanCardNumber) => {
  input1.oninput = (evt) => {
    input1.value = input1.value.replace(/[^A-Z ]/iu, '');
    cardName.textContent = input1.value;
  };

  input2.onfocus = (evt) => {
    setAttr(input2, {
      placeholder: 'xxxx xxxx xxxx xxxx',
    });
  };
  input2.onblur = (evt) => {
    setAttr(input2, {
      placeholder: '',
    });
  };
  input3.onfocus = (evt) => {
    setAttr(input3, {
      placeholder: '__/__',
    });
  };
  input3.onblur = (evt) => {
    setAttr(input3, {
      placeholder: '',
    });
  };
  input4.onfocus = (evt) => {
    setAttr(input4, {
      placeholder: '___',
    });
  };
  input4.onblur = (evt) => {
    setAttr(input4, {
      placeholder: '',
    });
  };
  input2.oninput = (evt) => {
    const str = input2.value;
    const str1 = str.substring(0, 4);
    const str2 = str.substring(4, 8);
    const str3 = str.substring(8, 12);
    const str4 = str.substring(12, 16);
    spanCardNumber.textContent = str1 + ' ' + str2 + ' ' + str3 + ' ' + str4;
  };
  input3.oninput = (evt) => {
    const str = input3.value;
    const str1 = str.substring(0, 2);
    const str2 = str.substring(2, 4);
    cardDate.textContent = str1 + '/' + str2;
  };
};

export const formControle = (form, input1, input2, input3, input4) => {
  setAttr(input1, {
    required: 'true',
  });
  setAttr(input2, {
    required: 'true',
  });
  setAttr(input3, {
    required: 'true',
  });
  setAttr(input4, {
    required: 'true',
  });
  form.onsubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    data.cardNumber = input2.value;
    data.cardName = input1.value;
    data.cardDate = input3.value;
    data.cardCVV = input4.value;
    console.log(data);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'post',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    form.reset();
  };
};


