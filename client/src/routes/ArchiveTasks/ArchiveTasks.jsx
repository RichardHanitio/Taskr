import React from 'react'
import Navbar from "../../components/common/Navbar/Navbar";
import PopUp from "../../components/common/PopUp/PopUp";
import Tasks from "../../components/Tasks/Tasks";
import "./archivetasks.scss"
import useTasks from "../../hooks/useTasks";
import useModals from "../../hooks/useModals";

const ArchiveTasks = () => {
  const {isOpen, closeModal, modalContent, content} = useModals();
  const {archivedTasks, clearArchivedTasks, deleteTask, restoreArchivedTask, isLoading} = useTasks({modalContent});
  return (
    <section className="archivedtasks-section">
      <div className="archivedtasks-container">
        <div className="archivedtasks-title">Archived Tasks</div>
        {archivedTasks.length > 0 && (
          <div className="archivedtasks-info">
            <div className="archivedtasks-info-container">
              <span className="archivedtasks-info-notif">
                Tasks archived are deleted forever after 30 days
              </span>
              <span
                className="archivedtasks-info-cta"
                onClick={clearArchivedTasks}
              >
                Clear Archive
              </span>
            </div>
          </div>
        )}
        <Navbar />
        <Tasks
          tasks={archivedTasks}
          className="archivedtasks-tasks"
          deleteTask={deleteTask}
          restoreTask={restoreArchivedTask}
          isLoading={isLoading}
          message="No task archived (⁠.⁠ ⁠❛⁠ ⁠ᴗ⁠ ⁠❛⁠.⁠)"
        />

        <PopUp open={isOpen} close={closeModal} image={content.image}>
          {content.message}
        </PopUp>
      </div>
    </section>
  );
}

export default ArchiveTasks