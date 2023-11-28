import React from 'react';
import styled from 'styled-components';
import InputList from '../components/InputList';
import Contents from '../components/Contents';
function Home() {
    return (
        <div>
            <InputPart>
                <InputList />
            </InputPart>
            <ContentPart>
                <Contents isDone={false} />
            </ContentPart>
            <ContentPart>
                <Contents isDone={true} />
            </ContentPart>
        </div>
    );
}

const InputPart = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
`;

const ContentPart = styled.div`
    border: 1px solid blue;
    padding: 10px;
    margin: 10px;
`;

export default Home;
