import Big from 'big.js'

export const operate = (num1?: string | null, num2?: string | null, operation?: string | null): string => {
  const n1 = Big(num1 || 0)
  const n2 = Big(num2 || 0)

  switch (operation) {
    case '+': return n1.plus(n2).toString()
    case '-': return n1.minus(n2).toString()
    case 'x': return n1.mul(n2).toString()
    case '÷': try {
      return n1.div(n2).toString()
    } catch (err) {
      return `Can't divide by 0`
    }
    case '%': try {
      return n1.mod(n2).toString()
    } catch (err) {
      return `Can't modulo by 0`
    }
    default: throw Error(`Unkwon ${operation}`)
  }
}