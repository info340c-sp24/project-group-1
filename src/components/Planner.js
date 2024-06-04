import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import '../css/project-styling.css';

const Planner = ({ plannerData, updatePlannerData }) => {
  const requirements = {
    'INFO Prereqs': { courses: ['INFO 200', 'INFO 201', 'STAT 221'], needed: 3},
    'INFO Core Courses': { courses: ['INFO 290', 'INFO 300', 'INFO 330', 'INFO 340', 'INFO 360', 'INFO 380'], needed: 6},
    'INFO Ethics Courses': { courses: ['INFO 35', 'INFO 35'], needed: 2},
    'Advanced Coding Course 1': { courses: ['CSE 123', 'CSE 163'], needed: 1},
    'Advanced Coding Course 2': { courses: ['INFO 442', 'CSE 373'], needed: 1},
    'Capstone': { courses: ['INFO 490', 'INFO 491'], needed: 2},
    'Intensive Capstone': { courses: ['INFO 492'], needed: 1},
    'Data Science Option': { courses: ['INFO 370', 'INFO 371', 'INFO 430', 'INFO 474'], needed: 4},
    'Biomedical and Health Informatics Option': { courses: ['BIME 300', 'BIME 435', 'INFO 468', 'INFO 478'], needed: 4}
  };

  const [completedRequirements, setCompletedRequirements] = useState({});

  useEffect(() => {
    const updatedCompletedRequirements = {};
    Object.keys(requirements).forEach(req => {
      const requirement = requirements[req];
      const completedCourses = requirement.courses.filter(course =>
        Object.values(plannerData.columns).some(column => column.courseIds.includes(course))
      ).length;

      updatedCompletedRequirements[req] = completedCourses >= requirement.needed;
    });
    setCompletedRequirements(updatedCompletedRequirements);
  }, [plannerData]);

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
    <div className="planner-container">
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

        {/* Checklist */}
        <div className="checklist">
          <h2>Checklist</h2>
          <ul>
            {Object.keys(requirements).map(req => (
              <li key={req}>
                <input type="checkbox" checked={completedRequirements[req]} readOnly />
                <label>{req}</label>
              </li>
            ))}
          </ul>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Planner;
