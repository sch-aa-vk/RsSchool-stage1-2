export async function getWinners(url = 'http://127.0.0.1:3000/winners') {
  const response = await fetch(url, {
    method: 'GET',
  });
  return await response.json();
}