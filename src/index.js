/**
 * redux-log
 */

function reduxLog (log) {
  log = log || []
  return ctx => next => action => {
    log.push(action)
    next(action)
  }
}

/**
 * Exports
 */

export default reduxLog
