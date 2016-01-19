/**
 * redux-log
 */

function reduxLog (log) {
  log = log || []
  return ctx => next => action => {
    log.push(action)
    return next(action)
  }
}

/**
 * Exports
 */

export default reduxLog
