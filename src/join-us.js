import { validate } from './email-validator.js';

const JoinUsSection = {
  htmlElem: `
    <section class="app-section app-section--image-join">
      <h2 class="app-title">Join Our Program</h2>
      <h3 class="app-subtitle">Sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua.<br /></h3>
      
      <div class="email-subscribe-container">
        <input type="email" id="email" name="email" placeholder="Email">
        <button class="app-section__button app-section__button--subscribe">SUBSCRIBE</button>
      </div>
    </section>
  `,

  remove() {
    const section = document.querySelector('.app-section--image-join');
    if (section) {
      section.remove();
    }
  },

  render: function () {
    const footer = document.querySelector('footer');
    footer.insertAdjacentHTML('beforebegin', this.htmlElem);

   

const emailInput = document.getElementById('email');
const submitButton = document.querySelector('button.app-section__button--subscribe');


const savedEmail = localStorage.getItem('subscribe');


if (savedEmail) {
  emailInput.value = savedEmail;
}

emailInput.addEventListener('input', function (e) {
  const email = emailInput.value.trim();
  localStorage.setItem('subscribe', email);
});


submitButton.addEventListener('click', function (e) {
  e.preventDefault();
  const email = emailInput.value.trim();

 
  const isValidEmail = validate(email);
  //implementing functionality for sending a user email to the server 

  if (isValidEmail) {
    
    emailInput.style.display = 'none';
    submitButton.textContent = 'Unsubscribe';
    localStorage.setItem('subscribe', email); 
  } else {
    
    emailInput.style.display = 'block';
    submitButton.textContent = 'Subscribe';

  
    localStorage.removeItem('subscribe');
  }
});
},
};


class SectionCreatorFactory {
  createSection(type) {
    switch (type) {
      case 'standard':
        return JoinUsSection;

      case 'advanced':
        JoinUsSection.htmlElem.replace('Join Our Program', 'Join Our Advanced Program')
            .replace('SUBSCRIBE', 'Subscribe to Advanced Program');

        return JoinUsSection;
    }
  }
}


export { SectionCreatorFactory };
