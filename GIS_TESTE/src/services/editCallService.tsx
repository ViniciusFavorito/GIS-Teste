import { ICall } from "../pages/EditCall"


export const editCallService = async ({ name, dtCall, endereco, obs, phone, id }: ICall) => {

    const calls = JSON.parse(String(localStorage.getItem("@calls") || []))

    const editCalls = calls.map((_: ICall, index: number) => {
        if (id === index) {
            return { name, dtCall, endereco, obs, phone }
        }
    })
    localStorage.setItem("@calls", JSON.stringify(editCalls))
    return editCalls
}