import React from 'react';
import './About.css';

function About() {
    return (
        <React.Fragment>
            <h1 className='center black bb bw1 br3 w-20 grow'>about</h1>

            {/* patch note 3 😍 */}

            {/* patch note 2 😍 */}
            <div className='black ba br3 bw1 w-50 center ma2 pa3
            bg-light-yellow code'>
                <p className={'pa1'}> Patch notes 1.1.0</p>
                <li>Changed UI in Header.js, AddToDo.js files</li>
                <li>Specifically changed the background color in Header.js</li>
                <li>Changed UI in input buttons located at home / AddToDo.js file. Gave it
                rounded corner borders with a shadow look to them.</li>
                <li>Submit button has a hover effect along with a color changed when hovered</li>
                <li>Background color of the App's body has also been changed from a 'Grisaille'
                    to 'Anti-Flash White'</li>
                <li>Added an underline when Home and About are hovered</li>
                <li>Added emoji's next to Home and About</li>

                {/* info below */}
                <p className='b ma1 pa1 center'>
                    GitHub: {' '}
                    <a href={'https://github.com/seycileli'} className={'black'}>@seycileli</a>
                    {' '}| On: September 22, 2020</p>
            </div>

            {/* our first patch note 1 😍*/}
            <div className='black ba br3 bw1 w-50 center ma2 pa3
            bg-washed-green black code'>
                <p>ToDoList app v1 was created</p>

                {/* info below */}
                <p className='b ma1 pa1 center'>
                    GitHub:{' '}
                    <a href={'https://github.com/seycileli'}>@seycileli</a>{' '}
                    | On: September 19, 2020</p>
            </div>
        </React.Fragment>
    )
}

export default About
