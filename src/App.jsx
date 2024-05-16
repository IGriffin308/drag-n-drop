import './App.css'
import { useState } from 'react'

function App() {
  const [widgets, setWidgets] = useState([])

  function handleOnDrag(e, widgetType) {
    e.dataTransfer.setData('widgetType', widgetType)
  }

  function handleOnDrop(e) {
    e.preventDefault()
    const widgetType = e.dataTransfer.getData('widgetType')
    console.log(widgetType)
    setWidgets([...widgets, widgetType])
  }

  function handleOnDragOver(e) {
    e.preventDefault()
  }

  function removeWidget(index) {
    const newWidgets = [...widgets]
    newWidgets.splice(index, 1)
    setWidgets(newWidgets)
  }

  return (
    <>
      <div className="App">
        <div className="widgets">
          <div
            className="widget"
            draggable
            onDragStart={(e) => handleOnDrag(e, 'widget1')}
          >
            Widget 1
          </div>
          <div
            className="widget"
            draggable
            onDragStart={(e) => handleOnDrag(e, 'widget2')}
          >
            Widget 2
          </div>
          <div
            className="widget"
            draggable
            onDragStart={(e) => handleOnDrag(e, 'widget3')}
          >
            Widget 3
          </div>
        </div>
        <div
          className="dropzone"
          onDrop={handleOnDrop}
          onDragOver={handleOnDragOver}
        >
          {widgets.map((widget, index) => (
            <div key={index} className="widget dropped">
              <button className="remove-widget" onClick={(e) => removeWidget(e, index)}>X</button>
              {widget}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
