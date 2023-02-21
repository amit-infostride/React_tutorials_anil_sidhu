

//  src folder mein css file bani hai StyleInReact.css name se


import React from 'react'
import '../StyleInReact.css'
import style from '../custom.module.css'

import styled from 'styled-components';


// style component
const Title = styled.h1`
     font-size: 1.5em;
     text-align: center;
     color: palevioletred;` ;

const StyleInReact = () => {



    return (
        <div>
            {/* external css */}
            <h1 className='primary'>Style Type 1 in React js </h1>
            {/* inline syle */}
            <h1 style={{ color: 'red', backgroundColor: 'blue' }} >Style Type 2 in React js </h1>

            {/* custom.css  file is made   and import import style from '../custom.module.css' */}
            <h1 className={style.success}>Style Type 3 in React js </h1>


            {/* // react style component  install npm i styled-components*/}
            <Title>
                <h1>Style Type 3 in React js </h1>
                Style Type 3 in React js 
            </Title>

            



        </div>
    )
}

export default StyleInReact 