// WAP in ReactJS to display the element if it has attribute called isDisplay to be true (using conditional rendering) 

function Greeting1(props){
    if(props.isDisplay){
        return (
          <>
            <center>
              <h1>Hello 1</h1>
            </center>
          </>
        );
    }
    return null;
}

 function Greeting2(customProps){
    return (
      <>
        <center>{customProps.isDisplay ? <h1>Hello 2</h1> : null}</center>
      </>
    );
 }

function Greeting3({isDisplay}){
    return (
      <>
        <center>{isDisplay == true && <h1>Hello 3</h1>}</center>
      </>
    );
}

export {Greeting1, Greeting2, Greeting3}