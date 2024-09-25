//Perform CRUD operation on MockAPI using ReactJS. (minimum 3 mock api)

function Faculty(){

     const display=()=>{
          fetch('https://66f37eed71c84d805878e31d.mockapi.io/Faculty',{method:'get'})
          .then(res => res.json())
          .then(data=>console.log('\ndisplay()\n',data));
     }

     const add=()=>{
          const newFaculty={
               name,
               avatar,
               experience,
               id
          }
          fetch('https://66f37eed71c84d805878e31d.mockapi.io/Faculty',{
               method:'post',
               headers:{
                    'Content-Type':'application/json'
               },
               body:JSON.stringify(newFaculty)
          })
          .then(res => res.json())
          .then(data=>console.log('\add()\n',data));
     }


     return(
          <>
               <center>
                    <br/>
                    <input type='text' placeholder="Name:"/><br/><br/>
                    <input type='text' placeholder="Avatar Link:"/><br/><br/>
                    <input type='text' placeholder="Experience:"/><br/><br/>
                    <input type='text' placeholder="ID:"/><br/><br/>
                    <button className="btn btn-primary" onClick={add}>Add</button><br/><br/><br/>
                    <button className="btn btn-success" onClick={display}>Display</button>
               </center>
          </>
     );
}

export default Faculty;