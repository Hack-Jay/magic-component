import React from 'react';
import { ITextProps, IImageProps } from './type';
export interface IOption {
    label: string | React.ReactNode;
    value: any;
}
export interface PropsToForm {
    component: string;
    text?: string;
    value?: string;
    extraProps?: {
        [key: string]: any;
    };
    subComponent?: string;
    options?: IOption[];
    initalTransform?: (v: any) => any;
    changeTransform?: (v: any) => any;
    valueProp?: string;
    eventName?: string;
}
export declare type PropsToForms = {
    [P in keyof (ITextProps & IImageProps)]?: PropsToForm;
};
export declare const mapPropsToForm: PropsToForms;
