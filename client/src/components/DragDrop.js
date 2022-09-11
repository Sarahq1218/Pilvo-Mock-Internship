import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import './drag-drop.css'
const DropFileInput = props => {
  const wrapperRef = useRef(null)

  const [fileList, setFileList] = useState([])

  const onDragEnter = () => wrapperRef.current.classList.add('dragover')

  const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

  const onDrop = () => wrapperRef.current.classList.remove('dragover')

  const onFileDrop = e => {
    const newFile = e.target.files[0]
    if (newFile) {
      const updatedList = [...fileList, newFile]
      setFileList(updatedList)
      props.handleFile(e)
      props.onFileChange(updatedList)
    }
  }

  const fileRemove = file => {
    const updatedList = [...fileList]
    updatedList.splice(fileList.indexOf(file), 1)
    setFileList(updatedList)
    props.onFileChange(updatedList)
  }

  return (
    <>
      <div
        ref={wrapperRef}
        className='drop-file-input'
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        <div className='drop-file-input__label'>
          <svg class="mb-3 ml-10 w-14 h-10 text-[#006970]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
          <p class="text-[#1D5257] font-normal text-xl">+ Attach a file</p>
        </div>
        <input type='file' value='' onChange={onFileDrop} />
      </div>
      {fileList.length > 0 ? (
        <div className='drop-file-preview'>
          <p className='drop-file-preview__title'>Ready to submit!</p>
          {fileList.map((item, index) => (
            <div key={index} className='drop-file-preview__item'>
              <img
                src={'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png'}
                alt=''
              />
              <div className='drop-file-preview__item__info'>
                <p>{item.name}</p>
                <p>{item.size}B</p>
              </div>
              <span
                className='drop-file-preview__item__del'
                onClick={() => fileRemove(item)}
              >
                x
              </span>
            </div>
          ))}
        </div>
      ) : null}
    </>
  )
}

DropFileInput.propTypes = {
  onFileChange: PropTypes.func,
}

export default DropFileInput
