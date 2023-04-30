import axios from "axios";
const BASE_URL=`http://localhost:5000/v1/`

export const postData = async (url, data, method) => {
  try {
    const instance = axios.create({
      baseURL: BASE_URL + `${url}`,

      method: method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
      },
    });

    const res = await instance.request({
      data,
    });


    return res;
  } catch (error) {

    return { status: error.response.status, message: error.response.data.message };
  }
};
