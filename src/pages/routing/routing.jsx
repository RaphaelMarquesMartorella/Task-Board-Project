import React, { useState } from "react";
import "./routing.scss";
import Header from "../../components/Header";
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
  const [newTaskDate, setNewTaskDate] = useState([
    "Oct 3 2023",
    "Sep 10 2023",
  ]);
  const [product, setProduct] = useState("");
  const [Index, setIndex] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [display, setDisplay] = useState("none");

  const addTask = () => {
    setOpenModal(true);
  };

  const editTaskModal = (index, product) => {
    setOpenEditModal(true);

    setIndex(index);

    setProduct(product);
  };

  const deleteTaskModal = (index, product) => {
    setIndex(index);

    setOpenDeleteModal(true);

    setProduct(product);
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
            <h3>Data de entrega</h3>
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
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAYCAYAAADpnJ2CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEISURBVHgBvZbtDYIwEIavxv86QkfACdRJdASdwG4AGziCI4AT6AZlA3WC82r6o6mUfsKTXIBA70nLSwODwiDijg5bfXlnjHUwFSQ74T8CpoAaN+imhtI4Zmdyg1yoydq6rqikywg5GM1bU0zn3CGVkAoNPlK9zGZKZEkfrvuxMjG8YL+mlfVsrcUcUsDxJKKe9cEas4ZY1CD9rkIRrl7LABmnQ0vFIZy0RKIn5iFLGiOzk+hDohWaGJnAOCROmESbFmdKoiJtU0b3djTGBVLAOZOohdcImcTUJGq8H75BT7WnX4YeMlgEPtdRbXJlocKGRGpmbyiATyhIdIaCMB2C1cC9D8meUJgv2NoX9z3z1jQAAAAASUVORK5CYII="
                    alt="pencil"
                  />

                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAYCAYAAAAVibZIAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACnSURBVHgB7ZThCcIwEEbvMkHdIBvEUdygK3SEruImjlAnqE5gNzi/k1MCkkrt9UchDy4hOfJIcnBMBUSkwXQs5Zn5QkuAMCJGmUfzsSQ4IR7iRxfgbREN+ZHYntCSDxPizPnOr+LMMKBw09eu/sXKv+3fLjZhxDTSeg5642CLSD4kHQJtQJVWaZXuRjqQD/eP1BpsT/+j5zt4bi9fnrHOn2g517zzPwFd+91ZdhpDggAAAABJRU5ErkJggg=="
                    onClick={() => deleteTaskModal(index, product)}
                    className="trash_can"
                    alt="trash can"
                  />
                  <img
                    src="https://cdn-icons-png.flaticon.com/128/3652/3652191.png"
                    alt="calendar image"
                    className="calendar"
                  />
                </div>
                <div className="section_tasks_dates">
                  <h3>{newTaskDate[index]}</h3>
                </div>
              </div>
            ))}

            <div className="add_task">
              <label htmlFor="">Novas Tarefas ...</label>

              <img
                onClick={addTask}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABxSURBVHgB1ZDdCYAwDIQT6QDdqB3BjTqCK+gGuolOoG7gBvGKfZAQQX0Q/OA4yHH9CZOBiDQwDw3M3NMdUJrlIFl5RS/4ruTw7ggPau6LR+S60+VPJ3lGcGhOUKtOq8ttY9GZjSz+vvKLeV7OAq1WuAOc41yrKV9degAAAABJRU5ErkJggg=="
                alt=""
              />

              <div className="add_task_modal" style={{ display: display }}>
                
                
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
