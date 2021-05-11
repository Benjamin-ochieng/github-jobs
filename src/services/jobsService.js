/* eslint-disable consistent-return */
import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://cors.bridged.cc/https://jobs.github.com/positions.json',
  withCredentials: false,
  headers: {
    'Access-Control-Allow-Origin': '*',
    Accept: 'application/json',
    'Contenet-type': 'application/json',
  },
});

export default {
  // async getJobs() {
  //   try {
  //     const res = await apiClient.get();
  //     return res;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
  async getJobs(params) {
    try {
      const res = await apiClient.get(`/${params}`);
      return res;
    } catch (error) {
      console.log(error);
    }
  },
};
