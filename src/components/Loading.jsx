'use client'
import React from 'react'

const Loading = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-lg">Loading...</p>
      </div>
    </div>
  )
}

export default Loading 