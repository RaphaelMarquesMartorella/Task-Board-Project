import React from "react";
import "./AddDateModal.scss";


const DeleteModal = ({isOpen, setOpenModal, editTaskDate,  setDateInputValue, product}) => {
  if(isOpen){
  return (
    <div>
      <div id="myModal" className="modal-edit">
        <div className="modal-content-edit">
          <h3>Deseja editar essa data?</h3>
          <p>{product.date}</p>
          <input type="text" onChange={setDateInputValue} placeholder="Defina uma data."/>
          <div className="modal-buttons">
          <button onClick={setOpenModal} className="blue-button">Não</button>
          <button type="submit" onClick={editTaskDate} className="white-button">Sim</button>
          </div>
        </div>
      </div>
    </div>
  );
};
}

export default DeleteModal;
