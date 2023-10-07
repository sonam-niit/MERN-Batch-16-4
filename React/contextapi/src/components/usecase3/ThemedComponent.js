import React from 'react';
import { useThemeContext } from './TheameContext';

function ThemedComponent() {

    const {theme,toggleTheme}= useThemeContext();

    return ( <div style={{background:theme==='light'?'#fff':'#333',
    color:theme==='light'?'#333':'#fff'}}>
        <p>This is a Themed Component</p>

        <button onClick={toggleTheme}>Toggle Theme</button>
    </div> );
}

export default ThemedComponent;