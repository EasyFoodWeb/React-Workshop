const API_URL = 'https://react-fast-pizza-api.onrender.com/api';

export async function getMenu() {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error('Failed getting menu');

  const { data } = await res.json();
  // const data = [
  //   {
  //     id: 1,
  //     name: 'Pizza 1',
  //     unitPrice: 12,
  //     ingredients: ['1', '2'],
  //     soldOut: false,
  //     imageUrl: '',
  //   },
  //   {
  //     id: 2,
  //     name: 'Pizza 2',
  //     unitPrice: 25,
  //     ingredients: ['2', '3'],
  //     soldOut: false,
  //     imageUrl: '',
  //   },
  //   {
  //     id: 3,
  //     name: 'Pizza 3',
  //     unitPrice: 36,
  //     ingredients: ['3', '4'],
  //     soldOut: true,
  //     imageUrl: '',
  //   },
  //   {
  //     id: 4,
  //     name: 'Pizza 4',
  //     unitPrice: 50,
  //     ingredients: ['4', '5'],
  //     soldOut: false,
  //     imageUrl: '',
  //   },
  //   {
  //     id: 5,
  //     name: 'Pizza 5',
  //     unitPrice: 75,
  //     ingredients: ['5', '2'],
  //     soldOut: false,
  //     imageUrl: '',
  //   },
  // ];

  return data;
}

export async function getOrder(id) {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder) {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: 'POST',
      body: JSON.stringify(newOrder),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error('Failed creating your order');
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error('Failed updating your order');
  }
}
