import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import '../css/project-styling.css';

const Planner = ({ plannerData, updatePlannerData }) => {
  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const startColumn = plannerData.columns[source.droppableId];
    const finishColumn = plannerData.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newCourseIds = Array.from(startColumn.courseIds);
      newCourseIds.splice(source.index, 1);
      newCourseIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        courseIds: newCourseIds,
      };

      const newState = {
        ...plannerData,
        columns: {
          ...plannerData.columns,
          [newColumn.id]: newColumn,
        },
      };

      updatePlannerData(newState);
      return;
    }

    const startCourseIds = Array.from(startColumn.courseIds);
    startCourseIds.splice(source.index, 1);
    const newStartColumn = {
      ...startColumn,
      courseIds: startCourseIds,
    };

    const finishCourseIds = Array.from(finishColumn.courseIds);
    finishCourseIds.splice(destination.index, 0, draggableId);
    const newFinishColumn = {
      ...finishColumn,
      courseIds: finishCourseIds,
    };

    const newState = {
      ...plannerData,
      columns: {
        ...plannerData.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };

    updatePlannerData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="index-container">
        {Object.values(plannerData.columns).map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div className="index-column" ref={provided.innerRef} {...provided.droppableProps}>
                <h2>{column.title}</h2>
                {column.courseIds.map((courseId, index) => {
                  const course = plannerData.courses[courseId];
                  return (
                    <Draggable key={course.id} draggableId={course.id} index={index}>
                      {(provided) => (
                        <div
                          className="index-box"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h3>
                            <Link to={`/courses/${course.code}`}>{course.code}</Link>
                          </h3>
                          <p>{course.title}</p>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
};

export default Planner;
