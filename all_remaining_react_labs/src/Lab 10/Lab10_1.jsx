// Demonstrate the ReactJS props.

function PropsUse(props) {
    let tempString = "Whole Numbers: ";
    let i;
    for (i = 0; i < props.count; i++) {
        tempString += i + ", ";
    }
    tempString += i + "";
    return (
        <div>
            <h2>{tempString}</h2>
        </div>
    );
}

export default PropsUse;
