import moment from "moment"

export const getExpirationDate = () =>{
    const currentAnio = moment()
    const nextYear = (currentAnio.add(1,'year'))
    return moment(`01/11/${nextYear.year()}`)
}