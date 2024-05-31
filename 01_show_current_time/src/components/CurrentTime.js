import { useState } from 'react';

const CurrentTime = () => {
  const [timeNow, setTimeNow] = useState(new Date().toString())

  const timeNowUpdater = () => {
    setTimeNow(new Date().toString())
  }

  setInterval(timeNowUpdater, 3000)

  return (
    <>
    <div>Date Time now</div>
    <div class="date-time-string">{timeNow}</div>
    </>
  )
}

export default CurrentTime;