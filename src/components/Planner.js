import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import '../css/project-styling.css';

const Planner = ({ plannerData, updatePlannerData }) => {
  const requirements = {
    'CSE': ['CSE 373', 'CSE 122', 'CSE 123'], // Example requirement
    // Add more requirements as needed
  };

  const [completedRequirements, setCompletedRequirements] = useState({});

  useEffect(() => {
    const updatedCompletedRequirements = {};
    Object.keys(requirements).forEach(req => {
      updatedCompletedRequirements[req] = requirements[req].every(course => plannerData.columns['column-1'].courseIds.includes(course));
    });
    setCompletedRequirements(updatedCompletedRequirements);
  }, [plannerData]);

  const onDragEnd = (result) => {
    // Your existing code for dragging
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

      {/* Checklist */}
      <div className="checklist">
        <h3>Requirements</h3>
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
  );
};

export default Planner;
