import { useState } from 'react';
import './CurrentTime.css';

const CurrentTime = ({updateIntervalInSeconds}) => {
  const [timeNow, setTimeNow] = useState(new Date().toString())

  const timeNowUpdater = () => {
    setTimeNow(new Date().toString())
  }

  setInterval(timeNowUpdater, updateIntervalInSeconds * 1000)

  return (
    <div class='current-time'>
      <div>Date Time : changes every {updateIntervalInSeconds} seconds</div>
      <div class="date-time-string">{timeNow}</div>
    </div>
  )
}

export default CurrentTime;