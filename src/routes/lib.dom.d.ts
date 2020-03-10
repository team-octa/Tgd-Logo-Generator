

declare module "canvas" {
    export function registerFont(src: string, fontFace: { family: string, weight?: string, style?: string }): undefined;
}