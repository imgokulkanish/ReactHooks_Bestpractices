import React , { useState } from 'react'
import ReactDOM from 'react-dom/client'

const Drag = () => {
  let rend
  let create = []
  let arr = []
  const [controls, setControls] = useState([])
  const [indexnum, setIndexNum] = useState(0)
  const getIndex = (e, index) => {
    console.log('Hovered', e)
  }
  const getInput = (e, element) => {
    let create_len = create?.length

    let br = React.createElement('br')
    let label = React.createElement('label', {}, 'Label Name')

    if (element === 'input') {
      let input = React.createElement('input', {
        placeholder: 'Enter you Name',
        type: 'text',
      })
      arr.push({
        id: (indexnum+1),
        type: 'text',
        label: 'Username',
    })
      let create1 = React.createElement('div', { itemID: create_len }, [
        label,
        input,
      ])

      create.push(create1)
    } else if (element === 'checkbox') {
      let input = React.createElement('input', {
        type: 'checkbox',
      })
      arr.push({
        id: (indexnum+1),
        type: 'checkbox',
        label: 'Select the Checkbox',
      })
      let create1 = React.createElement('div', { itemID: create_len }, [
        label,
        input,
        br,
      ])
      create.push(create1)
    } else if (element === 'number') {
      let input = React.createElement('input', {
        type: 'number',
      })
      let create1 = React.createElement(
        'div',
        { itemID: create_len, draggable: 'true' },
        [label, input, br],
      )
      arr.push({
        id: (indexnum+1),
        type: 'number',
        label: 'Enter the Number',
    })
      create.push(create1)
    } else if (element === 'date') {
      let input = React.createElement('input', {
        type: 'date',
      })
      let create1 = React.createElement(
        'div',
        { itemID: create_len, onMouseOver: getIndex },
        [label, input, br],
      )
      arr.push({
        id: (indexnum+1),
        type: 'date',
        label: 'Enter Date of Birth',
    })
      create.push(create1)
    } 
    if (!rend) {
      console.log('before', rend)
      console.log(create)

      rend = ReactDOM.createRoot(document.getElementById('container'))
    }
    rend.render(<div>{create}</div>)
  }

  return (
    <>
      <div className="mainContainer">
        <div className="navList">
          <button draggable="true" onClick={(e) => getInput(e, 'input')}>
            Input Box
          </button>
          <button draggable="true" onDragEnd={(e) => getInput(e, 'checkbox')}>
            Check Box
          </button>
          <button draggable="true" onDragEnd={(e) => getInput(e, 'date')}>
            Input with Date
          </button>
          <button draggable="true" onDragEnd={(e) => getInput(e, 'number')}>
            Input with Number
          </button>
        </div>
        <div id="container"></div>
      </div>
    </>
  )
}

export default Drag