export const REQUEST = 'REQUEST'
export const ERROR = 'ERROR'
export const RESPOSTA = 'RESPOSTA'

export const actionRequest = () => ({type: REQUEST})

export const actionError = (e) => ({type: ERROR, e})

const actionResposta = (data) => ({type: RESPOSTA, payload: data})

export const actionThunk = (param) => async (dispatch) => {
  dispatch(actionRequest())
try {
    const response = await fetch(`https://www.reddit.com/r/${param}.json`)
    const json = await response.json()
    console.log(json);
    dispatch(actionResposta(json))
  }
  catch (e) {

    return dispatch(actionError(e))
  }
  
}