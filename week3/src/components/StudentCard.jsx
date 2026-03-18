function StudentCard({name, score}) {
    // const {name, score} = props;

    const result = score>=50 ? "Passed" : "Failed";
    let badResults = false;

    if(score < 10) {
        badResults = true;
    }

    return <div>
        <div>Name: {name}</div>
        <div>Score: {score}</div>
        <div>{result}</div>
        { score > 95 &&
            <div>The student did really well!!</div>}
        {badResults && <div>The student did really bad!!</div>}
    </div>
}

export default StudentCard;