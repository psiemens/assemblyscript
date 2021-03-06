// Imported callbacks
export declare function onSection(id: u32, offset: u32, length: u32, nameOffset: u32, nameLength: u32): bool;
export declare function onType(index: u32, form: u32): void;
export declare function onTypeParam(index: u32, paramIndex: u32, paramType: u32): void;
export declare function onTypeReturn(index: u32, returnIndex: u32, returnType: u32): void;
export declare function onImport(index: u32, kind: u32, moduleOff: u32, moduleLen: u32, fieldOff: u32, fieldLen: u32): void;
export declare function onFunctionImport(index: u32, type: u32): void;
export declare function onTableImport(index: u32, type: u32, initial: u32, maximum: u32, flags: u32): void;
export declare function onMemoryImport(index: u32, initial: u32, maximum: u32, flags: u32): void;
export declare function onGlobalImport(index: u32, type: u32, mutability: u32): void;
export declare function onMemory(index: u32, initial: u32, maximum: u32, flags: u32): void;
export declare function onFunction(index: u32, typeIndex: u32): void;
export declare function onGlobal(index: u32, type: u32, mutability: u32): void;
export declare function onExport(index: u32, kind: u32, kindIndex: u32, nameOffset: u32, nameLength: u32): void;
export declare function onStart(index: u32): void;
export declare function onSourceMappingURL(offset: u32, length: u32): void;
export declare function onModuleName(offset: u32, length: u32): void;
export declare function onFunctionName(index: u32, offset: u32, length: u32): void;
export declare function onLocalName(funcIndex: u32, index: u32, offset: u32, length: u32): void;
