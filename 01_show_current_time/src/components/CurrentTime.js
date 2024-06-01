import { useState } from 'react';

const CurrentTime = () => {
  const [timeNow, setTimeNow] = useState(new Date().toString())
  const updateIntervalInSeconds = 3;

  const timeNowUpdater = () => {
    setTimeNow(new Date().toString())
  }

  setInterval(timeNowUpdater, updateIntervalInSeconds * 1000)

  return (
    <>
    <div>Date Time : changes every {updateIntervalInSeconds} seconds</div>
    <div class="date-time-string">{timeNow}</div>
    </>
  )
}

export default CurrentTime;