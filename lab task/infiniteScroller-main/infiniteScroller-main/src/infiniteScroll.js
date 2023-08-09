
import React, { useState, useEffect } from 'react';
import dummyData from './data';

function InfiniteScroll() {
  const [items, setItems] = useState(dummyData.slice(0, 10)); // Initial items to show
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      const newItems = dummyData.slice(items.length, items.length + 10);
      setItems(prevItems => [...prevItems, ...newItems]);
      setIsLoading(false);
    }, 1000); // Simulate a delay
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
      document.documentElement.scrollHeight - 100
    ) {
      loadMore();
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      {isLoading && <p>Loading more...</p>}
    </div>
  );
}

export default InfiniteScroll;
