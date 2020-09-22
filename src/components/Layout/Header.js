import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div className={
        'container center f3 pa2 bb bw2 br1'}>
            <h1 className='white code'>TodoList</h1>

            {/* Home and About */}
            <div className={'white ma2'}> {' 🏠 '}
                <Link className='white f3 underline-hover' to=''>Home</Link> {' - '}
                <Link className='white f3 underline-hover' to='/about'>About</Link> {' 🗒 '}
            </div>

        </div>
    )
}

export default Header
