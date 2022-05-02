// Show the project : 1A
basic.showString("1A")
basic.forever(function () {
    // If the Right light sensor
    // detects the black line.
    if (sensors.sensor_infraredTracking(DigitalPin.P1)) {
        // Right motor stops.
        motorbit.MotorRun(motorbit.Motors.B01B02, 0)
        // Left motor moves forward.
        motorbit.MotorRun(motorbit.Motors.B03B04, 40)
    } else {
        // Otherwise, Right motor moves forward.
        motorbit.MotorRun(motorbit.Motors.B01B02, 40)
        // Left motor stops.
        motorbit.MotorRun(motorbit.Motors.B03B04, 0)
    }
})
