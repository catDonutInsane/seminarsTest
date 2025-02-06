import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  initialStateInterface,
  Seminar, 
} from "../types/dbTypes";

const initialState: initialStateInterface = {
  seminarsList: [],
  idToDelete: null,
  isModalOpen: false,
  idToChange: null,
  isModalToChangeOpen: false,
  isDataLoading: false,
};

const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    // сохраняем в стэйт все семинары
    setSeminarsList(state, action: PayloadAction<Seminar[]>) {
      state.seminarsList = [...action.payload];
    },
    // устанавливаем для модалки ID и флаг (открыто/закрыто)
    setPropsToDelete(state, action: PayloadAction<number>) {
      state.idToDelete = action.payload;
      state.isModalOpen = !state.isModalOpen;
    },
    setCloseModal(state) {
      state.isModalOpen = !state.isModalOpen;
    },
    setPropsToChange(state, action: PayloadAction<number | null>) {
      state.idToChange = action.payload;
      state.isModalToChangeOpen = !state.isModalToChangeOpen;
    },
    setCloseChangeModal(state) {
      state.isModalToChangeOpen = !state.isModalToChangeOpen;
    },
    // устанавливаем флаг загрузки данных 
    setDataLoading(state, action: PayloadAction<boolean>) {
      state.isDataLoading = action.payload;
    },
  },
});
export const {  //экшены
  setSeminarsList,
  setPropsToDelete,
  setCloseModal,
  setPropsToChange,
  setCloseChangeModal,
  setDataLoading,
} = reducer.actions;
export default reducer.reducer;
