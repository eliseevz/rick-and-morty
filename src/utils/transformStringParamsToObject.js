

export const transformStringParamsToObject = (params) => {
    const split = params.slice(1).split("&")
    let newParams = {}
    split.forEach(param => {
        const splitParam = param.split("=")
        newParams = {...newParams, [splitParam[0]]: splitParam[1]}
    })
    return newParams
}