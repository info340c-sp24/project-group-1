import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Link } from 'react-router-dom';
import '../css/project-styling.css';

const initialData = {
    columns: {
      'column-1': {
        id: 'column-1',
        title: 'Autumn 2024',
        courseIds: ['course-1', 'course-2', 'course-3'],
      },
      'column-2': {
        id: 'column-2',
        title: 'Winter 2025',
        courseIds: ['course-4', 'course-5', 'course-6'],
      },
      'column-3': {
        id: 'column-3',
        title: 'Spring 2025',
        courseIds: ['course-7', 'course-8', 'course-9'],
      },
    },
    courses: {
      'course-1': { id: 'course-1', code: 'CSE122', title: 'CSE 122', description: 'Introduction to Computer Programming II' },
      'course-2': { id: 'course-2', code: 'INFO380', title: 'INFO 380', description: 'Product and Information Systems Management' },
      'course-3': { id: 'course-3', code: 'INFO300', title: 'INFO 300', description: 'Research Methods' },
      'course-4': { id: 'course-4', code: 'INFO330', title: 'INFO 330', description: 'Databases and Data Modeling' },
      'course-5': { id: 'course-5', code: 'CSE123', title: 'CSE 123', description: 'Introduction to Computer Programming III' },
      'course-6': { id: 'course-6', codee: 'INFO360', title: 'INFO 360', description: 'Design Methods' },
      'course-7': { id: 'course-7', code: 'INFO340', title: 'INFO 340', description: 'Client-Side Development', link: 'info340-course-page.html' },
      'course-8': { id: 'course-8', code: 'INFO351', title: 'INFO 351', description: 'Information Ethics and Policy' },
      'course-9': { id: 'course-9', code: 'CSE373', title: 'CSE 373', description: 'Data Structures and Algorithms' },
    },
  };
  
  const Planner = () => {
    const [data, setData] = useState(initialData);
  
    const onDragEnd = (result) => {
      const { destination, source, draggableId } = result;
  
      if (!destination) {
        return;
      }
  
      if (destination.droppableId === source.droppableId && destination.index === source.index) {
        return;
      }
  
      const column = data.columns[source.droppableId];
      const newCourseIds = Array.from(column.courseIds);
      newCourseIds.splice(source.index, 1);
      newCourseIds.splice(destination.index, 0, draggableId);
  
      const newColumn = {
        ...column,
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
                              <Link to={`/courses/${course.code}`}>{course.title}</Link>
                            </h3>
                            <p>{course.description}</p>
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