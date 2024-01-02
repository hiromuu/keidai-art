import React from 'react';

function App() {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'MidashiGoPr5 MB31-83pv-RKSJ-H*'
    };

    const imageContainerStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    };

    // メイン画像以外の画像のスタイルを調整
    const additionalImageStyle: React.CSSProperties = {
        position: 'absolute', // メイン画像に対する絶対位置指定
        zIndex: 1,
    };

    const textStyle: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        padding: '20px',
        fontSize: `1.7vw`,
        marginTop: '5%',
        marginLeft: '-20%',
        lineHeight: '1.8',
    };
    // メイン画像のスタイル
    const mainStyle: React.CSSProperties = {
        width: '100%',
        height: 'auto',
        top: 0,
        left: 0,
        zIndex: 0, // 背景色よりも後ろに配置
    };

    // logo.svg のスタイル
    const logoStyle: React.CSSProperties = {
        width: '30%',
        height: 'auto',
        zIndex: 1,
        alignSelf: 'flex-start', // 左端に配置
        top: '75%',
        left: '15%',
    };

    const dayStyle: React.CSSProperties = {
        width: '18%',
        height: 'auto',
        zIndex: 1,
        alignSelf: 'flex-start',
        top: '78%',
        left: '50%',
    };

    const copyStyle: React.CSSProperties = {
        height: '125Vh',
        width: '20Vw',
        zIndex: 1,
        alignSelf: 'flex-end', // 親コンテナの終端に配置
        margin: '0 5vw',
    };

    const circleStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: 'white',
        color: 'rgb(234, 96, 142)',
        fontSize: '20px',
        textAlign: 'center',
        lineHeight: '30px',
        alignSelf: 'flex-end',
        top: '90%',
        right: '15%',
    };
    const h1Style: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        marginRight: '50%',
        fontSize: `3Vw`
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
                <div style={imageContainerStyle}>
                    <img src="/images/main_pic.png" alt="Main Pic" style={mainStyle} />
                    <img src="/images/logo.svg" alt="Logo" style={{ ...logoStyle, ...additionalImageStyle }} />
                    <img src="/images/day.svg" alt="Day" style={{ ...dayStyle, ...additionalImageStyle }} />
                    <img src="/images/copy.svg" alt="Copy" style={{ ...copyStyle, ...additionalImageStyle }} />
                    <div style={{ ...circleStyle, ...additionalImageStyle }}>
                        ゲスト<br />
                        comming soon
                    </div>
                </div>

                <p style={textStyle}>
                    桜吹雪に誘われてたどりつくのは、<br />
                    境内に広がる見たことのない景色。<br />
                    そこでは、無名も有名も、年齢も性別も関係のない<br />
                    「表現者たち」が春の訪れを祝って遊んでいます。<br />
                    <br />
                    香り立つご飯に、お酒に、おつまみ。<br />
                    自然のなかに溶け込むアート・クラフト。<br />
                    そしてどこにいても聞こえてくる<br />
                    大小様々な笑い声。<br />
                    迷い込んだら出られない、<br />
                    1日限りの不思議な縁日へようこそ。<br />
                </p>
                <h1 style={h1Style}>出展者募集</h1>
                <p style={textStyle}><span style={{ fontWeight: "bold" }}>募集期間　　1月11日（水）～2月11日（土）</span></p>
            </div>

        </React.Fragment>
    );
}

export default App;
