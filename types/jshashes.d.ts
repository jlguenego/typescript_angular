declare module 'jshashes' {
    export class MD5 {
        hex: (x: string) => string
    }
    export interface IHashes {
        MD5: MD5;
    }
    export var Hashes: IHashes;
}
