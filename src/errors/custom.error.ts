export class CustomError extends Error {
  statusCode?: number
  
  constructor(message: string, statusCode = 500, name = '') {
    super(message)
    this.name = name
    this.statusCode = statusCode
  }
}
