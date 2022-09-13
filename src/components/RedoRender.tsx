import React from 'react';

const RedoRender = () => {
  return (
    <div>
      {
        (() => {
          console.log('重新渲染')
          return null;
        })()
      }
    </div>
  )
}

export default RedoRender;