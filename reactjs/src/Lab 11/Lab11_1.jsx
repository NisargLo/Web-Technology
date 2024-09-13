// Demonstrate the use of map method in ReactJS to display array.

const ArrayFunction = () => {
  const arr = [1, 2, 3, 4, 5];
  return (
    <>
      <center>
        <h1>Array Function</h1>
        <ul>
          {arr.map((i) => {
            return <li key={i}>{i}</li>;
          })}
        </ul>
      </center>
    </>
  );
};

export default ArrayFunction;
