async function getAllStatistics(id) {
  try {
    const response = await fetch(`http://localhost:3000/statistics/${id}`);
    if (!response.ok) return '';
    const statistics = await response.json();
    return statistics;
  } catch (err) {
    console.error('getAllPizzas::error: ', err);
    throw err;
  }
}

async function updateStatistics(id, options) {
  const response = await fetch(`http://localhost:3000/statistics/${id}`, options); // fetch return a promise => we wait for the response
  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
}

export { getAllStatistics, updateStatistics };
