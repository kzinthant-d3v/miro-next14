import { cn, colorToCss, getContrastingTextColor } from "@/lib/utils";
import { useMutation } from "@/liveblocks.config";
import { NoteLayer } from "@/types/canvas";
import { Kalam } from "next/font/google";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

const font = Kalam({
    subsets: ['latin'],
    weight: ["400"]
})

interface NoteProps {
    id: string;
    layer: NoteLayer;
    onPointerDown: (e: React.PointerEvent, layerId: string) => void;
    selectionColor?: string;
}

const calculateFontSize = (width: number, height: number) => {
    const maxFontSize = 96;
    const scaleFactor = 0.2;
    const fontSizeBasedOnHeight = height * scaleFactor;
    const fontSizeBasedOnWidth = width * scaleFactor;

    return Math.min(maxFontSize, fontSizeBasedOnHeight, fontSizeBasedOnWidth);

}

export const Note = ({ id, layer, onPointerDown, selectionColor }: NoteProps) => {
    const { x, y, width, height, fill, value } = layer;

    const updateValue = useMutation((
        { storage },
        newValue: string,
    ) => {
        const liveLayers = storage.get("layers");
        liveLayers.get(id)?.set("value", newValue);
    }, [])

    const handleContentEditableChange = (e: ContentEditableEvent) => {
        updateValue(e.target.value)
    }

    return <foreignObject
        x={x}
        y={y}
        width={width}
        height={height}
        onPointerDown={e => onPointerDown(e, id)}
        style={{
            outline: selectionColor ? `2px solid ${selectionColor}` : "none",
            backgroundColor: fill ? colorToCss(fill) : "#CCC",
        }}
        className="shadow-md drop-shadow-xl"
    >
        <ContentEditable
            html={value || "Text"}
            onChange={handleContentEditableChange}
            className={cn(
                "h-full w-full flex items-center justify-center text-center outline-none",
                font.className
            )}
            style={{
                fontSize: calculateFontSize(width, height),
                color: fill ? getContrastingTextColor(fill) : "#CCC",
            }}
        />
    </foreignObject>
}