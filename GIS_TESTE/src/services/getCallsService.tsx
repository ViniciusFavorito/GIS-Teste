export const getCalls = () => {

    const getCallsNoParse = typeof Storage !== 'undefined' && localStorage.getItem('@calls')
    const calls = JSON.parse(String(getCallsNoParse)) || []

    return calls
}
