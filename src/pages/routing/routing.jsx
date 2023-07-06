import React, { useState } from "react";
import "./routing.scss";
import Header from "../../components/Header";
import pencil from "../../images/pencil.png";
import trashCan from "../../images/trashCan.png";
import plusSign from "../../images/plusSign.png";
import AddModal from "../../components/AddModal";
import DeleteModal from "../../components/DeleteModal";
import EditModal from "../../components/EditModal";

const Router = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [newTask, setNewTask] = useState([
    "Limpar a casa",
    "Responder e-mails",
  ]);
  const [product, setProduct] = useState('')
  const [Index, setIndex] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [display, setDisplay] = useState("none");

  const addTask = () => {
    setOpenModal(true);
  };

  const editTaskModal = (index, product) => {
    setOpenEditModal(true);

      setIndex(index);
    
    setProduct(product)
  };

  const deleteTaskModal = (index, product) => {
    setIndex(index);

    setOpenDeleteModal(true);

    setProduct(product)

  };

  const addTaskTitle = (e) => {
    e.preventDefault();
    if (inputValue != "") {
      setNewTask([...newTask, inputValue]);
    }
    setOpenModal(false);
  };

  const deleteTaskTitle = () => {
    const index = Index;
    const newItems = newTask.filter((_, i) => i !== index);
    setNewTask(newItems);
    setOpenDeleteModal(false);
  };

  const editTaskTitle = () => {
    const index = Index;
    const updatedTask = [...newTask];
    updatedTask[index] = inputValue;

    setNewTask(updatedTask);

    setOpenEditModal(false);
  };

  const addInputValue = (e) => {
    setInputValue(e.target.value);

    if (inputValue.length == 0) {
    }
  };

  return (
    <div>
      <nav>
        <Header></Header>
      </nav>

      <section>
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

        <div className="task_manager">
          <div className="h3_titles">
            <h3>Tarefa</h3>
            <h3>Status</h3>
            <h3>Opções</h3>
          </div>

          <div className="section_tasks">
            {newTask.map((product, index) => (
              <div className="new_tasks" key={index}>
                <label htmlFor="">{product}</label>
                <input type="checkBox" name="" id="" />

                <div className="section_tasks_images">
                  <img
                    className="pencil"
                    onClick={() => editTaskModal(index, product)}
                    src={pencil}
                    alt=""
                  />

                  <img
                    src={trashCan}
                    onClick={() => deleteTaskModal(index, product)}
                    className="trash_can"
                    alt=""
                  />
                </div>
              </div>
            ))}

            <div className="add_task">
              <label htmlFor="">Novas Tarefas ...</label>

              <img onClick={addTask} src={plusSign} alt="" />

              <div className="add_task_modal" style={{ display: display }}>
                <section>
                  <h1>
                    Otimize seu tempo e se organize com o nosso Planejador
                    Diário.
                  </h1>
                </section>
              </div>
              <AddModal
                isOpen={openModal}
                setOpenModal={() => setOpenModal(!openModal)}
                addInputValue={addInputValue}
                addTaskTitle={addTaskTitle}
              />
              <DeleteModal
                isOpen={openDeleteModal}
                setOpenModal={() => setOpenDeleteModal(!openDeleteModal)}
                deleteTaskTitle={deleteTaskTitle}
                product={product}
              />
              <EditModal
                isOpen={openEditModal}
                setOpenModal={() => setOpenEditModal(!openEditModal)}
                editTaskTitle={editTaskTitle}
                addInputValue={addInputValue}
                product={product}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export { Router };
