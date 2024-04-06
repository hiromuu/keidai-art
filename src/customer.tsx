import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import useMedia from "use-media";

function HomePage() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    fontFamily: "MidashiGoPr5 MB31-83pv-RKSJ-H*",
  };
  const isWide = useMedia({ minWidth: "768px" });

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const imageContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };
  // メイン画像以外の画像のスタイルを調整
  const additionalImageStyle: React.CSSProperties = {
    position: "absolute", // メイン画像に対する絶対位置指定
    zIndex: 1,
  };

  const textGest: React.CSSProperties = {
    textAlign: "center",
    color: "white",
    fontSize: `2.3vw`,
    fontWeight: "bold",
    // marginTop: '5%',
    lineHeight: "1.8",
    marginBottom: `0px`,
  };

  const textGestmobile: React.CSSProperties = {
    textAlign: "center",
    color: "white",
    fontSize: `3.6vw`,
    fontWeight: "bold",
    // marginTop: '5%',
    lineHeight: "1.8",
    marginBottom: `0px`,
  };

  const textStyle: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    fontSize: `2vw`,
    fontWeight: "bold",
    // marginTop: '5%',
    marginLeft: "10%",
    lineHeight: "1.8",
    marginBottom: `0px`,
  };

  const galleryStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    margin: "20px",
  };

  const itemStyle: React.CSSProperties = {
    textAlign: "center",
    width: "50%", // コンテナの幅と高さを固定
    height: "auto", // コンテナの高さを指定
  };

  const itemMobileStyle: React.CSSProperties = {
    textAlign: "center",
    width: "50%", // コンテナの幅と高さを固定
    height: "auto", // コンテナの高さを指定
  };

  const imageStyle: React.CSSProperties = {
    width: "80%",
    height: "auto",
    borderRadius: "50%",
    objectFit: "cover",
  };
  // メイン画像のスタイル
  const mainStyle: React.CSSProperties = {
    width: "100%",
    height: "auto",
    top: 0,
    left: 0,
    zIndex: 0, // 背景色よりも後ろに配置
  };

  // logo.svg のスタイル
  const logoStyle: React.CSSProperties = {
    width: "30%",
    height: "auto",
    zIndex: 1,
    alignSelf: "flex-start", // 左端に配置
    top: "75%",
    left: "15%",
  };
  const logoStylemobile: React.CSSProperties = {
    width: "50%",
    height: "auto",
    zIndex: 1,
    alignSelf: "flex-start", // 左端に配置
    top: "65%",
    left: "10%",
  };

  const dayStyle: React.CSSProperties = {
    width: "18%",
    height: "auto",
    zIndex: 1,
    alignSelf: "flex-start",
    top: "78%",
    left: "50%",
  };

  const dayStylemobile: React.CSSProperties = {
    width: "25%",
    height: "auto",
    zIndex: 1,
    alignSelf: "flex-start",
    top: "110%",
    left: "15%",
  };

  const copyStyle: React.CSSProperties = {
    height: "125Vh",
    width: "20Vw",
    zIndex: 1,
    alignSelf: "flex-end", // 親コンテナの終端に配置
    margin: "0 5vw",
  };

  const copyStylemobile: React.CSSProperties = {
    height: "33Vh",
    width: "30Vw",
    zIndex: 1,
    alignSelf: "flex-end", // 親コンテナの終端に配置
    marginTop: "14vh",
    marginRight: "1vw",
  };

  const h1Style: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    marginLeft: "10%",
    fontSize: `3Vw`,
    boxSizing: "border-box",
  };

  const h1Stylemobile: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    marginLeft: "10%",
    fontSize: `6Vw`,
    boxSizing: "border-box",
  };

  const textGaiyo: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    fontSize: `1.9vw`,
    marginLeft: "2%",
    boxSizing: "border-box",
    fontWeight: "bold",
  };

  const textmobile: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    fontSize: `3.6vw`,
    marginLeft: "10%",
    marginRight: "10%",
    boxSizing: "border-box",
    fontWeight: "bold",
  };

  const textboxmobile: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    fontSize: `3.6vw`,
    marginLeft: "3%",
    boxSizing: "border-box",
    fontWeight: "bold",
  };

  const boxStyle: React.CSSProperties = {
    border: "2px solid white",
    display: "inline-block",
    marginLeft: "10%",
    marginRight: "10%",
    width: "80%",
  };

  const fotterImageStyle: React.CSSProperties = {
    width: "15%",
    marginLeft: "80%",
  };

  const fotterImageStylemobile: React.CSSProperties = {
    width: "20%",
    marginLeft: "75%",
  };

  const imageStylecal: React.CSSProperties = {
    width: "80%", // 画像の幅を250pxに設定
    height: "300px",
    borderRadius: "20px", // 画像の角を20pxの半径で丸くする
    objectFit: "cover", // 画像のアスペクト比を保ちつつ、コンテナに合わせてサイズを調整
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  };

  const imageStylecalmobile: React.CSSProperties = {
    width: "60%", // 画像の幅を250pxに設定
    height: "200px", // 画像の高さを250pxに設定
    borderRadius: "20px", // 画像の角を20pxの半径で丸くする
    objectFit: "cover", // 画像のアスペクト比を保ちつつ、コンテナに合わせてサイズを調整
    textAlign: "center",
  };

  const carouselItemStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center", // 画像を垂直方向にも中央揃えにする
    width: "100%", // コンテナの幅を全体に
    height: "auto", // 必要に応じて設定
  };

  const responsive = {
    superLargeDesktop: {
      // 画面が大きい場合は3つのアイテムを表示
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const modalStyle: React.CSSProperties = {
    position: "fixed", // 'fixed' は文字列リテラル型
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const closeButtonStyle: React.CSSProperties = {
    position: "absolute", // 'absolute' は文字列リテラル型
    top: "10px",
    right: "25px",
    color: "white",
    fontSize: "35px",
    fontWeight: "bold",
    cursor: "pointer",
  };

  const enlargedImageStyle = {
    maxWidth: "80%",
    maxHeight: "80%",
    backgroundColor: "white",
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
          {isWide ? (
            <img
              src="/images/logo.svg"
              alt="Logo"
              style={{ ...logoStyle, ...additionalImageStyle }}
              className="logo"
            />
          ) : (
            <img
              src="/images/logo.svg"
              alt="Logo"
              style={{ ...logoStylemobile, ...additionalImageStyle }}
              className="logo"
            />
          )}
          {isWide ? (
            <img
              src="/images/day.svg"
              alt="Day"
              style={{ ...dayStyle, ...additionalImageStyle }}
            />
          ) : (
            <img
              src="/images/day.svg"
              alt="Day"
              style={{ ...dayStylemobile, ...additionalImageStyle }}
            />
          )}
          {isWide ? (
            <img
              src="/images/copy.svg"
              alt="Copy"
              style={{ ...copyStyle, ...additionalImageStyle }}
            />
          ) : (
            <img
              src="/images/copy.svg"
              alt="Copy"
              style={{ ...copyStylemobile, ...additionalImageStyle }}
            />
          )}
        </div>
        <div style={{ height: "60px" }}></div>
        {isWide ? (
          <>
            <h1 style={h1Style}>ゲストアーティスト</h1>
            <div style={galleryStyle}>
              <div style={itemStyle}>
                <img
                  src="/images/arigasaki.jpg"
                  alt="蟻ヶ崎高校　書道部"
                  style={imageStyle}
                />
                <p style={textGest}>蟻ヶ崎高校　書道部</p>
              </div>

              {/* 画像2 */}
              <div style={itemStyle}>
                <img
                  src="/images/sabunyuma.jpg"
                  alt="サブニュマ"
                  style={imageStyle}
                />
                <p style={textGest}>サブニュマ</p>
              </div>
              <div style={{ height: "30px" }}></div>
            </div>
          </>
        ) : (
          <>
            <div style={{ height: "30px" }}></div>
            <h1 style={h1Style}>ゲストアーティスト</h1>
            <div style={galleryStyle}>
              <div style={itemMobileStyle}>
                <img
                  src="/images/arigasaki.jpg"
                  alt="蟻ヶ崎高校　書道部"
                  style={imageStyle}
                />
                <p style={textGestmobile}>蟻ヶ崎高校　書道部</p>
              </div>

              {/* 画像2 */}
              <div style={itemMobileStyle}>
                <img
                  src="/images/sabunyuma.jpg"
                  alt="サブニュマ"
                  style={imageStyle}
                />
                <p style={textGestmobile}>サブニュマ</p>
              </div>
            </div>
          </>
        )}

        {isWide ? (
          <div style={{ marginTop: "5%" }}>
            <p style={textStyle}>
              桜吹雪に誘われてたどりつくのは、
              <br />
              境内に広がる見たことのない景色。
              <br />
              そこでは、無名も有名も、年齢も性別も関係のない
              <br />
              「表現者たち」が春の訪れを祝って遊んでいます。
              <br />
              <br />
              香り立つご飯に、お酒に、おつまみ。
              <br />
              自然のなかに溶け込むアート・クラフト。
              <br />
              そしてどこにいても聞こえてくる
              <br />
              大小様々な笑い声。
              <br />
              迷い込んだら出られない、
              <br />
              1日限りの不思議な縁日へようこそ。
              <br />
            </p>
            <h1 style={h1Style}>境内アート×苗市とは</h1>
            <p style={textStyle}>
              葛飾北斎にゆかりがあり、栗の名産地としても知られる長野県小布施町。
              <br />
              その小布施町に鎮座し、400年以上の歴史をもつ禅宗の古刹・玄照寺を舞台に
              <br />
              「境内アート×苗市」は開催されます。
              <br />
              アート、パフォーマンス、クラフト、古本、食など多彩な表現のかたちが、
              <br />
              参道、境内、堂内、広大な森に広がります。
              <br />{" "}
            </p>
            <h1 style={h1Style}>概要</h1>
            <div style={boxStyle}>
              <p style={textGaiyo}>開催日時：4月28日（日）10:00-16:00</p>
              <p style={textGaiyo}>
                会場：玄照寺＆小布施千年の森（長野県上高井郡小布施町大字大島90）
              </p>
              <p style={textGaiyo}>
                主催：玄照寺奉賛会、境内アート×苗市実行委員会
              </p>
              <p style={textGaiyo}>
                後援：小布施町、小布施町教育委員会、小布施文化観光協会、小布施町商工会、大島自治会
              </p>
            </div>

            <h1 style={h1Style}>タイムテーブル</h1>
            <div style={boxStyle}>
              <p style={textGaiyo}>10:00 開場</p>
              <p style={textGaiyo}>11:00-11:30 サブニュマ</p>
              <p style={textGaiyo}>12:00-13:15 短編映画①</p>
              <p style={textGaiyo}>13:30-14:20 蟻ヶ崎高校　書道部</p>
              <p style={textGaiyo}>14:30-15:45 短編映画②</p>
              <p style={textGaiyo}>11:00-11:30 サブニュマ</p>
              <p style={textGaiyo}>14:30-15:10 大般若法要</p>
              <p style={textGaiyo}>
                -15:30 サブニュマ練り歩き、15:30 に本堂前でフィナーレ
              </p>
              <p style={textGaiyo}>16:00 終了</p>
            </div>

            <h1 style={h1Style}>会場地図・駐車場案内</h1>
            <div style={imageContainerStyle}>
              <img
                src="/images/kaizyo.png"
                alt="area Pic"
                style={{
                  width: "40%",
                  height: "80%",
                  backgroundColor: "white",
                }}
                onClick={() => openModal("/images/kaizyo.png")}
              />

              {selectedImage && (
                <div style={modalStyle}>
                  <span style={closeButtonStyle} onClick={closeModal}>
                    &times;
                  </span>
                  <img
                    src={selectedImage}
                    alt="Enlarged pic"
                    style={enlargedImageStyle}
                  />
                </div>
              )}
            </div>
            <h1 style={h1Style}>昨年の様子</h1>
            <Carousel responsive={responsive}>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai1.jpg"
                  alt="Image 1"
                  style={imageStylecal}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai2.jpg"
                  alt="Image 2"
                  style={imageStylecal}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai3.jpg"
                  alt="Image 3"
                  style={imageStylecal}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai4.jpg"
                  alt="Image 4"
                  style={imageStylecal}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai5.jpg"
                  alt="Image 5"
                  style={imageStylecal}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai6.jpg"
                  alt="Image 6"
                  style={imageStylecal}
                />
              </div>
            </Carousel>

            <h1 style={h1Style}>問い合わせ</h1>
            <p style={textStyle}>
              {" "}
              ご不明点等がある場合は、　obuse.keidaiart@gmail.com <br />
              （境内アート×苗市実行委員）までご連絡ください。
            </p>
            <img
              src="/images/footer_pic.png"
              alt="fotter Pic"
              style={fotterImageStyle}
            />
          </div>
        ) : (
          <div style={{ marginTop: "4vw" }}>
            <p style={textmobile}>
              <br />
              桜吹雪に誘われてたどりつくのは、
              <br />
              境内に広がる見たことのない景色。
              <br />
              そこでは、無名も有名も、
              <br />
              年齢も性別も関係のない
              <br />
              「表現者たち」が春の訪れを
              <br />
              祝って遊んでいます。
              <br />
              <br />
              香り立つご飯に、お酒に、おつまみ。
              <br />
              自然のなかに溶け込むアート・クラフト。
              <br />
              そしてどこにいても聞こえてくる
              <br />
              大小様々な笑い声。
              <br />
              迷い込んだら出られない、
              <br />
              1日限りの不思議な縁日へようこそ。
              <br />
            </p>
            <h1 style={h1Stylemobile}>境内アート×苗市とは</h1>
            <p style={textmobile}>
              葛飾北斎にゆかりがあり、
              <br />
              栗の名産地としても知られる
              <br />
              長野県小布施町。
              <br />
              その小布施町に鎮座し、
              <br />
              400年以上の歴史をもつ
              <br />
              禅宗の古刹・玄照寺を舞台に
              <br />
              「境内アート×苗市」は開催されます。
              <br />
              アート、パフォーマンス、クラフト、
              <br />
              古本、食など多彩な表現のかたちが、
              <br />
              参道、境内、堂内、広大な森に広がります。
              <br />
              <br />
            </p>
            <h1 style={h1Stylemobile}>概要</h1>
            <div style={boxStyle}>
              <p style={textboxmobile}>
                開催日時：4月28日（日）10:00-16:00
                <br />
              </p>
              <p style={textboxmobile}>
                会場：玄照寺＆小布施千年の森
                <br />
                （長野県上高井郡小布施町大字大島90）
                <br />
              </p>
              <p style={textboxmobile}>
                主催：玄照寺奉賛会、境内アート×苗市実行委員会
                <br />
                <br />
                後援：小布施町、小布施町教育委員会、
                <br />
                小布施文化観光協会、小布施町商工会、大島自治会
              </p>
            </div>
            <h1 style={h1Stylemobile}>タイムテーブル</h1>
            <div style={boxStyle}>
              <p style={textboxmobile}>10:00 開場</p>
              <p style={textboxmobile}>11:00-11:30 サブニュマ</p>
              <p style={textboxmobile}>12:00-13:15 短編映画①</p>
              <p style={textboxmobile}>13:30-14:20 蟻ヶ崎高校　書道部</p>
              <p style={textboxmobile}>14:30-15:45 短編映画②</p>
              <p style={textboxmobile}>11:00-11:30 サブニュマ</p>
              <p style={textboxmobile}>14:30-15:10 大般若法要</p>
              <p style={textboxmobile}>
                -15:30 サブニュマ練り歩き、15:30 に本堂前でフィナーレ
              </p>
              <p style={textboxmobile}>16:00 終了</p>
            </div>
            <h1 style={h1Stylemobile}>会場地図・駐車場案内</h1>
            <div style={imageContainerStyle}>
              <img
                src="/images/kaizyo.png"
                alt="area Pic"
                style={{
                  width: "40%",
                  height: "80%",
                  backgroundColor: "white",
                }}
                onClick={() => openModal("/images/kaizyo.png")}
              />

              {selectedImage && (
                <div style={modalStyle}>
                  <span style={closeButtonStyle} onClick={closeModal}>
                    &times;
                  </span>
                  <img
                    src={selectedImage}
                    alt="Enlarged pic"
                    style={enlargedImageStyle}
                  />
                </div>
              )}
            </div>
            <h1 style={h1Stylemobile}>昨年の様子</h1>
            <Carousel responsive={responsive}>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai1.jpg"
                  alt="Image 1"
                  style={imageStylecalmobile}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai2.jpg"
                  alt="Image 2"
                  style={imageStylecalmobile}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai3.jpg"
                  alt="Image 3"
                  style={imageStylecalmobile}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai4.jpg"
                  alt="Image 4"
                  style={imageStylecalmobile}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai5.jpg"
                  alt="Image 5"
                  style={imageStylecalmobile}
                />
              </div>
              <div style={carouselItemStyle}>
                <img
                  src="/images/keidai6.jpg"
                  alt="Image 6"
                  style={imageStylecalmobile}
                />
              </div>
            </Carousel>
            <h1 style={h1Stylemobile}>問い合わせ</h1>
            <p style={textmobile}>
              ご不明点等がある場合は、
              <br />
              obuse.keidaiart@gmail.com
              <br />
              (境内アート×苗市実行委員)までご連絡ください
            </p>
            <img
              src="/images/footer_pic.png"
              alt="Main Pic"
              style={fotterImageStylemobile}
            />
          </div>
        )}
      </div>
    </React.Fragment>
  );
}

export default HomePage;
