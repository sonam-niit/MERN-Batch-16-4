import React from 'react';
import SubmissionTimer from './usecase2/SubmissionnTimer';
import RealTimeClock from './usecase2/realtimeclock';
import UseCaseInputValidation from './usecase2/UseCaseInputValidation';
import UseCaseLiveFilter from './usecase2/UseCaseLiveFilter';
import { Link } from 'react-router-dom';


function UseCase2() {
    return (<>
        <SubmissionTimer submissionDate="2023-09-26T23:59:59" />
        <RealTimeClock />
        <UseCaseInputValidation />
        <UseCaseLiveFilter />
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </>);
}

export default UseCase2;