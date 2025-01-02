import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('bg-olive-600');
  
  const colors = [
    { name: 'Red', class: 'bg-red-500' },
    { name: 'Green', class: 'bg-green-600' },
    { name: 'Blue', class: 'bg-blue-600' },
    { name: 'Olive', class: 'bg-olive-600' },
    { name: 'Gray', class: 'bg-gray-500' },
    { name: 'Yellow', class: 'bg-yellow-400' },
    { name: 'Pink', class: 'bg-pink-400' },
    { name: 'Purple', class: 'bg-purple-600' },
    { name: 'Lavender', class: 'bg-purple-300' },
    { name: 'White', class: 'bg-white' },
    { name: 'Black', class: 'bg-black' }
  ];

  const handleColorChange = (colorClass) => {
    setSelectedColor(colorClass);
    document.body.className = colorClass;
  };

  return (
    <div className="fixed flex gap-2 p-2 transform -translate-x-1/2 bg-white rounded-full shadow-lg bottom-8 left-1/2">
      {colors.map((color) => (
        <button
          key={color.name}
          onClick={() => handleColorChange(color.class)}
          className={`w-16 h-8 rounded-full ${color.class} ${
            color.name === 'White' ? 'border border-gray-200' : ''
          } hover:scale-110 transition-transform`}
          aria-label={`Select ${color.name}`}
        >
          <span className="sr-only">{color.name}</span>
        </button>
      ))}
    </div>
  );
};

export default ColorPicker;