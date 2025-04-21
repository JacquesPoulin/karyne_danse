'use client';

import React from 'react';

export default function LoadingIndicator() {
  return (
    <div className="flex justify-center py-12">
      <div className="animate-pulse flex space-x-2">
        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
        <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
      </div>
    </div>
  );
}