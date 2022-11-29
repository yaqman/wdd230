// class = Self-validation of form elements with "validationForm" and novalidate attributes
document.addEventListener('DOMContentLoaded', () => {
    //.validationForm Get the first form element
    const validationForm = document.querySelector('.validationForm');

    if(validationForm) {
      //Name of the class to assign to the span element that displays the error.
      const errorClassName = 'error';
      
      //required A collection of elements specified in a class. 
      const requiredElems = document.querySelectorAll('.required');
      //email A collection of elements specified in a class.
      const emailElems =  document.querySelectorAll('.email');
      //tel A collection of elements specified in a class.
      const telElems =  document.querySelectorAll('.tel');
      //maxlength A collection of elements specified in a class.
      const maxlengthElems =  document.querySelectorAll('.maxlength');
      //equal-to A collection of elements specified in a class.
      const equalToElems = document.querySelectorAll('.equal-to'); 
      
      //A function that generates a span element that displays an error message and adds it to the parent element.
      //errorMessage ：Error Messages to Display
      const createError = (elem, errorMessage) => {
        const errorSpan = document.createElement('span');
        //Add class for error
        errorSpan.classList.add(errorClassName);
        errorSpan.setAttribute('aria-live', 'polite');
        //Set the error message specified for the argument
        errorSpan.textContent = errorMessage;
        elem.parentNode.appendChild(errorSpan);
      }
   
      //Processing on transmission using submit events for form elements
      validationForm.addEventListener('submit', (e) => {
        //Retrieve and delete all elements that display errors (Initialize)
        const errorElems = validationForm.querySelectorAll('.' + errorClassName);
        errorElems.forEach( (elem) => {
          elem.remove(); 
        });
        
        requiredElems.forEach( (elem) => {
          //Remove blank characters before and after the value property
          const elemValue = elem.value.trim(); 
          //Stop submitting the form with an error if the value is empty
          if(elemValue.length === 0) {
            createError(elem, 'Input is required');
            e.preventDefault();
          }
        });
        
        emailElems.forEach( (elem) => {
          //Regular Expression Patterns Used to Validate Email
          const pattern = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ui;
          if(elem.value !=='') {
            //The test() method determines the value, displays an error, and stops submitting the form.
            if(!pattern.test(elem.value)) {
              createError(elem, 'Email address format does not appear to be correct.');
              e.preventDefault();
            }
          }
        });
        
        telElems.forEach( (elem) => {
          //Regular Expression Patterns Used to Validate Phone Numbers
          const pattern = /^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/;
          if(elem.value !=='') {
            //The test() method determines the value, displays an error, and stops submitting the form.
            if(!pattern.test(elem.value)) {
              createError(elem, 'Phone Number format does not appear to be correct.');
              e.preventDefault();
            }
          }
        });

        maxlengthElems.forEach( (elem) => {
          //Get Maximum Characters
          const maxlength = elem.dataset.maxlength;
          //Or const maxlength = elem.getAttribute('data-maxlength');
          if(elem.value !=='') {
            //Stop submitting the form by displaying an error if the value is greater than maxlength
            if(elem.value.length > maxlength) {
              createError(elem, maxlength + ' characters ');
              e.preventDefault();
            }
          }
        });
         
        equalToElems.forEach( (elem) => {
          //Element of comparison
          const equalToId = elem.dataset.equalTo;
          //Or const equalToId = elem.getAttribute('data-equal-to');
          //Element of comparison
          const equalToElem = document.getElementById(equalToId);
          if(elem.value !=='' && equalToElem.value !==''){
            if(equalToElem.value !== elem.value) {
              createError(elem, 'Value entered is different');
              e.preventDefault();
            }
          }
        });
   
        //Get first element of error
        const errorElem =  validationForm.querySelector('.' + errorClassName);
        //Scroll to the location of the first element of the error, if any.
        if(errorElem) {
          const errorElemOffsetTop = errorElem.offsetTop;
          window.scrollTo({
            top: errorElemOffsetTop - 40,  //Adjust position above 40px
            behavior: 'smooth'
          });
        }
      }); 
    }
  });