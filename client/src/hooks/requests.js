const API_URL = 'v1';

// Load planets and return as JSON.
const httpGetPlanets = async () => {
  const response = await fetch(`${API_URL}/planets`);
  return await response.json();
};

// Load launches, sort by flight number, and return as JSON.
const httpGetLaunches = async () => {
  const response = await fetch(`${API_URL}/launches`);
  const fetchedLaunches = await response.json();
  return fetchedLaunches.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  })
};

// Submit given launch data to launch system.
const httpSubmitLaunch = async (launch) => {
  try {
    return await fetch(`${API_URL}/launches`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(launch)
    })
  } catch (err) {
    return {
      ok: false,
    }
  }
}

// Delete launch with given ID.
const httpAbortLaunch = async (id) => {
  try {
    return await fetch(`${API_URL}/launches/${id}`, {
      method: 'DELETE',
    })
  } catch(err) {
    return {
      ok: false,
    }
  }
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};