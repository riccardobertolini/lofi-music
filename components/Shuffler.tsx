import React from 'react';
import {Container} from './Shuffler.style'

const Shuffler = ({ setRandomTracks, totalTracks }: { setRandomTracks: (value: number[]) => void, totalTracks: number }) => {
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
            <div className="shuffler" onClick={
                () => setRandomTracks(getMultipleRandomTracks(Array.from(Array(totalTracks).keys()), 3))
            } />
        </Container >
    );
};

export default Shuffler;
