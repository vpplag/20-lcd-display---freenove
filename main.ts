I2C_LCD1602.LcdInit(0)
basic.forever(function () {
    I2C_LCD1602.ShowString("Good Morning", 2, 0)
    I2C_LCD1602.ShowString("Temperature: " + input.temperature() + "C", 0, 1)
})
