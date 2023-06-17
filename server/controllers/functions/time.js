



function timeToSeconds(time) {
    let timeParts = time.split(':');
    let hours = parseInt(timeParts[0], 10);
    let minutes = parseInt(timeParts[1], 10);
    let seconds = parseInt(timeParts[2], 10);
    return hours * 3600 + minutes * 60 + seconds;
  }
  

  
  function secondsToTime(seconds) {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secondsRemainder = seconds % 60;
  
    let hoursString = hours.toString().padStart(2, '0');
    let minutesString = minutes.toString().padStart(2, '0');
    let secondsString = secondsRemainder.toString().padStart(2, '0');
  
    return `${hoursString}:${minutesString}:${secondsString}`;
  }


  module.exports = { timeToSeconds, secondsToTime };