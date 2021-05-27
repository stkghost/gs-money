import styled from 'styled-components';

export const Container = styled.header`
    background: var(--blue);
    width: 100%;
    height: 200px;
    display: flex;

`

export const Content = styled.div `
    max-width: 1120px;
    margin: 0 auto;
    width: 80%;
    padding: 2rem 1rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items:  center;

    button {
        background: var(--blue-light);
        color: #fff;
        font-size: 1rem;
        border: 0;
        padding: 0 2rem;
        border-radius: 4px;
        height: 3rem;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(0.9)
        }
    }

`