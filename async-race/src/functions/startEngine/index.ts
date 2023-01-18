export async function startEngine(url = 'http://127.0.0.1:3000/engine') {
  const response = await fetch(url, {
    method: 'PATCH',
  });
  return await response.json();
}