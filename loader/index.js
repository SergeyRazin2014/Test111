const showLoader = () => {
    const loader = document.getElementById('loader');
    loader.classList.remove('hidden')
}

const hideLoader = () => {
    const loader = document.getElementById('loader');
    loader.classList.add('hidden');
}

const personDataBlock = document.getElementById('person-data-block');

const loadData = () => {
    showLoader();

    fetch('https://dummyjson.com/users/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            firstName: 'bob111',
            lastName: 'Ovi',
            age: 250,
            /* other user data */
        })
    })
        .then(res => res.json())
        .then(data => {
            personDataBlock.innerHTML = `<div>${data.firstName}</div>`;
        }).finally(() => {
            hideLoader();
        })
}

loadData();