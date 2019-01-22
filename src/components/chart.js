import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default (props) => {
    const average = (data) => {
        return Math.round(data.reduce((prev, curr) => prev += curr, 0) / data.length);
    }
    return (
        <div>
            <Sparklines height={100} width={180} data={props.data}>
                <SparklinesLine color={props.color} />
                <SparklinesReferenceLine type="avg"/>
            </Sparklines>
            <div>Average: {average(props.data)} {props.unit}</div>
        </div>
    );
}