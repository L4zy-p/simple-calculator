import React from 'react'

interface ButtonProps {
  ctrls: string[],
  last?: boolean,
  setBtn: (ctrl: string) => void
}

const Button: React.FC<ButtonProps> = ({ ctrls, last, setBtn }: ButtonProps) => {
  const itemList = ctrls.map((ctrl, index) => {
    let cl = 'flex-1 bg-slate-700 hover:bg-slate-800'
    let row = ''
    let selectLast = 3
    if (index === 0) {
      row = 'ml-2'
    }
    if (last) {
      if (index === 0) {
        row = 'ml-2'
      }
      selectLast = 2
    }
    if (index === selectLast) {
      if(selectLast === 2){
        console.log()
        cl = 'bg-orange-600 flex-[78px] hover:bg-orange-700'
      }else{
        cl = 'flex-1 bg-orange-600 hover:bg-orange-700'
      }
    }
    return <button key={ctrl} type='button' onClick={() => setBtn(ctrl)} 
    className={`rounded-sm mr-2 mb-2 h-[50px] font-bold select-none active:animate-ping
    ${row} ${cl}`}>{ctrl}</button>
  })
  return (
    <div className='flex'>{itemList}</div>
  )
}

export default Button