'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [text, setText] = useState<string>('Hi34');

  const changeText = (btnText: string) => {
    setText(btnText);
  };

  useEffect(() => {
    window.setStatusBarHeight = function (isStatusBar: string) {
      setText(isStatusBar);
    };
  }, []);
  return (
    <main className="w-full bg-white h-screen">
      <button onClick={() => changeText('?')}>hi</button>
      <span className="text-black">{text}</span>
    </main>
  );
}
