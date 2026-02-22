export const wrapPromise = <T>(promise: Promise<T>) => {
  let status = 'pending'
  let result: T
  let error: unknown

  const suspender = promise.then(
    (data) => {
      status = 'success'
      result = data
    },
    (err) => {
      status = 'error'
      error = err
    },
  )

  return {
    read(): T {
      if (status === 'pending') {
        throw suspender
      }
      if (status === 'error') {
        throw error
      }
      return result
    },
  }
}
