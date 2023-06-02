import React from 'react'

export default function ProjectList({images}) {
  return (
    <div className="container-image">
        {images.map((item, indx) => {
            {return <img className="card" key={indx} src={item.img} />}
        })}
    </div>
  )
}
