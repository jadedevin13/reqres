import { useQuery } from "react-query";
import axios from "axios";

export function useFetchUsers(page: number) {
  return useQuery("users", async () => {
    const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`);

    return data;
  });
}

export function useFetchUser(id: number) {
  return useQuery("user", async () => {
    const { data } = await axios.get(`https://reqres.in/api/users/${id}`);

    return data;
  });
}
