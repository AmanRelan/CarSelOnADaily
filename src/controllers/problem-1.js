function angleClock(hour, minutes) {
    //Since there are 60 minutes so every minute => 360/6 = 6 degrees
    const minuteAngle = minutes * 6;
    //Since there are 12 hours, so hour hand moves => 360/12 = 30 degrees
    const hourAngle = (hour * 30) + (minutes * 0.5);
    const angle = Math.abs(hourAngle - minuteAngle);
    return Math.min(angle, 360 - angle);
}

module.exports = angleClock;