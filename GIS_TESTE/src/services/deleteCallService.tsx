export const deleteCall = (id: number) => {

    const getCallsNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@calls')

    const calls = JSON.parse(String(getCallsNoParse)) || []
    const newCalls = calls.filter((_: any, index: number) => id !== index)
    localStorage.setItem("@calls", JSON.stringify(newCalls))
    return newCalls
}
