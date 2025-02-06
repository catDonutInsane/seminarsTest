import { useEffect, useState } from "react";
import { userAPI } from "../../api/api";
import { setSeminarsList, setCloseChangeModal } from "../../reducers/reducer";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
export interface IChangeSeminar {
  title?: string;
  description?: string;
  date?: string;
  time?: string;
  photo?: string;
  id?: number;
}
export const ModalForChange = () => {
  const dispatch = useAppDispatch();
  const { idToChange, isModalToChangeOpen } = useAppSelector(
    (state) => state.reducer
  );
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [photo, setPhoto] = useState("");
  const [id, setId] = useState("");

//   записываем значения всех полей в поля для редактирования
  useEffect(() => {
    userAPI.getById(idToChange).then((data) => {
      setDate(data.date);
      setPhoto(data.photo);
      setTime(data.time);
      setdescription(data.description);
      setTitle(data.title);
      setId(data.id);
    });
  }, [isModalToChangeOpen]);

  const saveChanges = () => {
    // создаём объект с изменёнными полями
    let config = {
      title,
      description,
      date,
      time,
      photo,
      id: +id,
    } as IChangeSeminar;

    userAPI
      .changeSeminarById(idToChange, config)
      .then((r) =>
        userAPI.loadData().then((data) => dispatch(setSeminarsList(data)))
      )
      .finally(() => dispatch(setCloseChangeModal()));
  };
  return (
    <div
      className={`modal_wrapper  ${isModalToChangeOpen ? "visibleModel" : ""}`}
    >
      <div className={`modal_to_change`}>
        <span>Название</span>
        <input
        className="input_field"
          type="text"
          onChange={(e) => setTitle(e.currentTarget.value)}
          value={title}
        />
        <span>Описание</span>
        <input
        className="input_field"
          type="text"
          onChange={(e) => setdescription(e.currentTarget.value)}
          value={description}
        />
        <span>Дата</span>
        <input
        className="input_field"
          type="text"
          onChange={(e) => setDate(e.currentTarget.value)}
          value={date}
        />
        <span>Время</span>
        <input
        className="input_field"
          type="text"
          onChange={(e) => setTime(e.currentTarget.value)}
          value={time}
        />
        <span>Ссылка на фото</span>
        <input
        className="input_field"
          type="text"
          onChange={(e) => setPhoto(e.currentTarget.value)}
          value={photo}
        />
        <button onClick={saveChanges}>Сохранить</button>
      </div>
    </div>
  );
};
