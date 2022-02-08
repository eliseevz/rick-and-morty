

export const transformFilterParams = (config) => {
    let params = {page: 1}
    const trasnformed = Object.keys(config).forEach(element => {
        const isEmpty = config[element].value.length === 0
        if (!isEmpty && config[element].value !== "Not selected") {
            params = {...params, [element]: config[element].value}
        }
    })
    return params
}