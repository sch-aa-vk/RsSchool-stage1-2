export async function deleteCar(url: string) {
  const response = await fetch(url, {
    method: 'DELETE',
  });
  return await response.json();
}