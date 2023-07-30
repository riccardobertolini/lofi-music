import React from 'react';
import {Container} from './Shuffler.style'
import {MuiVariants} from "../constants/colors";
import ShuffleIcon from '@mui/icons-material/Shuffle';


import { useAccessibilityContext } from '../contexts/AccessibilityContext'

const Shuffler = ({ setRandomTracks, totalTracks }: { setRandomTracks: (value: number[]) => void, totalTracks: number }) => {
    const {tabIndex} = useAccessibilityContext();

    const getMultipleRandomTracks = (arr: number[], num: number) => {
        const newArr = [...arr];
        for (let i = newArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
        }
        return newArr.slice(0, num);
    }

    return (
        <Container>
            <ShuffleIcon onClick={
                () => setRandomTracks(getMultipleRandomTracks(Array.from(Array(totalTracks).keys()), 3))
            } 
            aria-label="shuffle random tracks"
            onKeyDown={
                (e) => {
                    if(e.key == "Return" || e.key == " " || e.key == "Enter"){
                        setRandomTracks(getMultipleRandomTracks(Array.from(Array(totalTracks).keys()), 3))
                    }
                }
            }
            tabIndex={tabIndex}

                sx={{ fontSize: '32px',  color: MuiVariants.NEUTRAL }}
            />
        </Container >
    );
};

export default Shuffler;
