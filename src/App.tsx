import React, { useState } from "react";
import useMedia from "use-media";

function App() {
  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    fontFamily: "MidashiGoPr5 MB31-83pv-RKSJ-H*",
  };
  const isWide = useMedia({ minWidth: "768px" });

  const imageContainerStyle: React.CSSProperties = {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
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

  const chuuiStyle: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    fontSize: `1.5vw`,
    fontWeight: "bold",
    marginLeft: "15%",
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

  const h2Stylemobile: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    marginLeft: "10%",
    fontSize: `5Vw`,
    boxSizing: "border-box",
    fontWeight: "bold",
  };

  const h3Stylemobile: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    marginLeft: "10%",
    fontSize: `4Vw`,
    boxSizing: "border-box",
    fontWeight: "bold",
  };

  const h2Style: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    marginLeft: "10%",
    fontSize: `2.6Vw`,
    boxSizing: "border-box",
  };

  const h3Style: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    marginLeft: "12%",
    fontSize: `2.2Vw`,
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

  const chuuimobile: React.CSSProperties = {
    textAlign: "left",
    color: "white",
    fontSize: `3.1vw`,
    marginLeft: "12%",
    boxSizing: "border-box",
    fontWeight: "bold",
  };

  const boxStyle: React.CSSProperties = {
    border: "2px solid white",
    display: "inline-block",
    marginLeft: "10%",
    marginRight: "10%",
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    width: "80%",
    marginTop: "20px",
    marginLeft: "10%",
  };

  const buttonContainerStylemobile: React.CSSProperties = {
    display: "flex",
    width: "81%",
    marginLeft: "10%",
    flexDirection: "column",
    alignItems: "center",
  };

  const buttonStyle: React.CSSProperties = {
    width: "49%",
    padding: "10px 20px",
    backgroundColor: "white",
    color: "rgb(234, 96, 142)",
    cursor: "pointer",
    fontSize: "1.5vw",
    border: "solid",
    borderColor: "white",
  };

  const buttonStylemobile: React.CSSProperties = {
    width: "100%",
    padding: "10px 20px",
    backgroundColor: "white",
    color: "rgb(234, 96, 142)",
    cursor: "pointer",
    fontSize: "4vw",
    border: "solid",
    borderColor: "white",
    marginBottom: "8px",
  };

  const fotterImageStyle: React.CSSProperties = {
    width: "15%",
    marginLeft: "80%",
  };

  const fotterImageStylemobile: React.CSSProperties = {
    width: "20%",
    marginLeft: "75%",
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
  };
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const openInNewTab = (url: string | URL | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const formUrl =
    "https://docs.google.com/forms/d/e/1FAIpQLScqbm34ZDuVnjKSP6fzLf7EEGEyw8vITzL9xqX4PQ2zjMqMGA/viewform?fbclid=IwAR3Aarlz1ZCSGUKl9nhoSRGM5DCVaXL7IdMP4DwAhyqPNIcr-8M8qfhYem0";

  const tanpenUrl = "https://filmfreeway.com/ObuseKeidaiArt";

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
        {isWide ? (
          <div style={{ marginTop: "5%" }}>
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
            <h1 style={h1Style}>出展者募集</h1>
            <p style={textStyle}>
              募集期間　　1月11日（水）～2月11日（土）
              <br />
              応募結果の連絡　3月上旬（予定）
            </p>
            <div style={imageContainerStyle}>
              <img
                src="/images/bosyuu.png"
                alt="bosyuu Pic"
                style={{ width: "70%", height: "80%", marginBottom: "3%" }}
                onClick={() => openModal("/images/bosyuu.png")}
              />
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

            <h1 style={h2Style}>注意事項</h1>
            <p style={h3Style}>キャンセルについて</p>

            <p style={chuuiStyle}>
              やむを得ない理由により、出展をキャンセルする場合は、
            </p>
            <p style={chuuiStyle}>
              ➀ 出展名　➁ 代表者名　➂
              キャンセル理由を、obuse.keidaiart@gmail.com までお知らせください。
            </p>
            <p style={chuuiStyle}>
              4月15日（月）以降のキャンセルは、出展料を全額請求させていただきますのでご了承ください。
            </p>

            <p style={h3Style}>貸出備品について</p>
            <p style={chuuiStyle}>
              電源やテントの貸出はございません。各自ご用意ください。
            </p>

            <p style={h3Style}>ゴミについて</p>
            <p style={chuuiStyle}>
              なるべくゴミを出さない、持ち帰ることへのご協力をお願いいたします。
            </p>

            <p style={h3Style}>トラブルについて</p>
            <p style={chuuiStyle}>
              開催中の盗難・事故・駐車場トラブルに関しては自己責任でお願いいたします。
            </p>

            <p style={h3Style}>写真掲載について</p>
            <p style={chuuiStyle}>
              スタッフにより撮影された写真は、当SNS及びサイトにて掲載させていただく可能性があります。ご了承ください。
            </p>

            <p style={h3Style}>開催中止の可能性について</p>
            <p style={chuuiStyle}>
              天候や災害等によりイベントの開催を見合わせる可能性がございます。ご了承ください。
            </p>

            <div style={buttonContainerStyle}>
              <button style={buttonStyle} onClick={() => openInNewTab(formUrl)}>
                出店の応募はこちら
              </button>
              <button
                style={buttonStyle}
                onClick={() => openInNewTab(tanpenUrl)}
              >
                短編映画祭の応募はこちら
              </button>
            </div>

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
          <div style={{ marginTop: "22vw" }}>
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
            <h1 style={h1Stylemobile}>出展者募集</h1>
            <p style={textmobile}>
              募集期間　　1月11日（水）～2月11日（土）
              <br />
              応募結果の連絡　3月上旬（予定）
            </p>
            <div style={{ height: "20px", width: "100px" }}></div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "2%",
                marginLeft: "10%",
                marginRight: "10%",
              }}
            >
              <div style={{ width: "50%" }}></div>
            </div>
            <div style={imageContainerStyle}>
              <img
                src="/images/bosyuu.png"
                alt="bosyuu Pic"
                style={{ width: "80%", height: "80%", marginBottom: "3%" }}
                onClick={() => openModal("/images/bosyuu.png")}
              />
              <img
                src="/images/kaizyo.png"
                alt="area Pic"
                style={{
                  width: "50%",
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
            <div style={{ height: "10%" }}></div>
            <h1 style={h2Stylemobile}>注意事項</h1>
            <p style={h3Stylemobile}>キャンセルについて</p>
            <p style={chuuimobile}>
              やむを得ない理由により、出展をキャンセルする場合は、
              <br />
              ➀ 出展名　➁ 代表者名　➂ キャンセル理由を、
              <br />
              obuse.keidaiart@gmail.com までお知らせください。
              <br />
              4月15日（月）以降のキャンセルは、
              <br />
              出展料を全額請求させていただきますのでご了承ください。
            </p>

            <p style={h3Stylemobile}>貸出備品について</p>
            <p style={chuuimobile}>
              電源やテントの貸出はございません。各自ご用意ください。
            </p>

            <p style={h3Stylemobile}>ゴミについて</p>
            <p style={chuuimobile}>
              なるべくゴミを出さない、
              <br />
              持ち帰ることへのご協力をお願いいたします。
            </p>

            <p style={h3Stylemobile}>トラブルについて</p>
            <p style={chuuimobile}>
              開催中の盗難・事故・駐車場トラブルに関しては
              <br />
              自己責任でお願いいたします。
            </p>

            <p style={h3Stylemobile}>写真掲載について</p>
            <p style={chuuimobile}>
              スタッフにより撮影された写真は、当SNS及びサイトにて
              <br />
              掲載させていただく可能性があります。ご了承ください。
            </p>

            <p style={h3Stylemobile}>開催中止の可能性について</p>
            <p style={chuuimobile}>
              天候や災害等によりイベントの開催を
              <br />
              見合わせる可能性がございます。ご了承ください。
            </p>

            <div style={buttonContainerStylemobile}>
              <button
                style={buttonStylemobile}
                onClick={() => openInNewTab(formUrl)}
              >
                出店の応募はこちら
              </button>
              <button
                style={buttonStylemobile}
                onClick={() => openInNewTab(tanpenUrl)}
              >
                短編映画祭の応募はこちら
              </button>
            </div>
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

export default App;
