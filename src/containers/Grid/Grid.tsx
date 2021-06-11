import * as React from 'react';
import { grid } from './styles.module.css';

const Grid: React.FunctionComponent = ({ children }) => {
    return (
        <div className={grid}>
            {children}
        </div>
    )
}

export default Grid;
