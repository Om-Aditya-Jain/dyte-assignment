import axios from "axios";

export async function getLogs() {
  const res = await axios.get(import.meta.env.VITE_APP_API_URL);
  console.log(res);
  const data = [];
  res?.data?.data?.map((item, index) => {
    data.push({
      ...item,
      id: index + 1,
      metadata: item?.metadata?.parentResourceId,
    });
  });
  return data;
}

export async function filterLogs({
  level,
  message,
  timestamp,
  traceId,
  spanId,
  commit,
}) {
  const url =
    import.meta.env.VITE_APP_API_URL +
    "?" +
    (level && `level=${level}&`) +
    (message && `message=${message}&`) +
    (timestamp && `timestamp=${timestamp}&`) +
    (traceId && `traceId=${traceId}&`) +
    (spanId && `spanId=${spanId}&`) +
    (commit && `commit=${commit}&`);
  const res = await axios.get(url);
  console.log(res);
  const data = [];
  res?.data?.data?.map((item, index) => {
    data.push({
      ...item,
      id: index + 1,
      metadata: item?.metadata?.parentResourceId,
    });
  });
  return data;
}

export async function addLogs(formData) {
  await axios
    .post(import.meta.env.VITE_APP_API_URL, formData)
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
