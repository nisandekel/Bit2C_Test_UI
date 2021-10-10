
const baseUrl = 'https://localhost:44328/api/users';

const register = () => {
    const email = document.querySelector('#email-register')?.value;
    const password = document.querySelector('#password-register')?.value;
    const passwordRepeat = document.querySelector('#repeat-password-register')?.value;
    if(password !== passwordRepeat){
        return;
    }
    const data = {
        Email: email,
        Password: password
    };
    fetch(`${baseUrl}/createUser`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
       body: JSON.stringify(data)
      })
      .then(()=>{
            document.querySelector('#email-register').value = '';
            document.querySelector('#password-register').value = '';
            document.querySelector('#repeat-password-register').value = '';
            alert('Registered successfully!')
      })
}

const login = () => {
    const email = document.querySelector('#email')?.value;
    const password = document.querySelector('#password')?.value;
    const data = {
        Email: email,
        Password: password
    };
    fetch(`${baseUrl}/signin`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
       body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then((response) => {
          if (response) {
              window.location.href = '../orders/orders.html';
              localStorage.setItem('userEmail', email);
          } else {
            alert('Login error!')
          }
      });
}