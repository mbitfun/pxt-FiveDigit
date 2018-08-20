//% weight=70 icon="\uf1ec" color=#00bbd7
namespace fiveDigit {
    //% blockId=show_number block="Show a number %num"
    export function showNumber(num: number = 0): void {
        serial.writeLine("input: " + num.toString())
        let str = num.toString()
        let dotPosition = 0
        for (let i = str.length - 1; i >= 0; i--)
            if (str.charAt(i) == ".") {
                dotPosition = i
            }
        str = str.substr(0, dotPosition || 5)
        serial.writeLine("str: " + str)
        if (num > 99999)
            basic.showString("E")
        else
            for (let x = 0; x < 5; x++) {
                let p = x - 5 + str.length
                let d = p < 0 ? 0 : parseInt(str.substr(p, 1))
                for (let y = 0; y < 5; y++)
                    (y > 0 ? (d - 5 * (d < 5 ? 0 : 1) >= 5 - y) : (d > 4)) ? led.plot(x, y) : led.unplot(x, y)
            }
    }
}
