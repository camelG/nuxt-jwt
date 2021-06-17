import axios from "axios";

// postal api
export function getAddress(data) {
  if (data.length < 7) {
    return;
  }
  return axios.get(
    `https://madefor.github.io/postal-code-api/api/v1/${data.slice(
      0,
      3
    )}/${data.slice(-4)}.json`
  );
}
