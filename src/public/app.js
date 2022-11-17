const hostUrl = window.location.host;
const apiUrl = `http://${hostUrl}/api/v1`;
const resource = '/materials';

const materialsEndpoint = apiUrl + resource;

async function fetchResource(endpoint) {
  const resource = await fetch(endpoint);
  const resoureJson = await resource.json();
  console.log(resoureJson);
  return resoureJson;
}

fetchResource(materialsEndpoint);
