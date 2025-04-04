//global scope
//loacl scope

const value = 1;

export default function Home() {
  console.log(value);

  return (
    <div
      className="ss"
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: 500,
        marginLeft: 30,
        marginTop: 30,
      }}
    >
      <p>Hello</p>
      <p>Hello</p>
      <Box />
      <Box1 />
      <Box2 />
    </div>
  );
}

const Box = () => {
  return (
    <div
      style={{
        justifyItems: "center",
        height: "50px",
        width: "50px",
        backgroundColor: "grey",
      }}
    >
      box
    </div>
  );
};

const Box1 = () => {
  return (
    <div style={{ height: "50px", width: "50px", backgroundColor: "yellow" }}>
      box
    </div>
  );
};

const Box2 = () => {
  return (
    <div style={{ height: "50px", width: "50px", backgroundColor: "green" }}>
      box
    </div>
  );
};

const getValue = (value) => {
  return value;
};
console.log(getValue);
