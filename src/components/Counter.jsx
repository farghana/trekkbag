
const Counter = ({numberOfItemsPacked, totalNumberofItems}) => {
  return (
    <div>
      <b>{numberOfItemsPacked}</b> / {totalNumberofItems}{" "}items packed
    </div>
  )
}

export default Counter
