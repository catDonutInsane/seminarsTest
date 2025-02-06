import { SeminarsItem } from "./SeminarsItem/SeminarsItem";
import { ModalForDelete } from "./ModalForDelete/ModalForDelete";
import { ModalForChange } from "./ModalForChange/ModalForChange";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { setSeminarsList, setDataLoading } from "../reducers/reducer";
import { userAPI } from "../api/api";

export const SeminarsList = () => {
  const dispatch = useAppDispatch();
  const { seminarsList, isDataLoading } = useAppSelector((state) => state.reducer );

  useEffect(() => {
    dispatch(setDataLoading(true));
    userAPI
      .loadData()
      .then((data) => dispatch(setSeminarsList(data)))
      .finally(() => dispatch(setDataLoading(false))); 
  }, []);

  return (
    <div>
      {isDataLoading ? (   //ждём загрузки всех данных, до этого момента отображаем надпись ИДЁТ ЗАГРУЗКА 
        "ИДЁТ ЗАГРУЗКА"
      ) : seminarsList ? (
        seminarsList.map((i) => <SeminarsItem key={i.id} {...i} />)
      ) : (
        <>Ошибка загрузки</>
      )}
      {/* модальные окна */}
      <ModalForDelete /> 
      <ModalForChange />  
    </div>
  );
};
