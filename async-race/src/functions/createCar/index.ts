export async function createCar(url = 'http://127.0.0.1:3000/garage', data: {name: string, color: string}) {
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}