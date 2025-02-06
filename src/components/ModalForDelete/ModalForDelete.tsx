import { userAPI } from "../../api/api";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { setCloseModal,setSeminarsList } from "../../reducers/reducer";

export const ModalForDelete = () => {
  const dispatch = useAppDispatch();
  const { idToDelete, isModalOpen } = useAppSelector((state) => state.reducer);

  const closeModal = () => {
    dispatch(setCloseModal());
  };
  const deleteSeminar = () => {
    {
      userAPI.deleteItem(idToDelete)
      .then(r=>{
        userAPI.loadData()
        .then(data=>dispatch(setSeminarsList(data)))
        .finally(() => closeModal());
      })
     
    }
  };
  return (
    <div className={`modal_wrapper ${isModalOpen ? "visibleModel" : ""}`}>
      <div className="modal">
        <span> Выдействительно хотите удалить семинар?</span>
        <div className="btns_delete_group">
          <button onClick={closeModal}>Отмена</button>
          <button onClick={deleteSeminar}>Удалить</button>
        </div>
      </div>
    </div>
  );
};
