
const arrFilter = [
  {
    title: 'Độ dài 12 kí tự',
    click: ''
  },
  {
    title: 'Chứa ít Nhất 1 kí tự đặc biệt',
    click: ''
  },
  {
    title: 'Chứa ít nhất 1 kí tự viết hoa',
    click: ''
  },
  {
    title: 'Chứa ít nhất 1 kí tự viết thường',
    click: ''
  },
  {
    title: 'Chứa ít nhất 1 kí tự là số',
    click: ''
  }
]
const FilterPassword = () => {
  return (
    <div className="list">
      {
        arrFilter.map(filter => {
          return (
            <div className="listFilter" key={filter.title}>
              <input type='checkbox' />
              {filter.title}
            </div>
          )
        })
      }
    </div>
  )
}

export default FilterPassword
