export function replaceQuotes(str:string){
    return str.replace(/&#039/, "\'").replace(/&quot;/, "\"")
}