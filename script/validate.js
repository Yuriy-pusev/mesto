
const inputData = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit',
    inactiveButtonClass: 'popup__submit_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible',
  };

const getInputList = (formElement, inputData) => Array.from(formElement.querySelectorAll(inputData.inputSelector));

const showInputError = (formElement, inputElement, errorMessage, inputData) => { 
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.add(inputData.inputErrorClass); 
  errorElement.textContent = errorMessage; 
  errorElement.classList.add(inputData.errorClass); 
};

const hideInputError = (formElement, inputElement, inputData) => { 
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`); 
  inputElement.classList.remove(inputData.inputErrorClass); 
  errorElement.classList.remove(inputData.errorClass); 
  errorElement.textContent = ''; 
}; 

 const checkInputValidity = (formElement, inputElement, inputData) => { 
  if (!inputElement.validity.valid) { 
    showInputError(formElement, inputElement, inputElement.validationMessage, inputData); 
  } else { 
    hideInputError(formElement, inputElement, inputData);
  }
}; 

const setEventListeners = (formElement, inputData) => { 
 const inputList = Array.from(formElement.querySelectorAll(inputData.inputSelector)); 
 const buttonElement = formElement.querySelector(inputData.submitButtonSelector); 

  inputList.forEach((inputElement) => {
    toggleButtonState(inputList, buttonElement, inputData); 
    inputElement.addEventListener('input', function () { 
      checkInputValidity(formElement, inputElement, inputData); 
      toggleButtonState(inputList, buttonElement, inputData); 
    }); 
  }); 
}; 

const hasInvalidInput = (inputList) => inputList.some((inputElement) => !inputElement.validity.valid); 
 
const toggleButtonState = (inputList, buttonElement, inputData) => { 
  if (hasInvalidInput(inputList)) { 
    buttonElement.classList.add(inputData.inactiveButtonClass); 
  } else { 
    buttonElement.classList.remove(inputData.inactiveButtonClass); 
  } 
}; 

 
const enableValidation = (inputData) => { 
  const formList = Array.from(document.querySelectorAll(inputData.formSelector)); 
  formList.forEach((formElement) => { 
    formElement.addEventListener('submit', (evt) => evt.preventDefault()); 
    setEventListeners(formElement, inputData); 
  });
}
enableValidation(inputData); 