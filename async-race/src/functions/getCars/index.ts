export async function getCars(url = 'http://127.0.0.1:3000/garage') {
  const response = await fetch(url, {
    method: 'GET',
  });
  return await response.json();
}