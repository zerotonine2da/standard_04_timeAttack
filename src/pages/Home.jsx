import React from 'react';
import styled from 'styled-components';
import InputList from '../components/InputList';
import Contents from '../components/Contents';
function Home() {
    return (
        <Wrapper>
            <header>
                <h2>📝 Standard TodoList</h2>
            </header>
            <InputPart>
                <InputList />
            </InputPart>
            <ContentPart>
                <Contents isDone={false} />
                <Contents isDone={true} />
            </ContentPart>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    max-width: 1000px;
    min-width: 600px;
    margin: auto;
    & h2 {
        padding-left: 10px;
    }
`;

const InputPart = styled.div`
    border: 1px solid black;
    padding: 10px;
    margin: 10px;
    border-radius: 12px;
`;

const ContentPart = styled.div`
    padding: 10px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default Home;
