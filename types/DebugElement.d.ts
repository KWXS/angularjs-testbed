/// <reference types="jquery" />
/// <reference types="angular" />
export declare class DebugElement {
    constructor(selector: JQuery.Selector | Element | JQuery);
}
export interface DebugElement extends JQLite {
    nativeElement: HTMLElement;
    query(selector: JQuery.Selector | Element | JQuery): DebugElement;
}
