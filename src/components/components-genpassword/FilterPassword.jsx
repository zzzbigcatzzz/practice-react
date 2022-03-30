// import React from 'react'

const FilterPassword = ({ arrFilter, setArrFilter }) => {
  const handleOnChange = (e, item) => {
    const i = arrFilter.find(j => j.id === item.id)
    if (i) {
      arrFilter.find(j => j.id === item.id).value = e.target.checked
    }
    setArrFilter([...arrFilter])
  }

  return (
    <div className="list">
      {
        arrFilter.map(filter => {
          return (
            <div className="listFilter" key={filter.id}>
              <input type='checkbox' value={filter.value} onChange={(e) => handleOnChange(e, filter)} />
              {filter.title}
            </div>
          )
        })
      }
    </div>
  )
}

export default FilterPassword
