import { useState } from "react";
import { animated, useSpring } from "react-spring";

function Splash() {
  const [show, setShow] = useState(true); // スプラッシュ画面の表示状態

  // フェードイン用のspring設定
  const fade = useSpring({
    from: { opacity: 0 },
    to: { opacity: show ? 1 : 0 },
    config: { duration: 1000 }, // フェードインの時間
    onRest: () => {
      // フェードイン完了後にスプラッシュ画面を非表示にするためのタイマー設定
      const timer = setTimeout(() => setShow(false), 1000); // 2秒間表示した後非表示
      return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリア
    },
  });

  // スプラッシュ画面が非表示になったらnullを返して何も表示しない
  if (!show) {
    return null;
  }

  return (
    <>
      <style>
        {`
                html, body, #root {
                    margin: 0;
                    padding: 0;
                    height: auto; 
                    min-height: 100%; 
                    width: auto;
                    min-width: 100%;
                    background-color: rgb(234, 96, 142);
                    background-image: url(/images/bg.png);
                }
    `}
      </style>
      <animated.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(234, 96, 142, 1)",
          backgroundImage: "url(/images/bg.png)",
          zIndex: 1000,
        }}
      ></animated.div>
      <animated.div
        style={{
          ...fade,
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(234, 96, 142, 1)",
          backgroundImage: "url(/images/bg.png)",
          zIndex: 1000,
        }}
      >
        <img
          src="/images/copy.svg"
          alt="スプラッシュ画像"
          style={{ width: "50%", height: "50%" }}
        />
      </animated.div>
    </>
  );
}

export default Splash;
