export async function fetchRandomUser(resultCount = 5) {
  const response = await fetch(
    `https://randomuser.me/api/?results=${resultCount}`
  );
  const data = await response.json();
  return data.results;
}
