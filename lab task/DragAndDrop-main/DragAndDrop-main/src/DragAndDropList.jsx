import React, { useState } from 'react';
import './index.css';
const DragAndDropList = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
    { id: 4, name: 'Item 4' },
    { id: 5, name: 'Item 5' },
    { id: 6, name: 'Item 6' },
    // Add more items as needed
  ]);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (draggedIndex !== null) {
      const newItems = [...items];
      const draggedItem = newItems[draggedIndex];
      newItems.splice(draggedIndex, 1);
      newItems.splice(dropIndex, 0, draggedItem);
      setItems(newItems);
      setDraggedIndex(null);
    }
  };

  return (
    <div className="drag-drop-list">
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DragAndDropList;
