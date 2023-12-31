import React from 'react';

function App() {
    const appStyle: React.CSSProperties = { // CSSプロパティの型を指定
        textAlign: 'center',
        backgroundColor: '#282c34',
        color: 'white',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column', // この値は文字列リテラル型として認識される
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 'calc(10px + 2vmin)'
    };

    const headerStyle: React.CSSProperties = { // こちらも同様に
        backgroundImage: 'url(./path/to/your/image.jpg)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        width: '100%',
        height: '100%'
    };

    return (
        <div style={appStyle}>
            <header style={headerStyle}>
                <p>Welcome to My Homepage!</p>
            </header>
        </div>
    );
}

export default App;
