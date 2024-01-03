import React from 'react';

function App() {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
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
        marginLeft: '10%',
        lineHeight: '1.8',
        marginBottom: `0px`,
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
        marginLeft: '10%',
        fontSize: `3Vw`,
        boxSizing: 'border-box',
    };
    const textBosyu: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        fontSize: `1.9vw`,
        marginLeft: '10%',
        boxSizing: 'border-box',
        fontWeight: 'bold'
    };

    const rectangleContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: '20px',
        marginLeft: '10%',
        position: 'relative',
    };

    const rectangleStyle: React.CSSProperties = {
        width: '32%',
        height: '90Vh',
        border: 'solid',
        borderColor: 'white',
    };
    const boxTitle: React.CSSProperties = {
        color: 'white',
        fontSize: '1.5Vw',
        fontWeight: 'bold',
        marginLeft: '6%',
        marginBottom: '2%'
    }

    const boxText: React.CSSProperties = {
        fontSize: '1vw',
        color: 'rgb(234, 96, 142)',
        textAlign: 'center',
        margin: '0',
    }

    const boxText2: React.CSSProperties = {
        fontSize: '1vw',
        color: 'white',
        textAlign: 'center',

    }

    const spanningRectangleStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        width: '80%',
        height: '15px',
        backgroundColor: 'white',
        top: '5.3vw',
        left: '17.8%',
        transform: 'translateY(-50%)',
    };

    const noBoothBoxStyle: React.CSSProperties = {
        border: "solid",
        width: '40%',
        height: '12vh',//後ほど修正
        marginLeft: '6%',
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    };

    const noBoothBoxStyle2: React.CSSProperties = {
        border: "solid",
        width: '40%',
        height: '6vh',
        marginTop: '6vh',
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
    };

    const noBoothBoxStyle3: React.CSSProperties = {
        border: "solid",
        width: '40%',
        height: '6vh',//後ほど修正
        marginTop: '6vh',
        borderColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        marginLeft: '6%',
    };

    const boothOptionsContainer: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
    };

    const buttonContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: '20px',
        marginLeft: '10%',
    };

    const buttonStyle: React.CSSProperties = {
        width: '49%',
        padding: '10px 20px',
        backgroundColor: 'white',
        color: 'rgb(234, 96, 142)',
        border: 'none',
        cursor: 'pointer',
    };

    const textChyui: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        fontSize: `0.8vw`,
        marginTop: '5%',
        marginLeft: '10%',
        boxSizing: 'border-box',
        fontWeight: 'bold'
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
                <p style={textBosyu}>募集期間　　1月11日（水）～2月11日（土）</p>
                <div style={rectangleContainerStyle}>
                    <div style={rectangleStyle}>
                        <p style={boxTitle}>抽選あり（応募多数の場合）</p>
                        <div style={boothOptionsContainer}>
                            <div style={noBoothBoxStyle}>
                                <p style={boxText2}>ブースなし</p>
                            </div>
                            <div style={noBoothBoxStyle2}>
                                <p style={boxText2}>要相談</p>
                            </div>
                        </div>
                    </div>
                    <div style={rectangleStyle}>
                        <p style={boxTitle}>選考あり（2月22日以降確定）</p>
                        <div style={boothOptionsContainer}>
                            <div style={noBoothBoxStyle3}>
                                <p style={boxText2}>要相談</p>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div style={rectangleStyle}>
                        <p style={boxTitle}>先着</p>
                    </div>
                    <div style={spanningRectangleStyle}>
                        <p style={boxText}>ブースあり</p>
                    </div>

                </div>
                <div style={buttonContainerStyle}>
                    <button style={buttonStyle}>ボタン1</button>
                    <button style={buttonStyle}>ボタン2</button>
                </div>
                <p style={textChyui}>
                    パフォーマンス・アート・飲食・短編映画は、全体のバランス調整のため選考となります。<br />
                    結果は、2月22日以降にお知らせします。<br />
                    <br />
                    短編映画は、FilmFreewayより募集します。<br />
                    こちらからお申し込みください。<br />
                    <br />
                    古本・クラフト・ワークショップは、先着順となりますので定員に達し次第、締め切ります。<br />
                    <br />
                    パフォーマンスにはブースがございません。<br />
                    <br />
                    アートブースのサイズは要相談。飲食には 6m×6m以内、それ以外には 3m×3m以内のブースをご用意します。<br />
                </p>
            </div>

        </React.Fragment>
    );
}

export default App;
