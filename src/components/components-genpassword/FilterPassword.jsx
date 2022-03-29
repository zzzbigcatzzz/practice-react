import React from 'react'

const FilterPassword = () => {
  const [arrFilter, setArrFilter] = React.useState(() => {
    return [
      {
        id: 1,
        title: 'Độ dài 12 kí tự',
        value: false
      },
      {
        id: 2,
        title: 'Chứa ít Nhất 1 kí tự đặc biệt',
        value: false
      },
      {
        id: 3,
        title: 'Chứa ít nhất 1 kí tự viết hoa',
        value: false
      },
      {
        id: 4,
        title: 'Chứa ít nhất 1 kí tự viết thường',
        value: false
      },
      {
        id: 5,
        title: 'Chứa ít nhất 1 kí tự là số',
        value: false
      }
    ]
  })
  const handleOnChange = (e, item) => {
    const i = arrFilter.find(j => j.id === item.id)
    if (i) {
      arrFilter.find(j => j.id === item.id).value = e.target.checked
    }
    setArrFilter([...arrFilter])
  }

  React.useEffect(() => {
    //
  }, [arrFilter])

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
