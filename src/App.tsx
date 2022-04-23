import { useState } from 'react'
import { calculate, CalculateObj, isButtonForCal, keyPressToKey } from './utils'
import { Button, Display } from './components'

function App() {
  const [state, setState] = useState<CalculateObj | undefined>({
    total: null,
    next: null,
    operation: null,
  })

  const buffer = `${state?.total}${state?.operation}${state?.next}`.replace(/null/g, '')
  const window = buffer.replace(/undefined/g, '')

  const onBtnPressed = (btnName: string, isKeyDown?: boolean) => {
    if ((btnName === 'Backspace' || btnName === '←')) {
      if (state?.next && state?.next?.length === 1) {
        setState({ ...state, next: null })
      }
      if (state?.next && state?.next?.length > 1) {
        setState({
          ...state,
          next: state?.next?.substring(0, state?.next?.length - 1)
        })
      }
      return
    }
    if (isKeyDown && !isButtonForCal(btnName)) {
      return
    }

    const key = keyPressToKey(btnName)

    const result = calculate(state || {}, key)
    setState(result)
  };

  return (
    <>
      <div className='w-full h-full flex justify-center items-center bg-gray-700'
        onKeyDown={(e) => onBtnPressed(e.key, true)}
        tabIndex={0}>

        <div className='bg-gray-900 text-[#ddd] w-[320px] rounded-md shadow-black shadow-sm'>
          <p className='m-3 text-sm font-bold'>Simple Calculate</p>
          <Display display={window === '' ? '0' : window} />
          <Button ctrls={['AC', '←', '%', '÷']} setBtn={onBtnPressed} />
          <Button ctrls={['7', '8', '9', 'x']} setBtn={onBtnPressed} />
          <Button ctrls={['4', '5', '6', '-']} setBtn={onBtnPressed} />
          <Button ctrls={['1', '2', '3', '+']} setBtn={onBtnPressed} />
          <Button ctrls={['0', '.', '=']} setBtn={onBtnPressed} last />
        </div>
      </div>
    </>
  )
}

export default App
