import Footer from "@components/Footer";
import Header from "@components/Header";
import ToDoForm from "@components/ToDoForm";
import useTodos from "@hooks/useTodos";

const HomePage = () => {
  const {
    filteredTasks,
    filterStatus,
    setFilterStatus,
    activeCount,
    addTask,
    editTask,
    deleteTask,
    toggleCheckbox,
    selectAll,
    clearCompleted,
  } = useTodos();

  return (
    <>
      <Header onAddTodo={addTask} />
      <ToDoForm
        todos={filteredTasks}
        onDeleteTodo={deleteTask}
        toggle={toggleCheckbox}
        onEdit={editTask}
      />
      <Footer
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
        activeCount={activeCount}
        selectAll={selectAll}
        clearCompleted={clearCompleted}
      />
    </>
  );
};

export default HomePage;
