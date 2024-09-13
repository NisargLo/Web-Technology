//Demonstrate the Event Handling in ReactJS. 

function Event(){
    return (
        <button onClick={
            ()=>{
                return alert("Event Occured!");
            }
        }>Click Me</button>
    );
}

export default Event;