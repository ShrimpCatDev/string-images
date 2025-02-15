//% color="#5c70ff"
namespace strings{
let index = 0
//% block="draw string x $x y $y width $width height $height color 0 $color_2 color 1 $color_1 output $output string $string"
//% output.shadow=screen_image_picker
//% inlineInputMode=inline
export function drawString (color_1: number, color_2: number, width: number, height: number, string: string, x: number, y: number, output: Image) {
    index = 0
    for (let Y = 0; Y <= height - 1; Y++) {
        for (let X = 0; X <= width - 1; X++) {
            if (string.charAt(index) == "1") {
                scene.backgroundImage().setPixel(X + x, Y + y, color_1)
            } else {
                scene.backgroundImage().setPixel(X + x, Y + y, color_2)
            }
            index += 1
        }
    }
}
}