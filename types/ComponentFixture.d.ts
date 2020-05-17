/// <reference types="angular" />
import { DebugElement } from './DebugElement';
export declare class ComponentFixture<T> {
    private element;
    /**
     * The DebugElement associated with the root element of this component.
     */
    debugElement: DebugElement;
    /**
     * The instance of the root component class.
     */
    componentInstance: any;
    /**
     * The native element at the root of the component.
     */
    nativeElement: HTMLElement;
    private _isDestroyed;
    constructor(element: JQLite);
    /**
     * Trigger a change detection cycle for the component.
     */
    detectChanges(): void;
    detectChangesDOM($div: any, bindings: any): void;
    /**
     * Trigger component destruction.
     */
    destroy(): void;
}
