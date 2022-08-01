import styled from 'styled-components'

const myBoxShadow = `
0 2px 1px -1px rgba(0,0,0,.2),
0 1px 1px 0 rgba(0,0,0,.14),
0 1px 3px 0 rgba(0,0,0,.12);
`

export const HeaderPage = styled.h1`
    font-size: 2rem;
    font-weight: 700;
    color: #1b1b20;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2.5rem 0;

`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 5rem;
    min-height: 55vh;
    border-radius: 8px;
    background-color: #333;
    overflow: clip;

    .information {
        color: #fff;
        margin-left: 1rem;
    }

    .buttons {
        display: flex;
        justify-content: center;
    }
`

export const Infos = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1.8rem;
    color: #e3e30b;
    padding: 1rem 0;

    .info {
        font-size: 1.8rem;
        line-height: 1.6;
        background-color: #5e5e5e;
        padding: 0.5rem 0.5rem;
        border-radius: 8px;
        text-align: center;
        width: auto;

        box-shadow: ${myBoxShadow};

        p {
            font-size: 0.75rem;
        }
    }
`

export const TextTest = styled.div`
    background-color: #c4c4c4;
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
    font-size: 1.5rem;
    text-align: left;
    line-height: 1.6;
    border-radius: 4px;
    box-shadow: ${myBoxShadow};

    .correct {
        color: green;
    }

    .incorrect {
        color: red;
    }
`

export const Button = styled.button`
    display: inline;
    margin: 1rem auto;
    background-color: #e3e30b;
    color: #1b1b20;
    font-weight: 700;
    text-align: center;
    line-height: 1.6;
    width: 10rem;
    border: none;
    outline: none;
    border-radius: 4px;
    box-shadow: ${myBoxShadow};

    &:hover {
        opacity: 0.8;
    }

    &:active {
        opacity: 0.5;
    }
`

export const TextareaInput = styled.textarea`
    background-color: #c4c4c4;
    padding: 0.5rem 1rem;
    margin: 0 1rem 1.5rem;
    font-family: 'Ubuntu Mono', monospace;
    font-size: 1.5rem;
    text-align: left;
    line-height: 1.6;
    border-radius: 4px;
    resize: none;
    box-shadow: ${myBoxShadow};

`