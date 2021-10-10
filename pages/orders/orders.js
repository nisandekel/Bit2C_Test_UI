
const baseUrl = 'https://localhost:44328/api/orders';

(function getUserOrders() {
    const email = localStorage.getItem('userEmail');
    fetch(`${baseUrl}/getallorders?email=${email}`)
        .then(response => response.json())
        .then((response) => {
            response.forEach( order => {
                const newOrderElement = document.querySelector('#template-order').cloneNode(true);
                newOrderElement.id = 'order_' + order.Id;
                newOrderElement.querySelector('#email').innerText = order.Email;
                newOrderElement.querySelector('#amount').innerText = order.Amount;
                newOrderElement.querySelector('#price').innerText = order.Price;
                newOrderElement.querySelector('#order-type').innerText = order.Type;
                document.querySelector('#order-list').append(newOrderElement);
            })
        });
}());

const createOrder = () => {
    const price = document.querySelector('#price-input')?.value;
    const amount = document.querySelector('#amount-input')?.value;
    const type = document.querySelector('#order-type-select')?.value;
    const email = localStorage.getItem('userEmail');

    const data = {
        Email: email,
        Amount: amount,
        Price: price,
        Type: type
    };
    fetch(`${baseUrl}/createorder`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(() => {
        window.location.reload();
    });
}

const signOut = () => {
    localStorage.setItem('userEmail', '');
    window.location.href = '../login/index.html';
}
