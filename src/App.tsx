import React, { useState } from "react";

const BUNNY =
  "https://images.pexels.com/photos/326012/pexels-photo-326012.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2";

function App() {
  return <BuggyButtons />;
}

const BuggyButtons = () => {
  const [openCount, setOpenCount] = useState(0);
  const IDs = [1, 2, 3, 4, 5];
  const verb = openCount == 1 ? "is " : "are ";
  const noun = openCount == 1 ? "bunny." : "bunnies.";

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div
          style={{ display: "flex", justifyContent: "center", marginTop: 50 }}
        >
          {IDs.map((item) => {
            return (
              <div
                key={item}
                style={{
                  marginRight: 10
                }}
              >
                <BuggyButton
                  openCount={openCount}
                  setOpenCount={setOpenCount}
                />
              </div>
            );
          })}
        </div>
        <div style={{ alignSelf: "center", marginTop: 20 }}>
          {"There " + verb + openCount + " open " + noun}
        </div>
      </div>
    </>
  );
};

const BuggyButton = ({
  openCount,
  setOpenCount
}: {
  openCount: number;
  setOpenCount: (arg0: number) => void;
}) => {
  function handleOpenCount(arg: number) {
    if (arg <= 0) {
      setOpenCount(0);
    }
    setOpenCount(arg);
  }
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <img
      src={BUNNY}
      alt="stop bugging me"
      height={300}
      width={200}
      onClick={() => {
        handleOpenCount(openCount - 1);
        setIsOpen(false);
      }}
    />
  ) : (
    <button
      onClick={() => {
        setOpenCount(openCount + 1);
        setIsOpen(true);
      }}
    >
      OPEN BUNNY
    </button>
  );
};

export default App;
