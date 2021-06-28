/// <reference types="react" />
import { IImageProps, ITextProps } from "config/type";
export declare const textStylePropsName: string[];
export declare const useComponentCommon: (props: Readonly<Partial<ITextProps & IImageProps>>, picks: string[]) => [{
    [key: string]: any;
}, import("react").MouseEventHandler<HTMLDivElement>];
