import mediumZoom from 'medium-zoom';
import React, { useEffect } from 'react';
import useMedia from 'use-media';

function App() {
    const containerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'MidashiGoPr5 MB31-83pv-RKSJ-H*'
    };
    const isWide = useMedia({ minWidth: "768px" });

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
        fontSize: `2vw`,
        fontWeight: 'bold',
        // marginTop: '5%',
        marginLeft: '10%',
        lineHeight: '1.8',
        marginBottom: `0px`,
    };

    const chuuiStyle: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        fontSize: `1.5vw`,
        fontWeight: 'bold',
        marginLeft: '15%',
    };

    const textStylemobile: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        fontSize: `3vw`,
        // marginTop: '10%',
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
    const logoStylemobile: React.CSSProperties = {
        width: '50%',
        height: 'auto',
        zIndex: 1,
        alignSelf: 'flex-start', // 左端に配置
        top: '65%',
        left: '10%',
    };

    const dayStyle: React.CSSProperties = {
        width: '18%',
        height: 'auto',
        zIndex: 1,
        alignSelf: 'flex-start',
        top: '78%',
        left: '50%',
    };

    const dayStylemobile: React.CSSProperties = {
        width: '25%',
        height: 'auto',
        zIndex: 1,
        alignSelf: 'flex-start',
        top: '110%',
        left: '15%',
    };

    const copyStyle: React.CSSProperties = {
        height: '125Vh',
        width: '20Vw',
        zIndex: 1,
        alignSelf: 'flex-end', // 親コンテナの終端に配置
        margin: '0 5vw',
    };

    const copyStylemobile: React.CSSProperties = {
        height: '33Vh',
        width: '30Vw',
        zIndex: 1,
        alignSelf: 'flex-end', // 親コンテナの終端に配置
        marginTop: '14vh',
        marginRight: '1vw'
    };

    const circleStyle: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '15vw',
        height: '15vw',
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
    const circleStylemobile: React.CSSProperties = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '20vw',
        height: '20vw',
        borderRadius: '50%',
        backgroundColor: 'white',
        color: 'rgb(234, 96, 142)',
        fontSize: '20px',
        textAlign: 'center',
        lineHeight: '30px',
        alignSelf: 'flex-end',
        top: '105%',
        right: '22%',
    };


    const h1Style: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        marginLeft: '10%',
        fontSize: `3Vw`,
        boxSizing: 'border-box',
    };

    const h1Stylemobile: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        marginLeft: '10%',
        fontSize: `6Vw`,
        boxSizing: 'border-box',
    };

    const h2Style: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        marginLeft: '10%',
        fontSize: `2.6Vw`,
        boxSizing: 'border-box',
    };

    const h3Style: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        marginLeft: '12%',
        fontSize: `2.2Vw`,
        boxSizing: 'border-box',
    };

    const textGaiyo: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        fontSize: `1.9vw`,
        marginLeft: '2%',
        boxSizing: 'border-box',
        fontWeight: 'bold',
        // backgroundColor: 'rgba(128, 128, 128, 0.5)'
    };

    const textBosyumobile: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        fontSize: `3.3vw`,
        marginLeft: '10%',
        boxSizing: 'border-box',
        fontWeight: 'bold'
    };

    const boxStyle: React.CSSProperties = {
        border: '2px solid white',
        display: 'inline-block',
        marginLeft: '10%',  // 左に10%のマージン
        marginRight: '10%',
    };

    const buttonContainerStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        marginTop: '20px',
        marginLeft: '10%',
    };

    const buttonContainerStylemobile: React.CSSProperties = {
        display: 'flex',
        width: '81%',
        marginLeft: '10%',
        flexDirection: 'column',
        alignItems: 'center'
    };

    const buttonStyle: React.CSSProperties = {
        width: '49%',
        padding: '10px 20px',
        backgroundColor: 'white',
        color: 'rgb(234, 96, 142)',
        cursor: 'pointer',
        fontSize: '1.5vw',
        border: 'solid',
        borderColor: 'white',
    };

    const buttonStylemobile: React.CSSProperties = {
        width: '100%',
        padding: '10px 20px',
        backgroundColor: 'white',
        color: 'rgb(234, 96, 142)',
        cursor: 'pointer',
        fontSize: '4vw',
        border: 'solid',
        borderColor: 'white',
        marginBottom: '8px'
    };

    const textChyuimobile: React.CSSProperties = {
        textAlign: 'left',
        color: 'white',
        fontSize: `3vw`,
        width: '80%',
        marginTop: '5%',
        marginLeft: '10%',
        boxSizing: 'border-box',
        fontWeight: 'bold',
    };

    const fotterStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: '20px',
        marginBottom: '7%',
        alignItems: 'end',
        marginLeft: '5%',
        marginRight: '10%',
    }

    const fotterStylemobile: React.CSSProperties = {
        display: 'flex',
        // flexDirection: 'column',
        width: '85%',
        marginTop: '20px',
        marginBottom: '7%',
        alignItems: 'end',
        marginLeft: '5%',
        marginRight: '10%',
        justifyContent: 'space-between',
    }

    const fotterImageStyle: React.CSSProperties = {
        width: '15%',
        marginLeft: '80%'
    }

    const fotterImageStylemobile: React.CSSProperties = {
        width: '20%',
    }

    useEffect(() => {
        mediumZoom('[data-zoomable]');
    }, []);

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
                    {isWide ?
                        <img src="/images/logo.svg" alt="Logo" style={{ ...logoStyle, ...additionalImageStyle }} className="logo" />
                        : <img src="/images/logo.svg" alt="Logo" style={{ ...logoStylemobile, ...additionalImageStyle }} className="logo" />}
                    {isWide ?
                        <img src="/images/day.svg" alt="Day" style={{ ...dayStyle, ...additionalImageStyle }} />
                        :
                        <img src="/images/day.svg" alt="Day" style={{ ...dayStylemobile, ...additionalImageStyle }} />
                    }
                    {isWide ?
                        <img src="/images/copy.svg" alt="Copy" style={{ ...copyStyle, ...additionalImageStyle }} />
                        :
                        <img src="/images/copy.svg" alt="Copy" style={{ ...copyStylemobile, ...additionalImageStyle }} />
                    }
                    {isWide ?
                        <div style={{ ...circleStyle, ...additionalImageStyle }}>
                            <p style={{ fontSize: "2vw" }}>
                                ゲスト<br />
                                comming soon</p>
                        </div>
                        :
                        <div style={{ ...circleStylemobile, ...additionalImageStyle }}>
                            <p style={{ fontSize: "10px", lineHeight: "1.2" }}>
                                ゲスト<br />
                                comming soon</p>
                        </div>}

                </div>
                {isWide ?
                    <div style={{ marginTop: "5%" }}>
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
                        <h1 style={h1Style}>境内アート×苗市とは</h1>
                        <p style={textStyle}>
                            葛飾北斎にゆかりがあり、栗の名産地としても知られる長野県小布施町。
                            <br />
                            その小布施町に鎮座し、400年以上の歴史をもつ禅宗の古刹・玄照寺を舞台に<br />
                            「境内アート×苗市」は開催されます。
                            <br />
                            アート、パフォーマンス、クラフト、古本、食など多彩な表現のかたちが、<br />
                            参道、境内、堂内、広大な森に広がります。
                            <br /> </p>
                        <h1 style={h1Style}>概要</h1>
                        <div style={boxStyle}>
                            <p style={textGaiyo}>開催日時：4月28日（日）10:00-16:00</p>
                            <p style={textGaiyo}>会場：玄照寺＆小布施千年の森（長野県上高井郡小布施町大字大島90）</p>
                            <p style={textGaiyo}>主催：玄照寺奉賛会、境内アート×苗市実行委員会</p>
                            <p style={textGaiyo}>後援：小布施町、小布施町教育委員会、小布施文化観光協会、小布施町商工会、大島自治会</p>
                        </div>
                        <h1 style={h1Style}>出展者募集</h1>
                        <p style={textStyle}>募集期間　　1月11日（水）～2月11日（土）<br />
                            応募結果の連絡　3月上旬（予定）
                        </p>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <img
                                data-zoomable
                                src="/images/bosyuu.png"
                                alt="bosyuu Pic"
                                style={{ width: '70%', height: '80%', marginBottom: '3%' }}
                            />
                            <img
                                data-zoomable
                                src="/images/area.jpg"
                                alt="area Pic"
                                style={{ width: '40%', height: '80%' }}
                            />
                        </div>
                        <div style={buttonContainerStyle}>
                            <button style={buttonStyle}>出店の応募はこちら</button>
                            <button style={buttonStyle}>短編映画祭の応募はこちら</button>
                        </div>
                        <h1 style={h2Style}>注意事項</h1>
                        <p style={h3Style}>キャンセルについて</p>

                        <p style={chuuiStyle}>やむを得ない理由により、出展をキャンセルする場合は、</p>
                        <p style={chuuiStyle}>➀ 出展名　➁ 代表者名　➂ キャンセル理由を、obuse.keidaiart@gmail.com	までお知らせください。</p>
                        <p style={chuuiStyle}>4月15日（月）以降のキャンセルは、出展料を全額請求させていただきますのでご了承ください。</p>

                        <p style={h3Style}>貸出備品について</p>
                        <p style={chuuiStyle}>電源やテントの貸出はございません。各自ご用意ください。</p>

                        <p style={h3Style}>ゴミについて</p>
                        <p style={chuuiStyle}>なるべくゴミを出さない、持ち帰ることへのご協力をお願いいたします。</p>

                        <p style={h3Style}>トラブルについて</p>
                        <p style={chuuiStyle}>開催中の盗難・事故・駐車場トラブルに関しては自己責任でお願いいたします。</p>

                        <p style={h3Style}>写真掲載について</p>
                        <p style={chuuiStyle}>スタッフにより撮影された写真は、当SNS及びサイトにて掲載させていただく可能性があります。ご了承ください。</p>

                        <p style={h3Style}>開催中止の可能性について</p>
                        <p style={chuuiStyle}>天候や災害等によりイベントの開催を見合わせる可能性がございます。ご了承ください。</p>
                        <h1 style={h1Style}>問い合わせ</h1>
                        <p style={textStyle}> ご不明点等がある場合は、　obuse.keidaiart@gmail.com  <br />
                            （境内アート×苗市実行委員）までご連絡ください。</p>
                        <img src="/images/footer_pic.png" alt="fotter Pic" style={fotterImageStyle} />
                    </div>
                    :
                    <div style={{ marginTop: "22vw" }}>
                        <p style={textBosyumobile}><br />
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
                        <h1 style={h1Stylemobile}>境内アート×苗市とは</h1>
                        <p style={textBosyumobile}>
                            葛飾北斎にゆかりがあり、栗の名産地としても知られる<br />
                            長野県小布施町。<br />
                            その小布施町に鎮座し、400年以上の歴史をもつ<br />
                            禅宗の古刹・玄照寺を舞台に<br />
                            「境内アート×苗市」は開催されます。
                            <br />
                            アート、パフォーマンス、クラフト、古本、食など<br />
                            多彩な表現のかたちが、<br />
                            参道、境内、堂内、広大な森に広がります。
                            <br /><br />
                        </p>
                        <h1 style={h1Stylemobile}>概要</h1>
                        <p style={textBosyumobile}>開催日時：4月28日（日）10:00-16:00<br /></p>
                        <p style={textBosyumobile}>会場：玄照寺＆小布施千年の森<br />（長野県上高井郡小布施町大字大島90）<br /></p>
                        <p style={textBosyumobile}>主催：玄照寺奉賛会、境内アート×苗市実行委員会<br /><br />
                            後援：小布施町、小布施町教育委員会、<br />小布施文化観光協会、小布施町商工会、大島自治会</p>
                    </div>}
                {isWide ? <div>


                </div>
                    :
                    <div>
                        <h1 style={h1Stylemobile}>出展者募集</h1>
                        <p style={textBosyumobile}>募集期間　　1月11日（水）～2月11日（土）<br />応募結果の連絡　3月上旬（予定）</p>

                        <div style={{ height: '20px', width: '100px' }}></div>


                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2%', marginLeft: '10%', marginRight: '10%' }}>
                            <div style={{ width: '50%' }}>

                            </div>


                        </div>
                    </div>
                }

                {isWide ?
                    <></>
                    : <>
                        <div style={buttonContainerStylemobile}>
                            <img
                                src="/images/area.jpg"
                                alt="area Pic"
                                style={{ width: '70%', height: '80%' }}
                            />
                            <div style={{ height: "10%", width: "5%" }}> a</div>
                            <img
                                src="/images/area.jpg"
                                alt="area Pic"
                                style={{ width: '70%', height: '80%' }}
                            />
                            <div style={{ height: "10%" }}></div>
                            <h1 style={h1Stylemobile}>注意事項</h1><li style={textChyuimobile}>
                                キャンセルについて
                                <p style={{ fontSize: '2.6vw' }}>やむを得ない理由により、出展をキャンセルする場合は、</p>
                                <p style={{ fontSize: '2.6vw' }}>➀ 出展名　➁ 代表者名　➂ キャンセル理由を、obuse.keidaiart@gmail.com	までお知らせください。</p>
                                <p style={{ fontSize: '2.6vw' }}>4月15日（月）以降のキャンセルは、出展料を全額請求させていただきますのでご了承ください。</p>
                            </li><li style={textChyuimobile}>
                                貸出備品について
                                <p style={{ fontSize: '2.6vw' }}>電源やテントの貸出はございません。各自ご用意ください。</p>
                            </li><li style={textChyuimobile}>
                                ゴミについて
                                <p style={{ fontSize: '2.6vw' }}>なるべくゴミを出さない、持ち帰ることへのご協力をお願いいたします。</p>
                            </li><li style={textChyuimobile}>
                                トラブルについて
                                <p style={{ fontSize: '2.6vw' }}>開催中の盗難・事故・駐車場トラブルに関しては自己責任でお願いいたします。</p>
                            </li><li style={textChyuimobile}>
                                写真掲載について
                                <p style={{ fontSize: '2.6vw' }}>スタッフにより撮影された写真は、当SNS及びサイトにて掲載させていただく可能性があります。ご了承ください。</p>
                            </li><li style={textChyuimobile}>
                                開催中止の可能性について
                                <p style={{ fontSize: '2.6vw' }}>天候や災害等によりイベントの開催を見合わせる可能性がございます。ご了承ください。</p>
                            </li>
                            <button style={buttonStylemobile}>出店の応募はこちら</button>
                            <button style={buttonStylemobile}>短編映画祭の応募はこちら</button>
                        </div>


                    </>
                }
                {isWide
                    ? <></> :
                    <></>
                }


                {isWide ?
                    <div style={fotterStyle}>

                    </div> :
                    <><h1 style={h1Stylemobile}>問い合わせ</h1><p style={textBosyumobile}>ご不明点等がある場合は、　obuse.keidaiart@gmail.com<br />
                        （境内アート×苗市実行委員）までご連絡ください。</p><div style={fotterStylemobile}>
                            <img src="/images/footer_pic.png" alt="Main Pic" style={fotterImageStylemobile} />
                        </div></>
                }


            </div>

        </React.Fragment >
    );
}

export default App;


