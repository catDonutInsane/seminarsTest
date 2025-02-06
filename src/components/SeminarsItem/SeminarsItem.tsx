import { FC } from "react";
import { Seminar } from "../../types/dbTypes";
import { setPropsToDelete, setPropsToChange } from "../../reducers/reducer";
import { useAppDispatch } from "../../hooks/hooks";

export const SeminarsItem: FC<Seminar> = (data) => {
  const dispatch = useAppDispatch();
  const { id, photo, time, title, description, date } = data;

  const ShowModal = () => {
    dispatch(setPropsToDelete(id));
  };
  const ShowChangeModal = () => {
    dispatch(setPropsToChange(id));
  };
 
  return (
    <div className="seminars">
        <div className="seminars_data">
            {/* <div>{id}</div> */}
            <div><b>{title}</b> </div>
            <div>{description}</div>
            <div>{time}</div>
            <div>{date}</div>
            <div><img src={photo} alt="фото"/></div>
            
        </div>
     
      <button onClick={ShowModal}>Удалить запись</button>
      <button onClick={ShowChangeModal}>Изменить запись</button>
    </div>
  );
};
