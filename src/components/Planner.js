import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import '../css/project-styling.css';

const initialData = {
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'Autumn 2024',
      courseIds: [],
    },
    'column-2': {
      id: 'column-2',
      title: 'Winter 2025',
      courseIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Spring 2025',
      courseIds: [],
    },
  },
  courses: {},
};

const Planner = ({ plannerCourses }) => {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    const newCourses = {};
    const newCourseIds = plannerCourses.map((course) => {
      newCourses[course.code] = { id: course.code, ...course };
      return course.code;
    });

    const updatedData = {
      ...data,
      courses: { ...data.courses, ...newCourses },
      columns: {
        ...data.columns,
        'column-1': {
          ...data.columns['column-1'],
          courseIds: [...data.columns['column-1'].courseIds, ...newCourseIds],
        },
      },
    };

    setData(updatedData);
  }, [plannerCourses]);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const startColumn = data.columns[source.droppableId];
    const finishColumn = data.columns[destination.droppableId];

    if (startColumn === finishColumn) {
      const newCourseIds = Array.from(startColumn.courseIds);
      newCourseIds.splice(source.index, 1);
      newCourseIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...startColumn,
        courseIds: newCourseIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };

      setData(newState);
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
      ...data,
      columns: {
        ...data.columns,
        [newStartColumn.id]: newStartColumn,
        [newFinishColumn.id]: newFinishColumn,
      },
    };

    setData(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="index-container">
        {Object.values(data.columns).map((column) => (
          <Droppable key={column.id} droppableId={column.id}>
            {(provided) => (
              <div className="index-column" ref={provided.innerRef} {...provided.droppableProps}>
                <h2>{column.title}</h2>
                {column.courseIds.map((courseId, index) => {
                  const course = data.courses[courseId];
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
