export const getCall = (id: number) => {

    const getCallsNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@calls')

    const calls = JSON.parse(String(getCallsNoParse)) || []
    const call = calls.find((_: any, index: number) => id === index)
    return call
}
