export const getQueryString = (qs) => {
  const result = {};
  const arr = qs.substring(1).split("&");
  for (let i = 0; i < arr.length; i++) {
    const temp = arr[i].split("=");
    result[temp[0]] = temp[1];
  }

  return result;
};
