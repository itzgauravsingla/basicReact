import { MutableRefObject, useCallback, useEffect, useRef, useState } from "react";

function PassGenerator() {

  const [length, setLength] = useState(8);
  const [specialAllowed, setSpecialAllowed] = useState(true);
  const [numberAllowed, setNumberAllowed] = useState(true);
  const [password, setPassword] = useState('Password');
  const passInputRef: MutableRefObject<HTMLInputElement | undefined> = useRef();

  const copyPassword = () => {
    passInputRef.current?.select();
    passInputRef.current?.setSelectionRange(0,99);
    window.navigator.clipboard.writeText(password);
  }

  const generatePassword = useCallback(() => {
    let pass = '';
    let poolString: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) poolString += '1234567890';
    if (specialAllowed) poolString += '!@#$%^&*()-_=+:;{}[]<>,./?';
    const poolStringLength: number = poolString.length;

    for (let i = 0; i < length; i++) {
      let temp = Math.floor(Math.random() * poolStringLength - 1);
      pass += poolString.charAt(temp);
    }

    setPassword(pass);
  }, [length, specialAllowed, numberAllowed, setPassword])

  useEffect(() => {
    generatePassword();
  }, [length, specialAllowed, numberAllowed, setPassword])

  return (
    <>
      <div className="bg-slate-600 dark:bg-slate-300 shadow-md rounded-xl m-2 px-5 py-4 flex flex-col">
        <div className="flex">
          <input type="text" className="flex-grow px-2 py-1" value={password} onChange={() => {}} ref={passInputRef} />
          <button type="button" className="border px-2 py-1" onClick={copyPassword}>Copy Password</button>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-1">
            <input type="range" min={8} max={100} value={length} onChange={(event) => setLength(Number(event.target.value))} />Length ({length})
          </div>
          <div className="flex gap-1">
            <input type="checkbox" defaultChecked={numberAllowed} onChange={() => setNumberAllowed(allowed => !allowed)} /> Number
          </div>
          <div className="flex gap-1">
            <input type="checkbox" defaultChecked={specialAllowed} onChange={() => setSpecialAllowed(allowed => !allowed)} /> Special
          </div>
        </div>
      </div>
    </>
  )
}

export default PassGenerator;