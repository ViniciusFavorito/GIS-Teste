export const getCalls = () => {

    const getCallsNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@calls')
    console.log(getCallsNoParse)
    const calls = JSON.parse(String(getCallsNoParse)) || []

    return calls
}
