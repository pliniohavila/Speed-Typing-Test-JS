import { useEffect, useState } from "react";
import axios from "axios";

import { Wrapper, Infos, TextTest, Button, TextareaInput } from "../styles/styles";


export function Container() {
    const [textCase, setTextCase] = useState('')
    const [textInput, setTextInput] = useState(' ')
    const [timeActive, setTimeActive] = useState(false)
    const [time, setTime] = useState(50)
    const [textareaActive, setTextareaActive] = useState(true)
    const [accuracy, setAccuracy] = useState(0)
    const [countErrors, setCountErrors] = useState(0)

    async function getTextCase() {
        const texts = await axios.get('https://type.fit/api/quotes')
        const text = texts.data[Math.floor(Math.random() * texts.data.length)]
        setTextCase(`${text.text} - ${text.author}`)

        const textCaseSpan = document.querySelectorAll('span')
        textCaseSpan.forEach((char) => {
                char.classList.remove('correct')
                char.classList.remove('incorrect')
        })
    }

    useEffect(() => {
        getTextCase();
    }, []);

    function handleCorrection(event) {
        event.preventDefault()
        setTextInput((state) => event.target.value)

        const textCaseSpan = document.querySelectorAll('span')
        const textInputArray = textInput.split('')

        textCaseSpan.forEach((origin, index) => {
            let char = textInputArray[index]

            if (textCaseSpan.length === textInputArray.length) {
                finished()
                getAccuracy(textInputArray.length) 
            }
            
            if (char == null) {
                textCaseSpan[index].classList.remove('correct')
                textCaseSpan[index].classList.remove('incorrect')
            }
            else if(char === origin.innerText) {
                textCaseSpan[index].classList.add('correct')
                
            }
            else {
                textCaseSpan[index].classList.add('incorrect')
                setCountErrors((state) => countErrors + 1)
            }
        })
    }

    useEffect(() => {
        const interval = setTimeout(() => {
            if (timeActive && time > 0) {
                setTime((time) => time - 1)
            }            
        }, 1000)
        return () => {
            clearTimeout(interval) 
        }

    }, [timeActive, time])

    useEffect(() => {
        if (time === 0) {
            finished()
        }
    }, [time])

    function finished() {
        setTimeActive(false)
        setTextareaActive(true)
        getAccuracy()
    }

    function handleStart() {
        setAccuracy(0)
        setTime(50)
        setTextInput('')
        setTimeActive(true)
        setTextareaActive(false)
        setCountErrors(0)
    }

    function getAccuracy(textInputArrayLength) {
        const calcAccuracy = (((textInputArrayLength - countErrors) * 100) / textInputArrayLength).toFixed(2)
        setAccuracy(calcAccuracy)
    }

    return (
        <Wrapper>
            <Infos>
                <div className="info">{time} <p>segundos</p></div>
                <div className="info"> {accuracy}%<p>acuracia</p></div>
            </Infos>
             <TextTest>
                {textCase.split('').map((char) => {
                    return (
                        <span>{char}</span>
                    )
                })
                }
             </TextTest>
            <div className="buttons">
                <Button onClick={handleStart}>INICIAR</Button>
                <Button onClick={getTextCase}>NOVA FRASE</Button>
            </div>
            <p className="information">Quando finalizar: tecle a tecla de espaço para encerrar.</p>
            <TextareaInput 
                disabled= {textareaActive}
                onChange={handleCorrection} 
                value={textInput} 
                placeholder="Textarea Input">
            </TextareaInput >
        </Wrapper>
    )
}