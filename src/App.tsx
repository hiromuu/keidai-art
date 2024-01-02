import React from 'react';

function App() {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const textStyle: React.CSSProperties = {
        textAlign: 'center',
        color: 'rgb(35, 39, 47)',
        padding: '20px',
    };
    // メイン画像のスタイル
    const mainStyle: React.CSSProperties = {
        width: '100%',
        height: 'auto',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1, // 背景色よりも後ろに配置
    };

    // logo.svg のスタイル
    const logoStyle: React.CSSProperties = {
        position: 'absolute',
        left: '15vw',
        top: '110vh',
        width: '30vw', // ビューポート幅の25%に設定
        height: '40vh', // ビューポート高さの15%に設定
    };

    const dayStyle: React.CSSProperties = {
        position: 'absolute',
        left: '45vw',
        top: '115vh',
        width: '25vw', // ビューポート幅の15%に設定
        height: '20vh', // ビューポート高さの10%に設定
    };

    const copyStyle: React.CSSProperties = {
        position: 'absolute',
        left: '75%',
        top: '13Vh',
        height: '125Vh',
        width: '20Vw',

    };

    const circleStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '180px', // コンテナの幅に合わせる
        height: '180px', // コンテナの幅と同じ値に設定する
        borderRadius: '50%',
        backgroundColor: 'white',
        color: 'rgb(234, 96, 142)',
        fontSize: '20px',
        textAlign: 'center',
        lineHeight: '30px',
        position: 'absolute', // コンテナ内で絶対位置指定
        top: '130Vh',
        left: '65Vw',
    };


    return (
        <React.Fragment>
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
            <div style={containerStyle}>
                <img src="/images/main_pic.png" alt="Main Pic" style={mainStyle} />
                <img src="/images/logo.svg" alt="Logo" style={logoStyle} />
                <img src="/images/day.svg" alt="Day" style={dayStyle} />
                <img src="/images/copy.svg" alt="Copy" style={copyStyle} />
                <div style={circleStyle}>
                    ゲスト<br />
                    comming soon
                </div>
                <p style={textStyle}>
                    桜吹雪に誘われてたどりつくのは、<br />
                    境内に広がる見たことのない景色。<br />
                    そこでは、無名も有名も、年齢も性別も関係のない<br />
                    「表現者たち」が春の訪れを祝って遊んでいます。</p>
            </div>

        </React.Fragment>
    );
}

export default App;
