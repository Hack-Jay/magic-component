/// <reference types="react" />
import { IImageProps, ITextProps } from 'config/type';
interface CheckCondition {
    format?: string[];
    size?: number;
}
declare type ErrorType = 'size' | 'format' | null;
export declare const useDebounce: (value: string, delay?: number) => string;
export declare const textStylePropsName: string[];
export declare const useComponentCommon: (props: Readonly<Partial<ITextProps & IImageProps>>, picks: string[]) => [{
    [key: string]: any;
}, import("react").MouseEventHandler<HTMLDivElement>];
export declare function beforeUploadCheck(file: File, condition: CheckCondition): {
    passed: boolean;
    error: ErrorType;
};
export declare const commonUploadCheck: (file: File) => boolean;
export declare const getImgDimenions: (source: string | File) => Promise<{
    width: number;
    height: number;
}>;
export {};
