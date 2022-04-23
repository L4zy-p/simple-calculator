import { operate } from './operate'


export interface CalculateObj {
  total?: string | null,
  next?: string | null,
  operation?: string | null
}

const keyForCal = ['*', '/', '.', '-', '+', 'Enter']

const isNumber = (item: string): boolean => {
  return !!item.match(/[0-9]+/)
}

export const isButtonForCal = (key: string): boolean => {
  return isNumber(key) || keyForCal.includes(key)
}

export const keyPressToKey = (btnName: string): string => {
  switch (btnName) {
    case '*': return 'x'
    case '/': return '÷'
    case 'Enter': return '='
    default: return btnName
  }
}

export const calculate = (obj: CalculateObj, buttonName: string): CalculateObj | undefined => {
  if (buttonName === 'AC') {
    return {
      total: null,
      next: null,
      operation: null
    }
  }

  if (isNumber(buttonName)) {
    if (buttonName === '0' && obj.next === '0') {
      return {}
    }

    if (obj.operation) {
      if (obj.next) {
        return { ...obj, next: obj.next + buttonName }
      }
      return { ...obj, next: buttonName }
    }

    if (obj.next) {
      return {
        next: obj.next + buttonName,
        total: null
      }
    }

    return {
      next: buttonName,
      total: null
    }
  }

  if (buttonName === '.') {
    if (obj.next) {
      if (obj.next.includes('.')) {
        return { ...obj }
      }
      return { ...obj, next: `${obj.next}.` }
    }

    if (obj.operation) {
      return { next: '0.' }
    }

    if (obj.total) {
      if (obj.total.includes('.')) {
        return {}
      }
      return { total: `${obj.total}.` }
    }
    return { total: '0.' }
  }

  if (buttonName === '=') {
    if (obj.next && obj.operation) {
      return {
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: null
      }
    }
    return {}
  }

  if (!obj.next && obj.total && !obj.operation) {
    return { ...obj, operation: buttonName }
  }

  if (obj.operation) {
    if (obj.total && !obj.next) {
      return { ...obj, operation: buttonName }
    }

    return {
      total: operate(obj.total, obj.next, obj.operation),
      next: null,
      operation: buttonName
    }
  }

  if (!obj.next) {
    return { operation: buttonName }
  }

  return {
    total: obj.next,
    next: null,
    operation: buttonName
  }
}