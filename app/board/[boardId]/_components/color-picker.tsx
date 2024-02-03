"use client"

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
    onChange: (color: Color) => void;
}

export const ColorPicker = ({ onChange }: ColorPickerProps) => {
    return <div className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200">
        <ColorButton color={{
            r: 50,
            g: 205,
            b: 50
        }} onClick={onChange} />

        <ColorButton color={{
            r: 65,
            g: 105,
            b: 255
        }} onClick={onChange} />

        <ColorButton color={{
            r: 139,
            g: 0,
            b: 139
        }} onClick={onChange} />

        <ColorButton color={{
            r: 210,
            g: 105,
            b: 30
        }} onClick={onChange} />

    </div>
}

interface ColorButtonProps {
    onClick: (color: Color) => void;
    color: Color
}

const ColorButton = ({ onClick, color }: ColorButtonProps) => {
    return <button
        className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
        onClick={() => onClick(color)}
    >
        <div className="h-8 w-8 rounded-md border border-neutral-300"
            style={{
                background: colorToCss(color)
            }}
        />

    </button>

}