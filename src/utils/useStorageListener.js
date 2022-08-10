import React from "react";

const useStorageListener = () => {
  const [storageChange, setStorageChange] = React.useState(false);

  React.useEffect(() => {
    const onChange = (change) => {
      if (change.key === "TODOS") {
        setStorageChange(true);
      }
    };

    window.addEventListener("storage", onChange);

    return () => {
      window.removeEventListener("storage", onChange);
    };
  }, []);

  return (
    {
      show: storageChange,
      toggleShow: setStorageChange,
    }
  )
}

export { useStorageListener };