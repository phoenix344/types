declare module "sodium-signatures" {
    interface SodiumSignaturesKeyPair {
        publicKey: Buffer;
        secretKey: Buffer;
    }
    
    export function keyPair(seed?: Buffer): SodiumSignaturesKeyPair;
    export function sign(message: Buffer, secretKey: Buffer): Buffer;
    export function verify(message: Buffer, signature: Buffer, publicKey: Buffer): boolean;
}