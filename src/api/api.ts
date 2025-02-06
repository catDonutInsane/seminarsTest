import axios from "axios";
import { IChangeSeminar } from "../types/dbTypes";

const instance = axios.create({
  baseURL: "http://localhost:8000/seminars",
  withCredentials: false,
});
// создаём объект с CRUD
export const userAPI = {
    //получам список всех семинаров
  async loadData() {
    try {
      const response = await instance.get(``);
      if (response.status !== 200) throw new Error(response.statusText);
      const data = response.data;
      return data;
    } catch (err: any) {
      console.error(err.message || err);
    }
  },
  //получаем один семинар по ID
  async getById(id: number | null) {
    const response = await instance.get(`?id=${id}`);
    return response.data[0];
  },

  //меняем запись выбранного семинара
  async changeSeminarById(id: number | null, config: IChangeSeminar) {
    await instance
      .patch(`/${id}`, config)
      .catch((error) => console.error(error));
  },
  //удаляем выбранный семинар
  async deleteItem(id: number | null) {
    await instance.delete(`/${id}`).catch((error) => console.error(error));
  },
};
