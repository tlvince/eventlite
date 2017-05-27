export default ({getState}) => next => action => {
  next(action)
  const state = getState()
  localStorage.setItem('state', JSON.stringify(state))
}
