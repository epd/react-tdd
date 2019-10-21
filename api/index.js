export const getOfficesList = () =>
    fetch('/api/offices-list', {
        headers: {
            'accepts': 'application/json', // prettier-ignore
            'content-type': 'application/json',
        },
    }).then((res) => res.json());
