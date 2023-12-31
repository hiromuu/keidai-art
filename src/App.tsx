import React from 'react';

function App() {
    // 背景画像のスタイル
    const backgroundImageStyle: React.CSSProperties = {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1, // 背景色よりも後ろに配置
    };

    // logo.svg のスタイル
    const logoStyle: React.CSSProperties = {
        position: 'absolute', // 絶対位置指定
        left: '171.3147px', // x座標
        top: '329.7607px', // y座標
        width: '494.6333px', // 幅
        height: '279.1613px', // 高さ
        transform: 'rotate(7.72deg)', // 7.72度回転
        transformOrigin: 'top left',// 回転の基点を左上に設定
    };

    // day.svg のスタイル
    const dayStyle: React.CSSProperties = {
        height: '60px',
        position: 'absolute',
        top: '30%', // 位置を調整
        left: '40%',
    };

    // copy.svg のスタイル
    const copyStyle: React.CSSProperties = {
        height: '40px',
        position: 'absolute',
        top: '40%', // 位置を調整
        left: '60%',
    };

    // Appコンポーネントのスタイル
    const appStyle: React.CSSProperties = {
        textAlign: 'center',
        backgroundColor: 'rgb(234, 96, 142)',
        backgroundImage: '/images/bg.png',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)',
        position: 'relative',
        margin: 0,
        padding: 0,
        zIndex: -2,

    };

    return (
        <React.Fragment>
            <style>
                {`
                    html, body, #root {
                        margin: 0;
                        padding: 0;
                        height: 100%;
                        width: 100%;
                    }
                `}
            </style>
            <div style={appStyle}>
                <img src="/images/main_pic.png" alt="Main Pic" style={backgroundImageStyle} />
                <img src="/images/logo.svg" alt="Logo" style={logoStyle} />
                <img src="/images/day.svg" alt="Day" style={dayStyle} />
                <img src="/images/copy.svg" alt="Copy" style={copyStyle} />
            </div>
        </React.Fragment>
    );
}

export default App;
