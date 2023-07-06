import React from "react";
import "./DeleteModal.scss";


const DeleteModal = ({isOpen, setOpenModal, deleteTaskTitle, product}) => {
  if(isOpen){

  return (
    <div>
      <div id="myModal" className="modal-delete">
        <div className="modal-content-delete">
          <h3>Deseja excluir esse item?</h3>
          <p>{product}</p>
          <div className="modal-buttons">
          <button onClick={setOpenModal} className="blue-button">Não</button>
          <button type="submit" onClick={deleteTaskTitle} className="white-button">Sim</button>
          </div>
        </div>
      </div>
    </div>
  );
};
}

export default DeleteModal;
