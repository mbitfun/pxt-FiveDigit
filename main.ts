//% weight=70 icon="\uf1ec" color=#00bbd7
namespace fiveDigit {
    //% blockId=show_number block="Show a number %num"
    export function showNumber(num: number = 0, interval: number = 500, totalCount: number = 10): void {
        let str = num.toString()
        let dotPosition = 0
        let dotDuplication = 0
        let NaN = false
        for (let i = str.length - 1; i >= 0; i--)
            if (str.charAt(i) == ".") {
                dotPosition = i
                dotDuplication++
            } else if (parseInt(str.charAt(i)).toString() == "NaN") {
                NaN = true
                break
            }
        str = dotPosition ? (str.substr(0, dotPosition) + str.substr(dotPosition + 1)).substr(0, 5) : str
        if (parseInt(str) > 99999 || dotDuplication > 1 || NaN)
            basic.showString("E")
        else
            for (let count = 0; count < totalCount; count++) {
                for (let x = 0; x < 5; x++) {
                    let p = x - 5 + str.length
                    let d = p < 0 ? 0 : parseInt(str.substr(p, 1))
                    for (let y = 0; y < 5; y++) {
                        let judge = (y > 0 ? (d - 5 * (d < 5 ? 0 : 1) >= 5 - y) : (d > 4))
                        if ((x < dotPosition) ? judge : (((dotPosition != 0 && count % 2) ? 0 : 1) && judge)) led.plot(x, y)
                        else led.unplot(x, y)
                    }
                }
                basic.pause(interval)
            }
    }
}