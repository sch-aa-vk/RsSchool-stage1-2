export async function startEngine(url: string) {
  const response = await fetch(url, {
    method: 'PATCH',
  });
  return await response.json();
}