import 'angular-mocks';
import { ModuleConfig, Type } from 'angular-ts-decorators';
import { ComponentFixture } from './ComponentFixture';
/**
 * @whatItDoes Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 * @description
 *
 * TestBed is the primary api for writing unit tests for Angular applications and libraries.
 */
export declare class TestBed {
    private _providers;
    private _declarations;
    private _imports;
    private _activeFixtures;
    private _moduleRef;
    private _instantiated;
    /**
     * Allows overriding default providers, directives, pipes, modules of the test injector,
     * which are defined in test_injector.js
     */
    static configureTestingModule(moduleDef: ModuleConfig): typeof TestBed;
    static resetTestingModule(): typeof TestBed;
    static compileComponents(): void;
    static createComponent<T>(component: Type<T>): ComponentFixture<T>;
    static get(token: any): any;
    get(token: any): any;
    configureTestingModule(moduleDef: ModuleConfig): void;
    resetTestingModule(): void;
    compileComponents(): void;
    createComponent<T>(component: Type<T>): ComponentFixture<T>;
    private _initIfNeeded;
    private _createModule;
    private _compileComponent;
}
export declare function getTestBed(): TestBed;
