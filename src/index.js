import ReactDOM from "react-dom";
import './App.css';


ReactDOM.render(
    <>
        <header className={'header'}>
            <ul className='Nav'>
                <li>
                    <a href={'#'}>
                        HTML
                    </a>
                </li>
                <li>
                    <a href={'#'}>
                        JS
                    </a>
                </li>
                <li>
                    <a href={'#'}>
                        CSS
                    </a>
                </li>
                <li>
                    <a href={'#'}>
                        REACT
                    </a>
                </li>
            </ul>
        </header>
        <main>
            <div>
                <table>
                    <tr>
                        <td>
                            <img src='HTML.png' alt={'Картинка HTML'} width={'560px'} height={'300px'}/>
                        </td>
                        <td>
                            <Lorem/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src='JS.jpg' alt={'Картинка JS'} width={'560px'} height={'300px'}/>
                        </td>
                        <td>
                            <Lorem/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src='css.png' alt={'Картинка css'} width={'560px'} height={'300px'}/>
                        </td>
                        <td>
                            <Lorem/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <img src='react.png' alt={'Картинка react'} width={'560px'} height={'300px'}/>
                        </td>
                        <td>
                            <Lorem/>
                        </td>
                    </tr>
                </table>
            </div>
        </main>
        <footer className={'header'}>
            <div className={'footer-img'}>
                <Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/><Img/>
                <Img/><Img/><Img/><Img/><Img/>
            </div>

        </footer>
    </>,
    document.getElementById('root')
);
    function Lorem() {
        return "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt " +
        "ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco " +
        "laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in " +
        "voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat " +
        "cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    function Img() {
        return <img src='IT.jpg' alt={'Картинка react'} width={'50px'} height={'50px'}
        />
    }
